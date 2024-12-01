//  Basket page
// Imports 
import { Helmet } from "react-helmet";
import classes from "./index.module.css";
import { useContext, useEffect, useState } from "react";
import BasketContext from "../../Contexts/BasketContext";
import { Link } from "react-router-dom";
import useCalcPrice from "../../Hooks/useCalcPrice";
// React Component
const BasketPage = () => {
  //  Contexts , states & effects
  const { disPerBadge, customHeight, summarySection } = classes;
  const { basket, setBasket } = useContext(BasketContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (basket.length) {
      const totalPriceList = [...basket]
        .map((i) => {
          const { count, discountPercent, price, hasSpecialOffer } = i;
          if (hasSpecialOffer) {
            return useCalcPrice(price, discountPercent) * count;
          } else {
            return count * price;
          }
        })
        .reduce((a, b) => a + b);
      // console.log(totalPriceList);
      setTotalPrice(totalPriceList);
    } else {
      setTotalPrice(0);
    }
  }, [basket]);

  // JS functions
  const handlCounter = (option, itemId, count) => {
    if (option === "Add") {
      const newArr = basket.map((i) =>
        i.id === itemId ? { ...i, count: count + 1 } : i
      );
      setBasket(newArr);
    } else if (count >= 2) {
      const newArr = basket.map((i) =>
        i.id === itemId ? { ...i, count: count - 1 } : i
      );
      setBasket(newArr);
    }
  };
  const handlRemoveItem = (itemId) => {
    const filteredList = basket.filter((i) => i.id !== itemId);
    setBasket(filteredList);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SinFly | Basket</title>
      </Helmet>
      <div>
        <section
          className={`${customHeight} `}
          style={{ backgroundColor: "#dadada" }}
        >
          <div className="container py-5 h-100">
            <div className="row  justify-content-center align-items-center h-100 position-relative">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-0 ">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0">Tour Basket</h1>
                            <h6 className="mb-0 text-muted">
                              {basket.length} items
                            </h6>
                          </div>
                          {basket.length ? (
                            basket.map((item) => {
                              const {
                                imgSrc,
                                title,
                                price,
                                id,
                                duration,
                                discountPercent,
                                count,
                                hasSpecialOffer,
                              } = item;
                              return (
                                <>
                                  <hr className="my-4" />

                                  <div
                                    className="row mb-4 d-flex justify-content-between align-items-center"
                                    key={id}
                                  >
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                      <img
                                        src={imgSrc.img1}
                                        className="img-fluid rounded-3"
                                        alt="Cotton T-shirt"
                                      />
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                      <h6 className="text-muted">{title}</h6>
                                      <h6 className="mb-0">{duration}</h6>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                      <button className="btn px-2">
                                        <i
                                          className="fa fa-minus"
                                          onClick={() =>
                                            handlCounter("Minus", id, count)
                                          }
                                        />
                                      </button>

                                      <span className="badge bg-secondary p-2 d-flex justify-content-center align-items-center fw-bold fs-6">
                                        {count}
                                      </span>

                                      <button
                                        data-mdb-button-init
                                        data-mdb-ripple-init
                                        className="btn btn-link px-2"
                                      >
                                        <i
                                          className="fa fa-plus"
                                          onClick={() =>
                                            handlCounter("Add", id, count)
                                          }
                                        />
                                      </button>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 text-center m-auto">
                                      {hasSpecialOffer ? (
                                        <>
                                          <h6 className="mb-0 ">
                                            &nbsp;
                                            {count *
                                              useCalcPrice(
                                                price,
                                                discountPercent
                                              )}
                                            $
                                          </h6>
                                          <span
                                            className={`badge  ms-lg-2 ${disPerBadge} fs-6`}
                                          >
                                            {discountPercent}%
                                          </span>
                                        </>
                                      ) : (
                                        <h6 className="mb-0 ">
                                          &nbsp;
                                          {count * price}$
                                        </h6>
                                      )}
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                      <a href="#!" className="text-muted">
                                        <i
                                          className="fa fa-times"
                                          onClick={() => handlRemoveItem(id)}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </>
                              );
                            })
                          ) : (
                            <div>
                              <img
                                src="./Images/Basket/empty.jpg"
                                alt="Empty cart image could be shown"
                                className="img-fluid"
                              />
                            </div>
                          )}

                          <div className="pt-5">
                            <h6 className="mb-0">
                              <Link
                                to="/Destinations"
                                className="text-body fw-bold fs-6  "
                              >
                                <i className="fa fa-long-arrow-alt-left me-2" />
                                Back To Shop
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-4  ${summarySection}`}>
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase">
                              {basket.length} Items
                            </h5>
                          </div>

                          <h6 className="text-uppercase my-4">Discount Code</h6>

                          <div className="mb-5 p-0">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                type="text"
                                id="form3Examplea2"
                                className="form-control form-control"
                                placeholder="Enter Your Code"
                              />
                            </div>
                          </div>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-5 ">
                            <h5 className="text-uppercase">Total price :</h5>
                            <h5>{totalPrice} $</h5>
                          </div>
                          <div className=" d-flex justify-content-center align-items-center w-100 ">
                            <Link type="button" className="btn btn-light">
                              Purchase
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default BasketPage;
