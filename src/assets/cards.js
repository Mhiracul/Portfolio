import { AiFillStar } from "react-icons/ai";
import Cards from "../assets/cham.jpeg";
import Paul from "../assets/paul.jpg";
import Samwize from "../assets/samwize.jpeg";
const cards = [
  {
    id: 1,
    name: "Paul Okeke",
    title: "Senior Android Developer at Moniepoint",
    image: Paul,
    testimonial: "Miracle is a Coding Prodigy and an awesome developer!",
    star: <AiFillStar color="#FDB51D" />,
  },
  {
    id: 2,
    name: "Emmanuel Okereafor",
    title: "UI/UX Designer",
    image: Cards,
    testimonial: "Great Job, Would Recommend!",
    star: <AiFillStar color="#FDB51D" />,
  },
  {
    id: 3,
    name: "Samuel",
    title: "Frontend Developer",
    image: Samwize,
    testimonial: "Exceptional Developer, Delivering Innovative Solutions.",
    star: <AiFillStar color="#FDB51D" />,
  },
  // Add more objects for additional clients
];

export default cards;
