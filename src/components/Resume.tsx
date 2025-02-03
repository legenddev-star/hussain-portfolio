import React from "react";
import resumeData from "../data/resumeDtata.json";
import heroImage from "@/assets/Hussain.jpeg";
import Image from "next/image";

// Interfaces
interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  github: string;
  summary: string;
}

interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Language {
  language: string;
  proficiency: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

const Header: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => (
  <header className="mb-2 flex flex-col items-center border-b-2 border-gray-200 p-6 dark:border-gray-700 md:flex-row">
    <div className="mb-4 md:mb-0 md:mr-8">
      <Image
        src={heroImage || "/default-profile.jpg"}
        alt={personalInfo.name}
        width={200}
        height={200}
        className="rounded-full border-4 border-gray-300 dark:border-gray-600"
      />
    </div>
    <div className="text-center md:text-left">
      <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
        {personalInfo.name}
      </h1>
      <h2 className="mb-4 text-2xl text-gray-700 dark:text-gray-300">
        {personalInfo.title}
      </h2>
      <div className="mb-4 flex flex-wrap justify-center gap-4 md:justify-start">
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <svg
            className="mr-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          {personalInfo.email}
        </a>
        <a
          href={personalInfo.github}
          className="flex items-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          {personalInfo.github}
        </a>
      </div>
    </div>
  </header>
);

// Experience Component
const Experience: React.FC<{ experience: ExperienceItem[] }> = ({
  experience,
}) => (
  <section className="mb-2 border-b-2 border-gray-200 p-6 dark:border-gray-700">
    <h2 className="mb-4 pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      Experience
    </h2>
    {experience.map((item, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {item.position}
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {item.company}
        </p>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          {item.startDate} - {item.endDate}
        </p>
        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>
    ))}
  </section>
);

// Education Component
const Education: React.FC<{ education: EducationItem[] }> = ({ education }) => (
  <section className="mb-2 border-b-2 border-gray-200 p-6 dark:border-gray-700">
    <h2 className="mb-4 pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      Education
    </h2>
    {education.map((item, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {item.degree}
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {item.institution}
        </p>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          {item.startDate} - {item.endDate}
        </p>
        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
      </div>
    ))}
  </section>
);

// Skills Component
const Skills: React.FC<{ skills: string[] }> = ({ skills }) => (
  <section className="mb-2 border-b-2 border-gray-200 p-6 dark:border-gray-700">
    <h2 className="mb-4 pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      Skills
    </h2>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="text-md rounded-full border border-gray-300 px-3 py-1 font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

// Languages Component
const Languages: React.FC<{ languages: Language[] }> = ({ languages }) => (
  <section className="mb-2 border-b-2 border-gray-200 p-6 dark:border-gray-700">
    <h2 className="mb-4 pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      Languages
    </h2>
    <ul className="space-y-2">
      {languages.map((lang, index) => (
        <li key={index} className="flex items-center justify-between">
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {lang.language}
          </span>
          <span className="rounded-full border border-gray-300 px-2 py-1 text-sm text-gray-600 dark:border-gray-600 dark:text-gray-400">
            {lang.proficiency}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

// Projects Component
const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <section className="mb-2 border-b-2 border-gray-200 p-6 dark:border-gray-700">
    <h2 className="mb-4 pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      Projects
    </h2>
    {projects.map((project, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-xl font-semibold">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            {project.name}
          </a>
        </h3>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-600 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </section>
);

// Interests Component
const Interests: React.FC<{ interests: string[] }> = ({ interests }) => (
  <section className="p-6">
    <h2 className="mb-4 pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
      Interests
    </h2>
    <ul className="grid grid-cols-2 gap-2">
      {interests.map((interest, index) => (
        <li key={index} className="flex items-center">
          <svg
            className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">{interest}</span>
        </li>
      ))}
    </ul>
  </section>
);

// Main Resume Component
const Resume: React.FC = () => {
  return (
    <div
      id="resume"
      className="mx-auto my-10 bg-white p-2 text-gray-900 dark:bg-gray-900 dark:text-gray-100 print:bg-white print:text-black"
    >
      <Header personalInfo={resumeData.personalInfo} />

      <section className="mb-2 border-b-2 border-gray-200 p-6 dark:border-gray-700 print:mb-4">
        <h2 className="mb-4 pb-2 text-2xl font-bold text-gray-900 dark:text-gray-100 print:text-xl">
          Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300 print:text-gray-800">
          {resumeData.personalInfo.summary}
        </p>
      </section>

      <Experience experience={resumeData.experience} />
      <Education education={resumeData.education} />
      <Projects projects={resumeData.projects} />

      <div className="grid gap-8 md:grid-cols-2 print:gap-4">
        <Skills skills={resumeData.skills} />
        <div>
          <Languages languages={resumeData.languages} />
          <Interests interests={resumeData.interests} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
