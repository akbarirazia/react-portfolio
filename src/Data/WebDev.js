import portfolio from "../assets/port.JPG"
import game from "../assets/game.JPG"
import invoice from "../assets/invoice.JPG"
import album from "../assets/album.JPG"
import bookstore from "../assets/bookstore.JPG"
import AyKash from "../assets/AyKash.jpg"
import Avatar from "../assets/avatar.JPG"

export const projects = [
  {
    title: "Ay Kash -Under The Starry Afghan Sky",
    imageSrc: AyKash,
    description:
      "Ay Kash is a theatre and art performance featuring the work of eleven young women from Afghanistan.",
    link: "http://www.underthestarryafghansky.com/",
    tags: ["Tailwindcss", "JS", "HTML"],
  },
  {
    title: "Invoice App",
    imageSrc: invoice,
    description:
      "Invoice App is a project that creates invoices for goods or services using Bootstrap for responsive design and JavaScript for functionality.",
    link: "https://akbarirazia.github.io/invoice-app/",
    tags: ["Vanilla", "Bootstrap", "JS"],
  },
  {
    title: "My Avatar",
    imageSrc: Avatar,
    description:
      "My Avatar is a 3D website portraying the creator's avatar using various 3D tools such as Blender, Three JS, and React JS.",
    link: "https://my-avatar-xi.vercel.app/",
    tags: ["ReactJS", "ThreeJS", "blender"],
  },
  {
    title: "Bookstore Landing Page",
    imageSrc: bookstore,
    description:
      "Bookstore Landing Page is a responsive landing page for book lovers worldwide, created using Tailwind CSS.",
    link: "https://akbarirazia.github.io/Bookstore-Landing-Page/",
    tags: ["Tailwindcss", "RWD", "HTML"],
  },
  {
    title: "Personal Portfolio",
    imageSrc: portfolio,
    description:
      "Personal Portfolio is a portfolio page containing personal information and contact details, created using Tailwind CSS and JavaScript.",
    link: "https://akbarirazia.github.io/portfolio/",
    tags: ["Tailwindcss", "HTML", "RWD"],
  },
  // {
  //   title: "Responsive Album",
  //   imageSrc: album,
  //   description:
  //     "A responsive static album with Bootstrap is a web page that showcases a collection of images or media in an organized and visually appealing manner. It is built using the Bootstrap framework, which provides a set of pre-designed CSS and JavaScript components for creating responsive and mobile-friendly websites.",
  //   link: "https://akbarirazia.github.io/responsive-album-bootstrap/",
  //   tags: ["Bootstrap", "Clone", "HTML"],
  // },

  {
    title: "Rock, Paper, Scissors Game",
    imageSrc: game,
    description:
      "Rock, Paper, Scissors Game is a classic hand gesture game using JavaScript to play against the computer.",
    link: "https://3w17p8.csb.app/",
    tags: ["Game", "JavaScript", "HTML"],
  },
]
