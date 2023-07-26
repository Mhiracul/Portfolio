import { AiFillStar } from "react-icons/ai";
import Cards from "../assets/cham.jpeg";
import Paul from "../assets/paul.jpg";
const cards = [
  {
    id: 1,
    name: "Paul Okeke",
    image: Paul,
    testimonial: "Miracle is our super Intern and an awesome developer!",
    star: <AiFillStar color="#FDB51D" />,
  },
  {
    id: 2,
    name: "Emmanuel Okereafor",
    image: Cards,
    testimonial: "Great Job, Would Recommend!",
    star: <AiFillStar color="#FDB51D" />,
  },
  {
    id: 3,
    name: "Gilbert",
    image:
      "https://harnishdesign.net/demo/react/simone/demo/images/profile.jpg",
    testimonial: "Great Job, Would Recommend!",
    star: <AiFillStar color="#FDB51D" />,
  },
  // Add more objects for additional clients
];

export default cards;
