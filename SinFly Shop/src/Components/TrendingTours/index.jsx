// Trending Tours Section
// Imports
import { useState, useEffect, useContext } from "react";
import classes from "./index.module.css";
import useCalcPrice from "../../Hooks/useCalcPrice";
import { useNavigate } from "react-router-dom";
import BasketContext from "../../Contexts/BasketContext";
import { toast, ToastContainer } from "react-toastify";
import { Rating } from "@mui/material";
// React Component
const TrendingTours = () => {
  // States , Effects ,context,navigate & variables
  const [products, setProducts] = useState([]);
  const {
    trending,
    trend,
    topDes,
    disPerBadge,
    specialOffer,
    addBtn,
    trendingContainer,
    starSvg,
    addedBtn,
  } = classes;
  const { basket, setBasket } = useContext(BasketContext);
  const navigate = useNavigate();
  const abortController = new AbortController();
  useEffect(() => {
    getProducts();
    // clean up function
    return () => abortController.abort();
  }, []);
  // JS Functions
  const getProducts = () => {
    fetch("http://localhost:5000/trendingTours")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // console.log(products);
  };
  const handleRoute = (route) => {
    navigate(route);
  };
  const handleStopPropagation = (event) => {
    event.stopPropagation();
  };
  const handleAddToBasket = (item) => {
    setBasket((prev) => [...prev, { ...item, count: 1 }]);
    toast.success("Item  Successfully Added To Basket  !!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const chooseVehicle = (transportationVehicle) => {
    switch (transportationVehicle) {
      case "Plane":
        return <i className="fa fa-plane" aria-hidden="true" />;
      case "Train":
        return <i className="fa fa-subway" aria-hidden="true" />;
      case "Boat":
        return <i className="fa fa-ship" aria-hidden="true" />;
      case "Bus":
        return <i className="fa fa-bus" aria-hidden="true" />;
      default:
        return <i className="fa fa-plane" aria-hidden="true" />;
    }
  };

  return (
    <>
      <article className={trendingContainer}>
        <div className="text-center ">
          <h5 className={`text-danger ${topDes}`}>Trending Tours</h5>
        </div>
        <section className={`${trending}`}>
          {products.map((item) => {
            const {
              imgSrc,
              id,
              title,
              hasSpecialOffer,
              date,
              transportationVehicle,
              price,
              discountPercent,
              rating,
            } = item;
            return (
              <div
                className={`${trend} position-relative`}
                key={id}
                onClick={() => handleRoute(`/Destinations/${id}`)}
              >
                <img
                  src={imgSrc.img1}
                  alt="Photo could be shown !!!"
                  loading="lazy"
                />
                {hasSpecialOffer && (
                  <span
                    className={`badge position-absolute ${specialOffer}   `}
                  >
                    Special Offer
                    <i className="fa fa-bell" aria-hidden="true" />
                  </span>
                )}
                <div className="text-center d-flex justify-content-center align-items-center gap-2 flex-column">
                  <span className="fs-5 fw-bold ">{title}</span>
                  {hasSpecialOffer ? (
                    <div className="d-flex gap-2 justify-content-center">
                      <span className="badge bg-info text-decoration-line-through text-dark ">
                        {price} $
                        <span className={`badge  ms-lg-2 ${disPerBadge}`}>
                          {discountPercent}%
                        </span>
                      </span>
                      <span className="fw-bold px-2 badge bg-warning text-dark p-2">
                        {" "}
                        {useCalcPrice(price, discountPercent)} $
                      </span>
                    </div>
                  ) : (
                    <span className="fw-bold">{price} $</span>
                  )}
                </div>

                <div>
                  <i className="fa fa-location-arrow" aria-hidden="true"></i>
                  &nbsp; {date}
                </div>
                <div>T-Vehicle : {chooseVehicle(transportationVehicle)}</div>
                <div className="flex justify-center items-center flex-col">
                  Rating : {rating}
                  <div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={rating}
                      precision={0.1}
                      readOnly
                    />
                  </div>
                </div>
                <div
                  className={`${addBtn} w-100 d-flex justify-content-center align-items-center`}
                  onClick={handleStopPropagation}
                >
                  {!basket.find((item) => item.id === id) ? (
                    <button
                      className="btn btn-outline-dark px-4 border-info fw-bold "
                      onClick={() => handleAddToBasket(item)}
                    >
                      Add To Basket
                    </button>
                  ) : (
                    <div className={`d-flex gap-3 align-items-center`}>
                      <span className={`btn  ${addedBtn}`}>
                        Item Already Added
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </article>
      <ToastContainer />
    </>
  );
};
export default TrendingTours;
