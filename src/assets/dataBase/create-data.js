let pagesId = 100;
let pages = [
  {
    id: ++pagesId,
    primaryName:'homePage',
    name: "Home",
    link: "/",
    title: "Save The Children",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    primaryName:"ourWorksPage",
    id: ++pagesId,
    name: "Our Works",
    link: "/our-works",
    title: "Our Works",
    description: "lorem   ",
 
  },
  {

    id: ++pagesId,
    primaryName:"aboutPage",
    name: "About",
    link: "/about",
    title: "About Us",
    description: "",
  },
  {
    id: ++pagesId,
    name: "Contact",
    link: "/contact",
    title: "Contact Us",
    description: "",
  },
];
localStorage.setItem("pages", JSON.stringify(pages));

console.log("pages saved to local storage");
console.log(JSON.parse(localStorage.getItem("pages")));


/*
==============
pages deleted
==============
*/ 
let deletedPages = [];
localStorage.setItem("deletedPages", JSON.stringify(deletedPages));


  


let idHomeImg = 0;

let homePage = {
  heroTitle: "Welcome To Save The Children",
  heroImgs: [
    {
      id: ++idHomeImg,
      src: "src/assets/images/articles/img7.webp",
      alt: "figure-primary",
      figcaption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores explicabo consequatur animi tempore ut ",
    },
    {
      id: ++idHomeImg,
      src: "src/assets/images/articles/img5.webp",
      alt: "  ",
      figcaption: "Lorem ipsum dolor sit ametipsum dolor sit amet ",
    },
    {
      id: ++idHomeImg,
      src: "src/assets/images/articles/img8.webp",
      alt: "children are happy  ",
      figcaption: "Lorem ipsum dolor sit amet ",
    },
    {
      id: ++idHomeImg,
      src: "src/assets/images/articles/img4.webp",
      alt: "children are happy  ",
      figcaption:
        "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Maiores explicabo consequatur animi tempore ut ",
    },
  ],
};

// about Page
let idAboutImg = 0;
let aboutPage = {
  name: "About",
  title: "About Us",

  description:
    "Poor African children who are very happy because Save the Children provided them with water.",
  imgSection: [
    {
      id: ++idAboutImg,
      src: "src/assets/images/about/img3.webp",
      alt: "children are happy  ",
    },
    {
      id: ++idAboutImg,
      src: "src/assets/images/about/img2.webp",
      alt: "children are happy  ",
    },
  ],
  imgsSection2: [
    {
      id: ++idAboutImg,
      src: "src/assets/images/about/img3.webp",
      alt: "children are happy  ",
    },
    {
      id: ++idAboutImg,
      src: "src/assets/images/about/img4.webp",
      alt: "children are happy  ",
    },
    {
      id: ++idAboutImg,
      src: "src/assets/images/about/img5.webp",
      alt: "children are happy  ",
    },
    {
      id: ++idAboutImg,
      src: "src/assets/images/about/img6.webp",
      alt: "children are happy  ",
    },
    {
      id: ++idAboutImg,
      src: "src/assets/images/about/img7.webp",
      alt: "children are happy  ",
    },
  ],
};

localStorage.setItem("homePage", JSON.stringify(homePage));
localStorage.setItem("aboutPage", JSON.stringify(aboutPage));
console.log("hero images of home page saved to local storage");
console.log(JSON.parse(localStorage.getItem("homePage")));
