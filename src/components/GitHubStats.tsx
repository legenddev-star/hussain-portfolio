"use client";

import React, { useState, useEffect } from "react";
import { githubService } from "@/lib/github";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Loader } from "lucide-react";
import type { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

type GitHubRepo =
  RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"][0];

interface RepoData {
  name: string;
  stargazers_count: number;
  language: string;
}

interface LanguageData {
  name: string;
  value: number;
}

interface UserData {
  login: string;
  name: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  created_at: string;
  bio: string | null;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const GitHubStats: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [languages, setLanguages] = useState<LanguageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await githubService.getUserData("legenddev-star");
        setUserData(userResponse.data as UserData);

        const reposResponse = await githubService.getRepositories(
          "legenddev-star",
          { per_page: 100 },
        );
        setRepos(
          reposResponse.data.map(
            (repo: GitHubRepo): RepoData => ({
              name: repo.name,
              stargazers_count: repo.stargazers_count ?? 0,
              language: repo.language ?? "",
            }),
          ),
        );

        const languageCounts: { [key: string]: number } = {};
        reposResponse.data.forEach((repo: GitHubRepo) => {
          if (repo.language) {
            languageCounts[repo.language] =
              (languageCounts[repo.language] || 0) + 1;
          }
        });

        const languageData = Object.entries(languageCounts)
          .map(([name, value]) => ({ name, value }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 5);

        setLanguages(languageData);
      } catch (err) {
        setError("Failed to fetch GitHub data. Please try again later.");
        console.error("Error fetching GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading)
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader className="animate-spin text-indigo-500" size={48} />
      </div>
    );
  if (error)
    return <div className="text-red-600 dark:text-red-400">{error}</div>;

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0,
  );

  const stats = [
    { label: "Repositories", value: userData?.public_repos || 0 },
    { label: "Stars", value: totalStars },
    { label: "Followers", value: userData?.followers || 0 },
    { label: "Following", value: userData?.following || 0 },
  ];

  return (
    <div className="flex-grow rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-md bg-gray-100 p-4 text-center shadow dark:bg-gray-700"
          >
            <span className="block text-2xl font-bold text-gray-900 dark:text-gray-100">
              {stat.value}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Top Languages
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={languages}
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {languages.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 text-center">
        <a
          href={`https://github.com/${userData?.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 mr-2 inline-block rounded bg-gray-800 px-4 py-2 font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          View Profile
        </a>
        <a
          href={`https://github.com/${userData?.login}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          View Repositories
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
