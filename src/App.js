
// import React, { useEffect } from "react";
// import store from "./redux-setup/store"
// import { Provider } from "react-redux";
// import Up from "./components/Up";
// import Down from "./components/Down";
// const App = () => {
// console.log("render");
// const [sttTitle, setSttTitle] = React.useState(true);
// const [isLoading, setIsLoading] = React.useState("Loading...");
// const updateSttTitle = () => {
//   setSttTitle(!sttTitle);
// }
// const updateTitle = (val) => setIsLoading(val);
// useEffect(() => {
//   setTimeout(() => {
//     setIsLoading("What is Lorem Ipsum?");
//     console.log("dai");
//   }, 2000)
//   console.log("useEffect");
// }, []);

// const test = (e) => {
//   console.log("test");
//   document.getElementById("pClass").style.color = "red";
// };

// const [number, setNumber] = React.useState(0);
// const updateNumber = () => setNumber(Math.round(Math.random() * 10));
// const resetNumber = () => setNumber(0);

//   return (
//     <>
//       <Provider store={store}>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-3 col-md-3 col-sm-8 col-8">
//               <Up/>
//             </div>
//             <div className="col-lg-3 col-md-3 col-sm-8 col-8">
//               <Down/>
//             </div>
//           </div>
//         </div>
//       </Provider>
//     </>
//   )
// }
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Heaer from "./shared/layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
import Footer from "./shared/layouts/Footer";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Heaer />
        <div id="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Detail" element={<Detail />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  )

}
export default App;
