import React, { useState } from "react";
import "./Posp.scss";
import { Box, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "../../../Components/Desktop/Navbar/Navbar";
import Footer from "../../../Components/Desktop/Footer/Footer";
import RequestDemo from "../../../Components/Desktop/RequestDemo/RequestDemo";
import CommonSection from "../../../Components/Desktop/CommonSection/CommonSection";

function Posp() {
  const navbarStyle = { backgroundColor: "#6458D8", color: "#ffffff" };
  const image = "./images/insurevent_logo_white.svg";
  const images1 = "./images/posp_common_img.svg";
  const heading = "POS?";
  const para =
    "Our cutting-edge InsurTech POS platform empowers Point of Sales (POS) agents to effortlessly sell and efficiently  manage insurance policies. With our solution, POS agents gain a comprehensive and user-friendly platform that simplifies the entire sales process. Our platform streamlines policy issuance, automates documentation, and enables seamless communication with insurers. POS agents can efficiently track policy status, handle renewals, and manage customer information, ensuring a smooth and organized workflow.";

  const [showList, setShowList] = useState(false);

  const handleToggleList = () => {
    setShowList(!showList);
  };

  return (
    <>
      <Navbar style={navbarStyle} image={image} class1="whiteMenu" />
      <Box className="posp_wrapper">
        <div className="header">
          <Grid
            container
            spacing={3}
            className="header_inner row"
            style={{ alignItems: "center" }}
          >
            <Grid sm={12} md={5} lg={5}>
              <h5>
                Transform Your <span>Point of Sales</span> Amplify Success with
                our Cutting-Edge InsurTech POS Platform
              </h5>
            </Grid>
            <Grid
              sm={12}
              md={7}
              lg={7}
              style={{ textAlign: "end" }}
              className="text-md-center"
            >
              <img src="./images/posp_img.svg" alt="laptop" />
            </Grid>
          </Grid>
        </div>

        {/* what pos section */}

        <CommonSection images1={images1} heading={heading} para={para}/>

        {/* modules and description section */}

        <Grid className="row module_description">
          <Grid xs={12}>
            <h6>
              Module & <span>Description</span>
            </h6>
          </Grid>
          <Grid xs={12}>
            <ul className="module_description_list">
              <li>
                <div className="module_list1"></div>
                <h6>POS Agent Profile</h6>
                <div className="module_overlay">
                  <h5>POS Agent Profile</h5>
                  <p>
                    Manage and update professional information, including
                    contact details and licensing information, ensuring accurate
                    and up-to-date profiles.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list2"></div>
                <h6>Dashboard</h6>
                <div className="module_overlay">
                  <h5>Dashboard</h5>
                  <p>
                    Monitor sales performance, commissions, and incentives
                    through a comprehensive account management section.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list3"></div>
                <h6>POS Agent Onboarding</h6>
                <div className="module_overlay">
                  <h5>POS Agent Onboarding</h5>
                  <p>
                    Effortlessly onboard agents and fast-track their success
                    with our streamlined and user-friendly agent onboarding
                    process.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list4"></div>
                <h6>Policy Comparision</h6>
                <div className="module_overlay">
                  <h5>Policy Comparision</h5>
                  <p>
                    Compare coverage options to recommend the most suitable
                    policies.
                  </p>
                </div>
              </li>

              <li>
                <div className="module_list5"></div>
                <h6>Policy Issuance</h6>
                <div className="module_overlay">
                  <h5>Policy Issuance</h5>
                  <p>
                    Streamline policy issuance with automated documentation
                    processes.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list6"></div>
                <h6>Customer Management</h6>
                <div className="module_overlay">
                  <h5>Customer Management</h5>
                  <p>
                    Maintain a centralized database for organized customer
                    information.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list7"></div>
                <h6>Renewals</h6>
                <div className="module_overlay">
                  <h5>Renewals</h5>
                  <p>
                    Simplify policy renewals and handle endorsements
                    efficiently.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list8"></div>
                <h6>Digital Repository</h6>
                <div className="module_overlay">
                  <h5>Digital Repository</h5>
                  <p>
                    Store and retrieve policy documents securely in a digital
                    repository.
                  </p>
                </div>
              </li>

              <li>
                <div className="module_list9"></div>
                <h6>Communication and Notifications</h6>
                <div className="module_overlay">
                  <h5>Communication and Notifications</h5>
                  <p>
                    Facilitate seamless communication with clients through
                    integrated messaging systems.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list10"></div>
                <h6>Reporting and Analytics</h6>
                <div className="module_overlay">
                  <h5>Reporting and Analytics</h5>
                  <p>
                    Access valuable insights to track performance and optimize
                    sales strategies.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list11"></div>
                <h6>Quote Generation</h6>
                <div className="module_overlay">
                  <h5>Quote Generation</h5>
                  <p>
                    Generate instant and accurate quotes for various insurance
                    products.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list12"></div>
                <h6>Leads Management </h6>
                <div className="module_overlay">
                  <h5>Leads Management</h5>
                  <p>
                    Efficient lead management system helps address the challenge
                    of managing & effectively engaging prospective buyers
                  </p>
                </div>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* unique selling points */}

        <Grid container spacing={3} className="row selling_points">
          <Grid sm={12} md={12} lg={6} style={{ alignSelf: "center" }}>
            <h6>
              Our
              <span>
                Unique Selling <br /> Points!
              </span>
            </h6>
            <ul>
              <li>
                Seamless onboarding & documentation of POSPs with certification
                & examination
              </li>
              <li>
                Streamlined sales process Simplify and expedite insurance sales
                for intermediaries.
              </li>
              <li>
                Seamless integration Integrate with carriers and systems for
                real-time access to information.
              </li>
              <li>
                Enhanced customer experience: Deliver personalized and efficient
                service to customers.
              </li>
              <li>
                Compliance and regulatory adherence: Ensure adherence to IRDAI
                regulations and standards for POSPs.
              </li>
              <li>
                Data-driven insights: Gain valuable insights for informed
                decision-making.
              </li>
              <li style={{ display: showList ? "block" : "none" }}>
                Seamless integration Integrate with carriers and systems for
                real-time access to information.
              </li>
              <li style={{ display: showList ? "block" : "none" }}>
                Enhanced customer experience: Deliver personalized and efficient
                service to customers.
              </li>
              <li style={{ display: showList ? "block" : "none" }}>
                Compliance and regulatory adherence: Ensure adherence to IRDAI
                regulations and standards for POSPs.
              </li>
              <li style={{ display: showList ? "block" : "none" }}>
                Data-driven insights: Gain valuable insights for informed
                decision-making.
              </li>

              <Link className="read_more" onClick={handleToggleList}>
                {showList ? "Read less" : "Read more"}
              </Link>
            </ul>
          </Grid>
          <Grid
            sm={12}
            md={12}
            lg={6}
            className="text-md-center selling_dashboard_img"
          >
            <img src="./images/selling_dashboard_image.svg" alt="" />
          </Grid>
        </Grid>

        {/* request demo section */}
        <RequestDemo />
      </Box>
      <Footer />
    </>
  );
}

export default Posp;
