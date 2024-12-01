// Features section
// Imports
import classes from "./index.module.css";
// React component
const Features = () => {
  // Variables
  const {
    sectionContainer,
    background,
    containers,
    panel,
    pricingPlan,
    pricingImg,
    pricingTable,
    pricingHeader,
    pricingFeatures,
    pricingFeaturesItem,
  } = classes;
  return (
    <section className={sectionContainer}>
      <div className="mt-4"></div>
      <div className={background}>
        <div className={containers}>
          <div className={`${panel} ${pricingTable}`}>
            <div className={pricingPlan}>
              <img
                src="./Images/Features/support.png"
                alt=""
                className={pricingImg}
                loading="lazy"
              />
              <h2 className={pricingHeader}>24/7 Support</h2>
              <ul className={pricingFeatures}>
                <li className={pricingFeaturesItem}>online support</li>
                <li className={pricingFeaturesItem}>
                  Possibility of cash back
                </li>
                <li className={pricingFeaturesItem}>
                  Possibility of cancel tour
                </li>
              </ul>
            </div>

            <div className={pricingPlan}>
              <img
                src="./Images/Features/insurance.png"
                alt=""
                className={pricingImg}
                loading="lazy"
              />
              <h2 className={pricingHeader}>Travel Insurance</h2>
              <ul className={pricingFeatures}>
                <li className={pricingFeaturesItem}>insure all travelers</li>
                <li className={pricingFeaturesItem}>
                  Multiple insurance for more relaxation
                </li>
                <li className={pricingFeaturesItem}>
                  without any dependancies
                </li>
              </ul>
            </div>

            <div className={pricingPlan}>
              <img
                src="./Images/Features/tour.png"
                alt=""
                className={pricingImg}
                loading="lazy"
              />
              <h2 className={pricingHeader}>Group Tour</h2>
              <ul className={pricingFeatures}>
                <li className={pricingFeaturesItem}>includes leader</li>
                <li className={pricingFeaturesItem}>unreachable places</li>
                <li className={pricingFeaturesItem}>offroad tour</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
