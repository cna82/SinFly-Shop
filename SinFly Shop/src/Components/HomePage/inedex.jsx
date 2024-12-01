// Home page component
import classes from "./index.module.css";
import Header from "../Header";
import HomeBody from "../HomeBody";
import ProgressBar from "../ProgreesBar";
import Features from "../Features";
import TrendingTours from "../TrendingTours";
import CostumerFeedback from "../CostumerFeedback";
import SocialMedia from "../SocialMedia";
import Footer from "../Footer";
import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const { homeContainer } = classes;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SinFly | Home</title>
      </Helmet>
      <div className={homeContainer}>
        <HomeBody />
      </div>
      <Features />
      <TrendingTours />
      <CostumerFeedback />
      <SocialMedia />
    </>
  );
};

export default HomePage;
