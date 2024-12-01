// discountPercent calculator function

const useCalcPrice = (price, discountPercent,count) => {
 
  const finalPrice = Math.floor(price - (price * discountPercent) / 100);
  return finalPrice;
};

export default useCalcPrice;
