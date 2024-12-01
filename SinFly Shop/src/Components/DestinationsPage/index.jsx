//  Destinstions page
// Imports
import { Helmet } from "react-helmet";
import ToursList from "../ToursList";
import classes from "./index.module.css";
// React Component
const Destinstions = () => {
  //  variables
  const { destinationsContainer } = classes;
  return (
    <div className={destinationsContainer}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SinFly | Destinations</title>
      </Helmet>
      <ToursList />
    </div>
  );
};

export default Destinstions;
