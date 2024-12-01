// Handle Layout

import Footer from "../Footer";
import Header from "../Header";
import ProgressBar from "../ProgreesBar";

const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
