import { Navigate } from "react-router";
import NewsCard from "../components/NewsCard/NewsCard";

const Home = () => {
  return <Navigate to="/category/0"></Navigate>;
};

export default Home;
