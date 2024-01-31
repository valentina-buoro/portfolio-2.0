import Image from "next/image";
import { PostProps } from "../types/types";

const BlogCard: React.FC<{ post: PostProps }> = ({ post }) =>{
  return (
    <div className="pt-3 grid grid-cols-3 gap-y-10 gap-x-5">
      <Image src={post.src} alt="Careers" className="col-span-1" />
      <div className="col-span-1 items-start space-y-4 font-medium   tracking-tighter">
        <p className="text-base md:text-2xl text-justify text-white leading-6 md:leading-[28.8px] font-medium">
          {post.title}
        </p>
        <p className="text-base font-normal md:text-base text-white/85 ">{post.content}</p>
      </div>
      <div className="col-span-1">
            <button className="text-center p-4 my-4 bg-[#4D0071] rounded-md">
            <a href="https://www.linkedin.com/in/latoptop/" > View My Projects </a>
            </button>
          </div>
    </div>
  );
};

export default BlogCard;