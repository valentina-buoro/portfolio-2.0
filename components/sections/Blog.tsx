import React from "react";
import { GetStaticProps } from "next";
import BlogCard from "../BlogCard";
import { PostProps } from "../../types/types";
import { feed } from "../../data/blog-data";

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
         <div className="px-6 md:px-20 md:py-10 w-screen md:w-full items-center" id='blog'>
        
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="mb-20">
              <BlogCard post={post} />
            </div>
          ))}
        </main>
      </div>
  
  );
};

export default Blogs;