import React from "react";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
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

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col bg-green-500">
        <h1>Public Feed</h1>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="mb-20">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;