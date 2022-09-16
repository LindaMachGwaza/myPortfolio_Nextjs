//import components
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

//We output the children inside this component and they will show wherever the pages are going to be
//destructured the children property which is anything inside the layout that is in the app js file
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Alvarotrigo.com, You Tube, Google.com*/
