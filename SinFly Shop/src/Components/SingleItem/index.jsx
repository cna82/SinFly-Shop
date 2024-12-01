// Single Item Page
// Imports
import { Helmet } from "react-helmet";
import classes from "./index.module.css";
import { useContext, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useCalcPrice from "../../Hooks/useCalcPrice";
import { CircularProgress, Rating } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import BasketContext from "../../Contexts/BasketContext";
import { toast, ToastContainer } from "react-toastify";
// React Component
const SingleItem = () => {
  // states , Variables , contexts & Effects
  const {
    singleContainer,
    addedBtn,
    loadingContainer,
    singleWrapper,
    imgResponsive,
  } = classes;
  const [tour, setTour] = useState(null);
  const { basket, setBasket } = useContext(BasketContext);
  const params = useParams();
  const abortController = new AbortController();
  useEffect(() => {
    getData();
    // clean up function
    return () => abortController.abort();
  }, []);
  // JS Functions
  const getData = () => {
    fetch(`http://localhost:5000/Tour/${params.id}`)
      .then((res) => res.json())
      .then((data) => setTour(data))
      .catch((err) => console.log(err));
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
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SinFly | About US</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {!tour?.title.length > 0 ? (
        <>
          {/* loading With Material UI  */}
          <div className={loadingContainer}>
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="info" />
            <CircularProgress color="warning" />
            <CircularProgress color="danger" />
          </div>
        </>
      ) : (
        <>
          <div
            className={` ${singleWrapper} d-flex justify-content-center align-items-center  `}
            style={{ height: "80vh" }}
          >
            <div
              className={`card mb-3 ${singleContainer}`}
              style={{ maxWidth: "80%" }}
              key={tour?.id}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    <SwiperSlide>
                      <img
                        src={`../${tour?.imgSrc.img1}`}
                        className={`img-fluid rounded-start ${imgResponsive}`}
                        alt="..."
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={`../${tour?.imgSrc.img2}`}
                        className={`img-fluid rounded-start ${imgResponsive}`}
                        alt="..."
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={`../${tour?.imgSrc.img3}`}
                        className={`img-fluid rounded-start ${imgResponsive}`}
                        alt="..."
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className=" d-flex justify-content-end align-items-center ">
                      <Link to="/Destinations" className="btn btn-danger">
                        <i className="fa fa-arrow-left" aria-hidden="true" />
                        &nbsp; Back
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between ">
                      <h5 className="card-title my-3 fs-4">{tour?.title}</h5>
                      <span className="d-flex align-items-center gap-2 justify-content-center">
                        {tour?.rating}
                        <Rating
                          name="half-rating-read"
                          defaultValue={tour?.rating}
                          precision={0.1}
                          readOnly
                        />
                      </span>
                    </div>

                    <div className="card-text">
                      {tour?.hasSpecialOffer ? (
                        <div className="d-flex gap-1 flex-column justify-content-center">
                          <span className="fw-bold">
                            Price without discount :{" "}
                            <span className="text-decoration-line-through badge text-primary fs-6 ">
                              {tour?.price} $
                            </span>
                            <span className="">
                              <span className="badge fs-6 text-danger">
                                {tour?.discountPercent} %
                              </span>
                            </span>
                          </span>

                          <span className="fw-bold mb-2 ">
                            {" "}
                            Total price :{" "}
                            <span className="text-success fw-bold fs-5 text-decoration-underline ">
                              {useCalcPrice(tour?.price, tour?.discountPercent)}{" "}
                              $
                            </span>
                          </span>
                        </div>
                      ) : (
                        <span className="fw-bold fs-5  ">
                          {" "}
                          Total price :{" "}
                          <span className="text-success fs-5 text-decoration-underline ">
                            {tour?.price} $
                          </span>
                        </span>
                      )}
                    </div>
                    <p
                      className={`card-text ${
                        !tour?.hasSpecialOffer ? "mt-3" : ""
                      } `}
                    >
                      <span className="fw-bold">Date : </span>
                      {tour?.date} &nbsp; <b>({tour?.duration})</b>
                    </p>
                    <p className="card-text">
                      {" "}
                      <strong>Description :</strong> {tour?.description}
                    </p>
                    <div className=" d-flex justify-content-between align-items-center ">
                      <p className="card-text">
                        <small className="text-muted">
                          Transpotation Vehicle : {tour?.transportationVehicle}
                        </small>
                      </p>
                      {!basket.find((item) => item.id === tour.id) ? (
                        <button
                          className="btn btn-outline-dark px-4 border-info fw-bold "
                          onClick={() => handleAddToBasket(tour)}
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
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default SingleItem;
