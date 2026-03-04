export type Project = {
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
};

export const projects: Project[] = [
  {
    name: "E-commerce",
    description:
      "Application built with React, Vite, and Tailwind CSS. Allows users to browse products, view details, filter by category or name, and place orders.",
    image: "/images/E-commerce.png",
    github: "https://github.com/Elkinrodriguez03/E-commerce_frontend",
    link: "https://e-commerce-frontend-eta.vercel.app/",
  },
  {
    name: "To-Do App (TypeScript)",
    description:
      "Todo application built with Vite, React, and TypeScript, showcasing state management, component composition, and type-safe React patterns.",
    image: "/images/todo_app_typescript.png",
    github: "https://github.com/Elkinrodriguez03/Todo-App",
    link: "https://todo-app-tau-puce.vercel.app/",
  },
  {
    name: "Product Carousel",
    description:
      "Responsive product carousel website built with HTML, CSS, and vanilla JavaScript, designed to adapt gracefully to various screen sizes.",
    image: "/images/carousel.png",
    github: "https://github.com/Elkinrodriguez03/TechnicalCodeTest",
    link: "https://technical-code-test.vercel.app/",
  },
  {
    name: "Image Generator",
    description:
      "Responsive web application built with Vite, React, and TypeScript that fetches and displays images from the Unsplash API.",
    image: "/images/image_generator.png",
    github: "https://github.com/Elkinrodriguez03/image_generator_app",
    link: "https://image-generator-app-omega.vercel.app/",
  },
  {
    name: "To-Do App",
    description:
      "Task management application to add, delete, mark complete, and search tasks by name, built with React.",
    image: "/images/TO-DO App.png",
    github: "https://github.com/Elkinrodriguez03/react-todo-app",
    link: "https://elkinrodriguez03.github.io/react-todo-app/",
  },
  {
    name: "Monster Fight",
    description:
      "Browser game built with HTML5, CSS, JavaScript, and some Node.js to simulate combat between monster fighters.",
    image: "/images/monster-fight.png",
    github: "https://github.com/Elkinrodriguez03/Monster-Fight_Game",
    link: "https://monster-fight-game-dn67pmsfv-elkinrodriguez03.vercel.app/",
  },
];

