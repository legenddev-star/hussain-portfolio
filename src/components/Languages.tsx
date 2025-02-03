import React from "react";

interface Language {
  name: string;
  level: string;
  flag: string;
}

const languages: Language[] = [
  { name: "English", level: "Fluent", flag: "us" },
];

interface LanguageCardProps {
  language: Language;
  index: number;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language, index }) => (
  <div
    className="flex transform items-center space-x-4 rounded-lg bg-white p-2 shadow-lg transition duration-300 ease-in-out hover:scale-105 dark:bg-gray-800"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <span className="text-3xl">{language.flag}</span>
    <div>
      <h3 className="text-md font-semibold text-gray-800 dark:text-white">
        {language.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{language.level}</p>
    </div>
  </div>
);

const Languages: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="animate-fade-in-down mb-6 text-3xl font-bold text-gray-800 dark:text-white">
        Languages
      </h2>
      <div className="grid grid-cols-1  gap-2">
        {languages.map((language, index) => (
          <LanguageCard key={language.name} language={language} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Languages;
