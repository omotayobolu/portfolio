import Crypto from "./assets/crappo.png"
import Bookmark from "./assets/bookmark.png"
import Quizzical from "./assets/quizzical.png"
import todo from "./assets/todo.png"
import Countries from "./assets/countries.png"
import Artsy from "./assets/artsy.png"
import Ecommerce from "./assets/ecommerce.png"
import ImageGallery from "./assets/image-gallery.png"

const projects = [
    {
        id: 1,
        name: "crappo",
        image: Crypto,
        github: "https://github.com/omotayobolu/crappo-cryptocurrency",
        live: "https://crappo-cryptocurrencyy.netlify.app/",
        tools: ["ReactJS", "SASS", "Framer motion"] },
    {
        id: 2,
        name: "bookmark",
        image: Bookmark,
        github: "https://github.com/omotayobolu/bookmark-landing-page",
        live: "https://omotayobolu.github.io/bookmark-landing-page/",
        tools: ["HTML", "CSS"," Javscript", "AOS"]
    },
    {
        id: 3,
        name: "quizzical",
        image: Quizzical,
        github: "https://github.com/omotayobolu/Quizzical-App/",
        live: "https://quizzical-app-omotayo.netlify.app/",
        tools: ["ReactJS", "CSS", "API"]
    },
    {
        id: 4,
        name: "todo app",
        image: todo, 
        github: "https://github.com/omotayobolu/todo-app",
        live: "https://todo-app-omotayo.netlify.app/",
        tools: ["ReactJS", "SASS", "context-api"]
    },
    {
        id: 5,
        name: "Countries app",
        image: Countries,
        github: "https://github.com/omotayobolu/Countries",
        live: "https://countries-app-omotayo.netlify.app/",
        tools: ["ReactJS", "SASS", "API", "Framer motion", "AOS"]
    },
    {
        id: 6,
        name: "Artsy (in progress)",
        image: Artsy,
        github: "https://github.com/omotayobolu/artsy",
        live: "https://artsy-omotayo.netlify.app/",
        tools: ["ReactJS", "TailwindCSS", "Redux Toolkit","Firebase"]
    },
    {
        id: 7,
        name: "e-comerce product page",
        image: Ecommerce,
        github: "https://github.com/omotayobolu/E-Commerce-product-page",
        live: "https://ecommerce-product-pagee.netlify.app/",
        tools: ["ReactJS", "CSS", "context-api"]
    },
    {
        id: 8,
        name: "Image gallery",
        image: ImageGallery,
        github: "https://github.com/omotayobolu/image-gallery",
        live: "https://image-gallery-hngx3.netlify.app/",
        tools: ["ReactJS", "TailwindCSS", "Firebase"]
    }
]


export default projects;