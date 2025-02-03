import React from "react";

interface TimelineItem {
  type: "education" | "experience";
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  skills?: string[];
}

const educationItems: TimelineItem[] = [
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    organization: "New York University",
    date: "Sep 2012 - May 2016",
    description:
      "Dual education: Theory and practice in Full Stack Development. Focus on modern web technologies and agile software development practices.",
  },
];

const experienceItems: TimelineItem[] = [
  {
    type: "experience",
    title: "Senior Software Engineer",
    organization: "OPEN EDX",
    date: "Aug 2022 - Dec 2024",
    location: "Cambridge, Massachusetts · Remote",
    description:
      "At Open edX, I led the modernization of the e-learning platform, improving performance, scalability, and user experience. I rebuilt the course player using React and Next.js, optimized performance with ISR and SSR, and refactored backend services with FastAPI and Node.js. I also developed a drag-and-drop course editor, integrated real-time analytics with Kafka, and optimized video streaming via AWS CloudFront and HLS. Additionally, I automated CI/CD with GitHub Actions and Docker and enhanced system observability with Datadog and Prometheus, all while mentoring developers and driving best practices in an agile environment.",
    skills: [
      "React",
      "Python/Django",
      "Next.js",
      "Node.js",
      "JavaScript",
      "FastAPI",
      "Kafka",
      "AWS",
      "GraphQL",
      "Material UI",
      "Ant Design",
      "Docker",
      "Datadog",
    ],
  },
  {
    type: "experience",
    title: "Senior Software Engineer",
    organization: "Spectral AI",
    date: "Nov 2019 - Aug 2022",
    location: "Remote - Texas",
    description:
      "At SpectralNet, I built scalable web applications for biomedical research, helping scientists analyze complex datasets efficiently. I designed a modular React-based front end, developed FastAPI/Flask backend services, and integrated Neo4j to model biological relationships for drug discovery. I also optimized query performance for vast datasets, integrated machine learning models, and built interactive data visualization dashboards. To ensure scalability, I deployed cloud infrastructure (AWS/GCP/Azure) and automated CI/CD pipelines. Throughout, I worked closely with researchers, led technical discussions, and ensured compliance with HIPAA and GDPR for secure biomedical data handling.Development of responsive websites (HTML, CSS, Bootstrap, jQuery, WordPress). Customizations and SEO optimization. Close collaboration with clients to implement tailored solutions.",
    skills: [
      "React",
      "NextJS",
      "Python",
      "GraphQL",
      "AWS/GCP/Azure",
      "SEO",
      "HIPAA",
      "Flask",
      "AI/ML",
      "Neo4j",
      "GitHub Actions",
      "Jenkins",
      "GitLab CI/CD",
      "Mentoring",
      "Biomedical Research",
      "cybersecurity",
      "leadership",
    ],
  },
  {
    type: "experience",
    title: "Software Engineer",
    organization: "FLEXPORT",
    date: "Jan 2017 - Oct 2019",
    location: "New York City, New York",
    description:
      "At Flexport, I built React-based fulfillment tracking tools, improving shipment visibility and operational efficiency for international e-commerce clients. I led the migration from monolith to microservices, using Node.js, Python (Flask/FastAPI), and Kafka, which improved scalability and reduced downtime. I optimized PostgreSQL performance, developed AWS Lambda-based event-driven workflows, and integrated Amazon and Shopify APIs to automate order fulfillment. Additionally, I improved backend performance with Redis caching, streamlined CI/CD with Jenkins, Docker, and Kubernetes, and collaborated with data scientists to integrate predictive analytics for shipping delays and demand forecasting.",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "Kafka",
      "AWS Lambda",
      "SQS",
      "Shopify API",
      "DevOps",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Redis",
      "CI/CD",
      "Predictive Analytics",
      "Microservices",
      "Agile Methodologies",
    ],
  },
  {
    type: "experience",
    title: "Software Engineer Intern",
    organization: "FLEXPORT",
    date: "Jun 2016 - Dec 2016",
    location: "New York City, New York",
    description:
      "At Flexport, I worked on E-commerce Fulfillment, building React-based tracking tools and dashboards that provided real-time analytics for order processing and shipment tracking. I played a key role in migrating from a monolith to microservices with Node.js, Python (Flask/FastAPI), and Kafka, improving scalability and reducing downtime. I optimized PostgreSQL queries for inventory tracking, developed RESTful APIs, and implemented AWS Lambda-based event-driven workflows to automate shipment updates. Additionally, I built Amazon and Shopify API integrations, improved backend performance with Redis caching, streamlined CI/CD with Docker and Kubernetes, and collaborated with data scientists on predictive analytics for shipping delays and demand forecasting.",
    skills: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "CI/CD",
      "Predictive Analytics",
      "Microservices",
      "Agile Methodologies",
    ],
  },
];
const TimelineItem: React.FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="relative mb-8">
    <div className="absolute left-0 top-0 h-full w-2 bg-gray-200 dark:bg-gray-700" />
    <div className="ml-6 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <div className="absolute left-0 top-4 h-6 w-6 rounded-full border-4 border-white bg-blue-500 dark:border-gray-800" />
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {item.organization}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{item.date}</p>
      {item.location && (
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {item.location}
        </p>
      )}
      {item.description && (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {item.description}
        </p>
      )}
      {item.skills && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl rounded-lg bg-gray-100 p-4 shadow dark:bg-gray-900">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
        Timeline
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          {experienceItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
          {educationItems.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
