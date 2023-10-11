import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
    {
        name: "E-commerce",
        description: "This is a application based on ReactJS, Vite and Tailwind, deployed in vercel. It is an ecommerce interface to check product stock, make orders, see product details and filter by category or name.",
        image: "/images/E-commerce.png",
        github: "https://github.com/Elkinrodriguez03/E-commerce_frontend",
        link: "https://e-commerce-frontend-eta.vercel.app/"

    },
    {
        name: "To-Do App",
        description: "This is an application to manage task and duties pending to complete. You can add a new task, delete it, mark as complete and search by task name.",
        image: "/images/TO-DO App.png",
        github: "https://github.com/Elkinrodriguez03/react-todo-app",
        link: "https://elkinrodriguez03.github.io/react-todo-app/"

    },
    {
        name: "Monster Fight",
        description: "This is a application based on HTML5, CSS, JavaScript and something of NodeJS. It's a game to simulate combats within Monster fighters .",
        image: "/images/monster-fight.png",
        github: "https://github.com/Elkinrodriguez03/Monster-Fight_Game",
        link: "https://monster-fight-game-dn67pmsfv-elkinrodriguez03.vercel.app/"

    },
    {
        name: "Image Generator",
        description: "This is a application created with ReactJS implementing Unsplash API. I have been working with back-end and database technologies, for that reason I started this project to practice on the implementation, usage and manipulation of APIs.",
        image: "/images/image-generator.png",
        github: "https://github.com/Elkinrodriguez03/Random_Image_Generator",
        link: "https://random-image-generator-inky.vercel.app/"

    }
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
            </h1>
            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}> 
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col animate-slideUpCubiBeizer animation-delay-2 md:flex-row md:space-x-12">
                                    <div className="md:w-1/2">
                                        <Link href={project.link} target="_blank">
                                            <Image 
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="md:w-1/2 mt-3">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {project.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link href={project.github} target="_blank">
                                                <BsGithub 
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-trasnform cursor-pointer"
                                                />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare 
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsSection;