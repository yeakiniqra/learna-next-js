'use client'

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

export default function Webinars() {

    const featuredWebinars = [
        {
          title: 'Understanding React Hooks',
          description:
            'Learn how to use React Hooks to build dynamic and interactive web applications.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Machine Learning',
          description:
            'Discover the principles and techniques of machine learning in this comprehensive course.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Android Development',
          description:
            'Get started with Android development and build your first app from scratch.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Web App Production Essentials',
          description:
            'Learn the essentials of web app production and build your first app from scratch.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        {
          title: 'Docker Fundamentals',
          description:
            'Learn the fundamentals of Docker and containerization in this hands-on course.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'SEO for Beginners',
          description:
            'Learn the basics of SEO and how to optimize your website for search engines.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];

  return (
    <div className="p-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
      </div>

      <div className="mt-10">
        <HoverEffect
        items={featuredWebinars.map(webinar => (
          {
            title: webinar.title,
            description: webinar.description,
            link: '/'
          }
        ))}
        />
      </div>

      <div className="mt-10 text-center">
        <Link href={"/"}
       className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
       >
          View All webinars
        </Link>
      </div>
    </div>
  </div>
  )
}
