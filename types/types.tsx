export type PostProps = {
    id: string;
    src: string;
    title: string;
    author: {
      name: string;
      email: string;
    } | null;
    content: string;
    published: boolean;
  };

  export type CardProps = {
   text: string;
    title: string;
   src: string
  };
  export type ProjectProps = {
    id: string;
    img: string;
    title: string;
    description: string;
    github: string;
    deployed: string;
    firstTool: string;
    secondTool: string;
    thirdTool: string;
    fourthTool: string;
   
  }