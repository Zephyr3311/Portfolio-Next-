import { SiExpress, SiSocketdotio, SiNextdotjs, SiFlask } from "react-icons/si";
import {
  FramerMotionIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Programming Languages
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import Solidity from "@/public/icons/solidity.svg";
import Rust from "@/public/icons/rust.svg";
import Go from "@/public/icons/go.svg";
import CSSvg from "@/public/icons/CS.svg";

// Frontend Frameworks
import ReactjsSvg from "@/public/icons/reactjs.svg";
import Nuxtjs from "@/public/icons/Nuxt.js.svg";
import AngularSvg from "@/public/icons/Angular-Dark.svg";
import SassSvg from "@/public/icons/sass.svg";
import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import Vue from "@/public/icons/vue.svg";
import FlutterSvg from "@/public/icons/Flutter-Dark.svg";
import UnitySvg from "@/public/icons/Unity-Dark.svg";
import WEB3jsSvg from "@/public/icons/web3js.svg";

// Backend Frameworks
import NodejsSvg from "@/public/icons/nodejs.svg";
import NestjsSvg from "@/public/icons/NestJS-Dark.svg";
import DjangoSvg from "@/public/icons/Django.svg";
import LaravelSvg from "@/public/icons/Laravel-Dark.svg";
import FastapiSvg from "@/public/icons/fastapi.svg";
import rubySvg from "@/public/icons/ruby.svg";

// Database
import MySQLSvg from "@/public/icons/MySQL-Dark.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PrismaSvg from "@/public/icons/prisma.svg";
import ViteSvg from "@/public/icons/vite.svg";
import WordpressSvg from "@/public/icons/Wordpress.svg";
import GraphSvg from "@/public/icons/graphql.svg";
import VercelSvg from "@/public/icons/vercel.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming Languages",
    skills: [
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Solidity",
        icon: Solidity,
      },
      {
        name: "Rust",
        icon: Rust,
      },
      {
        name: "Go",
        icon: Go,
      },
      {
        name: "C#",
        icon: CSSvg,
      },
    ],
  },
  {
    sectionName: "Fronend Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Vuejs",
        icon: Vue,
      },
      {
        name: "Nuxt.js",
        icon: Nuxtjs,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Solidjs",
        icon: SolidjsSvg,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "SASS",
        icon: SassSvg,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Flutter",
        icon: FlutterSvg,
      },
      {
        name: "Unity",
        icon: UnitySvg,
      },
    ],
  },
  {
    sectionName: "Backend Framework",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Nestjs",
        icon: NestjsSvg,
      },
      {
        name: "Django",
        icon: DjangoSvg,
      },
      {
        name: "Laravel",
        icon: LaravelSvg,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "Fastapi",
        icon: FastapiSvg,
      },
      {
        name: "Ruby",
        icon: rubySvg,
      },
      {
        name: "Prisma (ORM)",
        icon: PrismaSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MySQL",
        icon: MySQLSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "AWS",
        icon: AwsSvg,
      },
      {
        name: "Web3js",
        icon: WEB3jsSvg,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Vite PWA",
        icon: VitePwaIcon,
      },
      {
        name: "Wordpress",
        icon: WordpressSvg,
      },
      {
        name: "Graph",
        icon: GraphSvg,
      },
      {
        name: "Vercel",
        icon: VercelSvg,
      },
    ],
  },
];
