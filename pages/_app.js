import "../styles/css/bootstrap.min.css";
import "../styles/css/animate.css";
import AOS from "aos";
import "swiper/css";
import "swiper/css/bundle";
import "../node_modules/aos/dist/aos.css";
import "../styles/css/icofont.css";
import "react-accessible-accordion/dist/fancy-example.css";
// Global Styles
import "../styles/css/style.css";

// Default Color
import "../styles/color/color-default.css";
// import '../styles/color/gradient-color-one.css';
// import '../styles/color/gradient-color-two.css';
// import '../styles/color/gradient-color-three.css';
// import '../styles/color/gradient-color-four.css';
// import '../styles/color/gradient-color-five.css';
// import '../styles/color/gradient-color-six.css';
// import '../styles/color/gradient-color-seven.css';
// import '../styles/color/gradient-color-eight.css';
// import '../styles/color/gradient-color-nine.css';
// import '../styles/color/gradient-color-ten.css';
// import '../styles/color/gradient-color-eleven.css';
// import '../styles/color/gradient-color-eight.css';

// Global Responsive Styles
import "../styles/css/responsive.css";

// For RTL Styles
// import '../styles/css/rtl.css';

import Head from "next/head";
import React from "react";
import GoTop from "../components/Common/GoTop";
import SidebarDemosModal from "../components/Common/SidebarDemosModal";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>As Via</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      <GoTop scrollStepInPx="50" delayInMs="16.66" />

      {/* SidebarDemosModal */}
    </>
  );
}

export default MyApp;
