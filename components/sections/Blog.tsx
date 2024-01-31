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
         <div className="w-full h-screen flex flex-col bg-black px-20">
        
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