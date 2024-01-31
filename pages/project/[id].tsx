import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { PostProps , ProjectProps} from "../../types/types"
import { feed } from "../../data/blog-data"
import { projectFeed } from "../../data/project-data"
import Image from "next/image"
import PageHeader from "../../components/pageHeader"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
  return {
    props: projectFeed.find((project) => project.id === params?.id) || {},
  }
}

const Project: React.FC<ProjectProps> = (props) => {
  let title = props.title
  if (!props.title) {
    title = `${title} (Draft)`
  }

  return (
    <Layout>
       <PageHeader/>
      <div className="px-6 md:px-20 bg-[#18151B] h-screen flex flex-col">
       
        <div className="max-h-[31.25rem] bg-red-500" >
          <Image src={props.img} alt={props.title} />
        </div>
        <div>
          <div className="flex justify-between">
              <div>
                <p className="text-lg font-normal text-[#98989A]">Publication Date</p>
                <p className="text-lg font-medium text-white">October 15, 2023</p>
              </div>
              <div>
                see on hashnode
              </div>
          </div>
          <div>
            <p className="font-normal text-2xl text-white">Project Details</p>
            <p className="text-lg font-normal text-[#98989A]">{props.description}</p>
          </div>
          <div>
            <p className="text-lg font-normal text-[#98989A]">Features</p>
            <p className="text-lg font-normal text-[#98989A]">{props.description}</p>
            
          </div>
        </div>
      
      </div>
      
    </Layout>
  )
}

export default Project
