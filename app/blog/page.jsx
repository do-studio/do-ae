import React from "react";
import { abstratbg } from "../../public";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Blog Title 1",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    slug: "blog-title-1",
  },
  {
    title: "Blog Title 2",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    slug: "blog-title-2",
  },
  {
    title: "Blog Title 3",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    slug: "blog-title-3",
  },
  {
    title: "Blog Title 4",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    slug: "blog-title-4",
  },
  {
    title: "Blog Title 5",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
    slug: "blog-title-5",
  },
  {
    title: "Blog Title 6",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    slug: "blog-title-6",
  },
  {
    title: "Blog Title 7",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/1303096/pexels-photo-1303096.jpeg",
    slug: "blog-title-7",
  },
  {
    title: "Blog Title 8",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg",
    slug: "blog-title-8",
  },
  {
    title: "Blog Title 9",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg",
    slug: "blog-title-9",
  },
  {
    title: "Blog Title 10",
    description: "Lorem ipsum...",
    image: "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
    slug: "blog-title-10",
  },
];

const Page = () => {
  // Define the indexes where we want span-2
  const spanTwoIndexes = [0, 3, 4, 7, 8];

  return (
    <div className="w-full bg-white relative overflow-hidden">
      <div className="h-40 xl:h-[300px] w-full relative overflow-hidden">
        <Image
          className="object-cover object-bottom"
          fill
          src={abstratbg}
          alt="Abstract Background"
          priority
        />
        <h1 className="absolute text-3xl xl:text-5xl font-normal bottom-5 xl:bottom-20 left-5 xl:left-28 z-10 text-white">
          Our Blogs
        </h1>
      </div>

      <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`relative overflow-hidden ${
              spanTwoIndexes.includes(index) ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div className="relative !w-full !h-[400px]">
              <Image
                className="h-full w-full z-0 object-cover"
                src={blog.image}
                alt={blog.title}
                fill
              />
            </div>
            <div className="flex items-center justify-between gap-2 bg-[#57575737] p-5 py-3 backdrop-blur-sm text-white w-[95%] mx-auto absolute bottom-5 left-1/2 -translate-x-1/2">
              <h1 className="text-xl font-medium uppercase">{blog.title}</h1>
              <Link
                className="text-sm w-fit bg-white text-black hover:bg-black hover:text-white duration-200  px-5 py-2"
                href={`/blog/${blog.slug}`}
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
