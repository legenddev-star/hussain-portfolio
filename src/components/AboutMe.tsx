import React from "react";
import Image from "next/image";
import heroImage from "@/assets/Hussain.jpeg";
import { Twitter, GithubIcon, Linkedin } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 md:col-span-3 lg:col-span-4">
      <div className="p-6">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0">
          <Image
            src={heroImage}
            alt="Thanzir's profile picture"
            className="h-32 w-32 rounded-full object-cover object-center shadow-md ring-4 ring-blue-500 dark:ring-blue-400"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              Thanzir Hussain
            </h1>
            <p className="mb-4 text-blue-600 dark:text-blue-400">
              @legenddev-star
            </p>
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
              Hey there, I&apos;m Thanzir, a Senior Full Stack Developer based
              in New York, USA. I dive deep into JavaScript and love crafting
              sleek, efficient web apps. With an eye for detail and a hunger for
              learning, I&apos;m all about delivering high-quality solutions
              that meet both user needs and business objectives.
            </p>
            <div className="flex justify-center space-x-4 sm:justify-start">
              <a
                href="https://github.com/legenddev-star"
                target="_blank"
                className="text-gray-700 transition-colors duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
