// Imports
import { useContext, useEffect, useRef, useState } from "react";
import classes from "./index.module.css";
import useCalcPrice from "../../Hooks/useCalcPrice";
import { useNavigate } from "react-router-dom";
import BasketContext from "../../Contexts/BasketContext";
import { ToastContainer, toast } from "react-toastify";
import { Rating, Skeleton } from "@mui/material";

// React Component
const ToursList = () => {
  // states , variables , contexts & effects
  const { basket, setBasket } = useContext(BasketContext);
  const [toursList, setToursList] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const {
    toursContainer,
    singleTour,
    sort,
    article,
    addedBtn,
    addBtn,
    specialOffer,
    disPerBadge,
    searchInput,
    searchIcon,
    myBtns,
    notFoundImg,
  } = classes;
  const navigate = useNavigate();
  useEffect(() => {
    // abort controller constant
    const abortController = new AbortController();
    setIsLoading(true);
    fetch("http://localhost:5000/Tours", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        setToursList(data);
        setIsLoading(false);
      });
    // clean up function
    return () => {
      abortController.abort();
    };
  }, []);
  useEffect(() => {
    // abort controller constant
    const abortController = new AbortController();
    fetch("http://localhost:5000/Vehicles", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setVehicles(data));
    // clean up function
    return () => {
      abortController.abort();
    };
  }, []);

  // JS Functions
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

  const handleCategory = (item) => {
    //  abort controller constant
    const abortController = new AbortController();
    if (item === "All") {
      fetch(`http://localhost:5000/Tours`, { signal: abortController.signal })
        .then((res) => res.json())
        .then((data) => setToursList(data));
    } else {
      fetch(`http://localhost:5000/Vehicles/${item}`, {
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => setToursList(data));
    }
  };

  const handleSpecialOffers = () => {
    // abort ontroller constant
    const abortController = new AbortController();
    // fething datas
    fetch(`http://localhost:5000/SpecialOffers`, {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => setToursList(data));
  };
  const handlePrice = (price) => {
    if (price === "Low") {
      const newListLow = [...toursList].sort((a, b) => a.price - b.price);
      setToursList(newListLow);
    }
    if (price === "High") {
      const newListHigh = [...toursList].sort((a, b) => b.price - a.price);
      setToursList(newListHigh);
    }
  };

  const handleSearch = () => {
    const newList = [...toursList];
    const filteredList = newList.filter(
      (item) => item.title.search(inputValue) > -1
    );
    setToursList(filteredList);
    setInputValue("");
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };
  const handleCancelSearch = () => {
    setInputValue("");
  };
  const handleShowAll = () => {
    //  abort controller Constant
    const abortController = new AbortController();
    // Fetching datas
    fetch(`http://localhost:5000/Tours`, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setToursList(data));
  };
  const chooseVehicle = (transportationVehicle) => {
    switch (transportationVehicle) {
      case "Plane":
        return <i className="fa fa-plane" aria-hidden="true"></i>;
      case "Train":
        return <i className="fa fa-subway" aria-hidden="true"></i>;
      case "Boat":
        return <i className="fa fa-ship" aria-hidden="true"></i>;
      case "Bus":
        return <i className="fa fa-bus" aria-hidden="true"></i>;
      default:
        return <i className="fa fa-plane" aria-hidden="true"></i>;
    }
  };
  return (
    <>
      <article className={`row ${article} w-100 pt-4 position-relative `}>
        <div className={`${sort} col-12 row px-5 mb-4  `} dir="rtl">
          <div className="col-8   d-flex gap-3 flex-row align-items-center justify-content-cneter">
            <h4>
              <i className="fa fa-sort-amount-desc" aria-hidden="true"></i> Sort
              :{" "}
            </h4>
            <button className={`btn ${myBtns}`} onClick={handleShowAll}>
              All
            </button>
            <button
              className={`btn ${myBtns}`}
              onClick={() => handlePrice("High")}
            >
              Highest Price
            </button>
            <button
              className={`btn ${myBtns}`}
              onClick={() => handlePrice("Low")}
            >
              Lowest Price
            </button>
            <button className={`btn ${myBtns}`} onClick={handleSpecialOffers}>
              Speciall Offers
            </button>
            <div className={`btn-group ${myBtns}  border`}>
              <button
                type="button"
                className={`btn ${myBtns}  dropdown-toggle`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Transportation Vehicle &nbsp;
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                {vehicles.map((item, index) => {
                  return (
                    <li key={index}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleCategory(item)}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className={` col-4 row justify-content-center align-itams-center  `}
          >
            <div className="input-group" dir="ltr">
              <input
                type="text"
                className={`form-control ${searchInput}`}
                aria-label="Dollar amount (with dot and two decimal places)"
                value={inputValue}
                onChange={handleChange}
                placeholder="Search here ..."
              />
              <span
                className={`input-group-text text-primary ${searchIcon}`}
                onClick={handleSearch}
              >
                <i className="fa fa-search" aria-hidden="true" />
              </span>
              {inputValue.length !== 0 && (
                <span
                  className={`input-group-text text-danger ${searchIcon}`}
                  onClick={handleCancelSearch}
                >
                  <i className="fa fa-close" aria-hidden="true" />
                </span>
              )}
            </div>
          </div>
        </div>
        {isLoading ? (
          <>
            <section className={`${toursContainer} col-12 `}>
              {Array.from({ length: 8 }, (v, i) => i).map((item) => {
                return (
                  <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-300 p-2 rounded-2xl">
                    <Skeleton
                      variant="rectangular"
                      width={246}
                      height={240}
                      className="rounded-2xl"
                    />
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="90%"
                      style={{ marginBottom: 6, marginTop: 6 }}
                    />

                    <Skeleton
                      animation="wave"
                      height={10}
                      width="80%"
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="65%"
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="65%"
                      style={{ marginBottom: 6 }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width="50%"
                      height={50}
                      className="rounded-2xl"
                    />
                  </div>
                );
              })}
            </section>
          </>
        ) : !(toursList.length === 0 && !isLoading) ? (
          <section className={`${toursContainer} col-12 `}>
            {toursList.map((item) => {
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
                count,
              } = item;
              return (
                <div
                  className={`${singleTour} position-relative `}
                  key={id}
                  onClick={() => handleRoute(`/Destinations/${id}`)}
                >
                  <img
                    src={imgSrc.img1}
                    alt="Photo could be shown !!!"
                    loading="lazy"
                  />
                  {hasSpecialOffer && (
                    <span className={`badge position-absolute ${specialOffer}`}>
                      Special offer
                      <i className="fa fa-bell" aria-hidden="true" />
                    </span>
                  )}
                  <div className="text-center d-flex justify-content-center align-items-center gap-2 flex-column">
                    <span className="fs-5 fw-bold ">{title}</span>
                    {hasSpecialOffer ? (
                      <div className="d-flex gap-2 justify-content-center">
                        <span className="badge bg-info text-decoration-line-through text-dark ">
                          {price} $
                          <span className={`badge  ms-lg-2 ${disPerBadge} `}>
                            {discountPercent}%
                          </span>
                        </span>
                        <span className="fw-bold px-2 badge bg-warning text-dark p-2">
                          {" "}
                          {useCalcPrice(price, discountPercent)} $
                        </span>
                      </div>
                    ) : (
                      <span className=" fw-bold">{price} $</span>
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
                    {!basket.find((basketItem) => basketItem.id === id) ? (
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
        ) : (
          <>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column my-4">
              <img
                src="./Images/Body/noResult.png"
                alt="No-result-Found-Image"
                className={`img-fluid ${notFoundImg}`}
              />
              <button
                className="btn btn-outline-danger"
                onClick={handleShowAll}
              >
                TRY AGAIN
              </button>
            </div>
          </>
        )}
      </article>
      <ToastContainer />
    </>
  );
};
export default ToursList;
