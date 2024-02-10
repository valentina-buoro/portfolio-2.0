import React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import BlogCard from "../BlogCard";
import { PostProps } from "../../types/types";
import { feed } from "../../data/blog-data";
import Arrow from '../../public/arrow.svg'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[];
};

const Blogs: React.FC<Props> = (props) => {
  return (
    <div
      className="px-6 md:px-20 md:py-10 w-screen md:w-full items-center"
      id="blog"
    >
      <div className="text-center my-16 w-2/4 items-center mx-auto relative">
        <p className="text-2xl md:text-4xl font-semibold text-[#F9FAFB]">
          From My Blog
        </p>
        <div className="bg-[#8a2be2] h-[3px] absolute w-[30%] md:left-[20%]" />
      </div>

      <main>
        {props.feed.map((post) => (
          <div key={post.id} className="mb-20">
            <BlogCard post={post} />
          </div>
        ))}
      </main>

      <div className="flex justify-center items-center"> 
      <button className="flex items-center justify-center gap-2 text-center p-4 my-4 bg-[#4D0071] text-[#F9FAFB] rounded-md">
          <a href="https://valentinabuoro.hashnode.dev/"> See All Articles </a>
          <Image src={Arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
