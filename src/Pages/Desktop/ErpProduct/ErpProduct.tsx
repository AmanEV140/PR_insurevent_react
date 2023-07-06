import React, { useState } from "react";
import "./ErpProduct.scss";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "../../../Components/Desktop/Navbar/Navbar";
import Footer from "../../../Components/Desktop/Footer/Footer";
import RequestDemo from "../../../Components/Desktop/RequestDemo/RequestDemo";
import UniqueSelling from "../../../Components/Desktop/UniqueSelling/UniqueSelling";
import CommonSection from "../../../Components/Desktop/CommonSection/CommonSection";

function ErpProduct() {
  const navbarStyle = { backgroundColor: "#6458D8", color: "#ffffff" };
  const image = "./images/insurevent_logo_white.svg";
  const images = "./images/unique_selling_erp_img.svg";
  const images1 = "./images/erp_image.svg";
  const heading = "ERP?";
  const para =
    " Experience seamless insurance brokerage operations with our powerful InsurTech solution. By integrating ERP and a Broker Management System, we provide brokers with a comprehensive platform to manage customer relationships, policies, claims, and finances effortlessly. Our solution streamlines workflows, reduces manual tasks, ensures accurate data, and boosts overall efficiency. Bid farewell to fragmented systems and embrace our integrated InsurTech solution for a streamlined and successful brokerage experience.";

  return (
    <>
      <Navbar style={navbarStyle} image={image} class1="whiteMenu" />
      <Box className="erp_wrapper">
        <div className="header">
          <Grid
            container
            spacing={3}
            className="header_inner row"
            style={{ alignItems: "center" }}
          >
            <Grid sm={12} md={6} lg={6}>
              <h5>
                Empowering intermediaries with comprehensive
                <span>Insurance Management System for Brokers.</span>
              </h5>
            </Grid>
            <Grid
              sm={12}
              md={6}
              lg={6}
              style={{ textAlign: "end" }}
              className="text-md-center"
            >
              <img src="./images/erp_product_image.svg" alt="erp" />
            </Grid>
          </Grid>
        </div>

        {/* what pos section */}

        <CommonSection images1={images1} heading={heading} para={para} />

        {/* module and sescription */}

        <Grid container spacing={3} className="row erpmodule_description">
          <Grid xs={12}>
            <h6>
              Module & its <span>Description</span>
            </h6>
          </Grid>
          <Grid sm={6} md={6} lg={4} className="text-center">
            <div className="module_box">
              <div className="inner_box">
                <img src="./images/erp_module_img1.svg" alt="" />
              </div>
              <div className="content_box">
                <h5>Digital Policy Management System</h5>
                <p>
                  ERP solution offers policy management tools that allow you to
                  manage policies, including renewals and endorsements, more
                  efficiently
                </p>
              </div>
            </div>
          </Grid>
          <Grid sm={6} md={6} lg={4} className="text-center">
            <div className="module_box space_top">
              <div className="inner_box">
                <img src="./images/erp_module_img2.svg" alt="" />
              </div>
              <div className="content_box">
                <h5>Claims Processing</h5>
                <p>
                  ERP software features claims processing tools that allow you
                  to manage and track their status online, making the process
                  faster and more convenient for both you and yInsurVent
                  customers.
                </p>
              </div>
            </div>
          </Grid>
          <Grid sm={6} md={6} lg={4} className="text-center">
            <div className="module_box">
              <div className="inner_box">
                <img src="./images/erp_module_img3.svg" alt="" />
              </div>
              <div className="content_box">
                <h5>Real-Time Analytics</h5>
                <p>
                  ERP software provides real-time analytics, providing insight
                  into key metrics such as policy sales, retention rates, and
                  claims processing times, helping you make data-driven business
                  decisions.
                </p>
              </div>
            </div>
          </Grid>
          <Grid sm={6} md={6} lg={4} className="text-center">
            <div className="module_box">
              <div className="inner_box">
                <img src="./images/erp_module_img4.svg" alt="" />
              </div>
              <div className="content_box">
                <h5>Customizable Workflow</h5>
                <p>
                  ERP software allows you to customize workflows, creating a
                  more efficient and streamlined business process that meets the
                  specific needs of your digital insurance business.
                </p>
              </div>
            </div>
          </Grid>
          <Grid sm={6} md={6} lg={4} className="text-center">
            <div className="module_box space_top">
              <div className="inner_box">
                <img src="./images/erp_module_img5.svg" alt="" />
              </div>
              <div className="content_box">
                <h5>Analytics and Reporting</h5>
                <p>
                  InsurVent ERP solution provides real-time analytics and
                  reporting, giving you insight into key metrics such as policy
                  sales, retention rates, and claims processing times, helping
                  you make data-driven business decisions
                </p>
              </div>
            </div>
          </Grid>
          <Grid sm={6} md={6} lg={4} className="text-center">
            <div className="module_box">
              <div className="inner_box">
                <img src="./images/erp_module_img6.svg" alt="" />
              </div>
              <div className="content_box">
                <h5>Customer Engagement</h5>
                <p>
                  ERP software features tools for customer engagement, including
                  digital communication channels and self-service options,
                  helping you provide your customers with a more personalized
                  and innovative insurance buying experience.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* unique selling points */}

        <UniqueSelling images={images} />

        {/* request demo section */}
        <RequestDemo />
      </Box>
      <Footer />
    </>
  );
}

export default ErpProduct;
