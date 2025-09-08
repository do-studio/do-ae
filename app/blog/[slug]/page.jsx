import { abstratbg } from "@/public";
import Image from "next/image";
import React from "react";

const blogs = [
  {
    title: "Blog Title 1",
    description: "Discover insightful perspectives and expert tips on modern living. This blog explores creative ideas and solutions for everyday challenges to inspire positive change.",
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    slug: "blog-title-1"
  },
  {
    title: "Blog Title 2",
    description: "Dive into engaging stories and practical advice for building your best self. From mindset hacks to wellness routines, unlock transformative strategies today.",
    image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    slug: "blog-title-2"
  },
  {
    title: "Blog Title 3",
    description: "Uncover the secrets to achieving balance and productivity. This blog delivers actionable insights for professionals aiming to excel in work and life.",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    slug: "blog-title-3"
  },
  {
    title: "Blog Title 4",
    description: "Explore the latest trends in technology and innovation. Learn how new advancements shape industries and impact our daily lives, keeping you informed and ahead.",
    image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    slug: "blog-title-4"
  },
  {
    title: "Blog Title 5",
    description: "Journey into inspiring travel destinations, cultural experiences, and adventure tips. Gain practical guidance for planning memorable explorations.",
    image: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
    slug: "blog-title-5"
  },
  {
    title: "Blog Title 6",
    description: "Find expert advice on personal finance and money management. Empower your financial future by understanding strategies for saving, investing, and spending wisely.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    slug: "blog-title-6"
  },
  {
    title: "Blog Title 7",
    description: "Discover the art of healthy living through fitness routines, nutrition tips, and wellness inspiration. Transform health goals into lasting habits with evidence-based advice.",
    image: "https://images.pexels.com/photos/1303096/pexels-photo-1303096.jpeg",
    slug: "blog-title-7"
  },
  {
    title: "Blog Title 8",
    description: "Unlock your creative potential with stories, tutorials, and inspiration from artistic innovators. Explore techniques and tips for all kinds of creators and makers.",
    image: "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg",
    slug: "blog-title-8"
  },
  {
    title: "Blog Title 9",
    description: "Delve into practical reviews and comparisons of trending products. This blog offers honest insights to help you make smarter purchase decisions every time.",
    image: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
    slug: "blog-title-9"
  },
  {
    title: "Blog Title 10",
    description: "Stay current with expert opinions and in-depth analysis on major world events. Make sense of what matters most in today’s rapidly changing landscape.",
    image: "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
    slug: "blog-title-10"
  }
];



export default function BlogPage({ params }) {
    const { slug } = params;
    const blog = blogs.find((s) => s.slug === slug);
  
    if (!blog) {
      return <div className="p-6 text-center">Blog Not Found</div>;
    }
  return (
    <section className="w-full relative h-full overflow-hidden">
      <div className="h-40 xl:h-[300px] w-full relative overflow-hidden">
        <Image
          className="object-cover object-bottom"
          fill
          src={abstratbg}
          alt="Abstract Background"
          priority
        />
        <h1 className="absolute text-3xl xl:text-5xl font-normal bottom-5 xl:bottom-20 left-5 xl:left-28 z-10 text-white">
          {blog.slug}
        </h1>
      </div>

      <div className="bg-white text-black ">
        <div className="w-10/12 mx-auto py-10 flex flex-col gap-5">
        <div className="h-[400px] w-full relative overflow-hidden">
        <Image
          className="object-cover object-bottom"
          fill
          src={blog.image}
          alt="Abstract Background"
          priority
        />
      </div>
          <h1 className="text-5xl font-medium">{blog.title}</h1>
          <p>
            {blog.description}
          </p>
        </div>
      </div>
    </section>
  );
};

