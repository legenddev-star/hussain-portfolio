import Image from "next/image";
import MarkdownContent from "@/components/MarkdownContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getSortedPostsData,
  getPostData,
  getAllPostIds,
} from "../../../../utils/markdown";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import heroImage from "@/assets/Hussain.jpeg";

interface BlogPostProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const postData = await getPostData(params.id);
  if (!postData) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: postData.title,
    description: postData.description,
  };
}

async function getRelatedPosts(currentPostId: string, category: string) {
  const allPosts = await getSortedPostsData();
  return allPosts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, 3);
}

export default async function BlogPost({ params }: BlogPostProps) {
  const postData = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(params.id, postData.category);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-800"
      >
        <ArrowLeft size={20} className="mr-2" />
        <span className="text-lg">Back to blog</span>
      </Link>
      <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
        {postData.title}
      </h1>
      <div className="mb-8 flex flex-wrap items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
        <span className="flex items-center">
          <Calendar size={16} className="mr-2" />
          {postData.date}
        </span>
        <span className="flex items-center">
          <Clock size={16} className="mr-2" />
          {postData.readTime}
        </span>
        <span className="flex items-center">
          <Tag size={16} className="mr-2" />
          {postData.category}
        </span>
        <span className="flex items-center">
          <User size={16} className="mr-2" />
          {postData.author}
        </span>
      </div>
      <Image
        src={`/images/${postData.id}.png`}
        alt={postData.title}
        width={800}
        height={400}
        className="mb-8 w-full rounded-lg object-cover"
      />
      <MarkdownContent content={postData.content} />

      <div className="mt-12">
        <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Tags
        </h3>
        <div className="mb-12 flex flex-wrap gap-2">
          {postData.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mb-4 text-2xl font-bold">Related Posts</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {relatedPosts.map((post) => (
            <div key={post.id} className="rounded border p-4">
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
        <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          About the Author
        </h3>
        <div className="flex items-center rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
          <Image
            src={heroImage}
            alt={postData.author}
            width={80}
            height={80}
            className="mr-6 rounded-full"
          />
          <div>
            <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
              {postData.author}
            </h4>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              A passionate writer and technologist exploring the intersections
              of code and creativity.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export const revalidate = 3600; // Revalidate every hour
