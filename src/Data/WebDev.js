import portfolio from "../images/port.jpg"
import game from "../images/game.jpg"
import invoice from "../images/invoice.jpg"
import album from "../images/album.jpg"
import bookstore from "../images/bookstore.jpg"
import AyKash from "../images/AyKash.jpg"

export const projects = [
  {
    title: "Ay Kash -Under The Starry Afghan Sky",
    imageSrc: AyKash,
    description:
      "‘Ay Kash / ای کاش / If Only’ is a theatre, art and activism performance / exhibition featuring the artwork, films, poetry and stories of eleven young women based Afghanistan coming to Berlin, Germany in September 2023 and then available to tour worldwide. A project initiated by the Cosmino Productions.",
    link: "http://www.underthestarryafghansky.com/",
    tags: ["Tailwindcss", "JS", "HTML"],
  },
  {
    title: "Invoice App",
    imageSrc: invoice,
    description:
      "An invoice is a commercial document issued by a seller to a buyer that itemizes the products, services, or goods provided, along with their respective quantities and prices. It serves as a formal request for payment for the goods or services rendered. This project was created using bootstrap for its responsive design and JavaScript for its functionalities.",
    link: "https://akbarirazia.github.io/invoice-app/",
    tags: ["Vanilla", "Bootstrap", "JS"],
  },
  {
    title: "Bookstore Landing Page",
    imageSrc: bookstore,
    description:
      "An elegant and responsive bookstore landing page, created using Tailwind CSS. This static project brings a sophisticated touch to book lovers worldwide. With its visually pleasing design, optimized for all screen sizes. The combination of Tailwind CSS's sleek styling and the static nature of the website ensures fast loading times and a seamless browsing experience.",
    link: "https://akbarirazia.github.io/Bookstore-Landing-Page/",
    tags: ["Tailwindcss", "RWD", "HTML"],
  },
  {
    title: "Personal Portfolio",
    imageSrc: portfolio,
    description:
      "My personal portfolio! the page you are at right now. This project was created using tailwindcss for its responsive design and JavaScript for the certain functionalities in the page. It contains my personal portfolio and contact information along with my resume.",
    link: "https://akbarirazia.github.io/portfolio/",
    tags: ["Tailwindcss", "HTML", "RWD"],
  },
  {
    title: "Responsive Album",
    imageSrc: album,
    description:
      "A responsive static album with Bootstrap is a web page that showcases a collection of images or media in an organized and visually appealing manner. It is built using the Bootstrap framework, which provides a set of pre-designed CSS and JavaScript components for creating responsive and mobile-friendly websites.",
    link: "https://akbarirazia.github.io/responsive-album-bootstrap/",
    tags: ["Bootstrap", "Clone", "HTML"],
  },
  {
    title: "Rock, Paper, Scissors Game",
    imageSrc: game,
    description:
      "Rock, Paper, Scissors Game: A JavaScript-based game where players compete against the computer by choosing between rock, paper, or scissors. Test your strategy and luck in this classic hand gesture showdown!",
    link: "https://3w17p8.csb.app/",
    tags: ["Game", "JavaScript", "HTML"],
  },
]
