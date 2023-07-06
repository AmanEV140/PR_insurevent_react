import React, { useState } from "react";
import "./InsuranceAggregation.scss";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "../../../Components/Desktop/Navbar/Navbar";
import Footer from "../../../Components/Desktop/Footer/Footer";
import RequestDemo from "../../../Components/Desktop/RequestDemo/RequestDemo";
import UniqueSelling from "../../../Components/Desktop/UniqueSelling/UniqueSelling";
import CommonSection from "../../../Components/Desktop/CommonSection/CommonSection";

function InsuranceAggregation() {
  const navbarStyle = { backgroundColor: "#6458D8", color: "#ffffff" };
  const image = "./images/insurevent_logo_white.svg";
  const images = "./images/sellingpoint_aggregation.svg";
  const images1 = "./images/aggregation_platform_img.svg";
  const heading = "Web-Aggregation Platform ?";
  const para =
    "A digital/online insurance buying platform for intermediaries refers to a technology-driven solution that enables the intermediaries to offer their B2C (business-to-consumer) clients a convenient and streamlined way to purchase insurance online.It provides a digital interface where intermediaries can showcase various insurance products, facilitate online applications, collect customer information, and process policy issuance. This platform leverages digital tools and automation to enhance  the insurance buying experience, simplifying the process for clients while empowering intermediaries to efficiently manage and deliver insurance solutions to their B2C customers.";

  return (
    <>
      <Navbar style={navbarStyle} image={image} class1="whiteMenu" />
      <Box className="insuranceAggregation_wrapper">
        <div className="header">
          <Grid
            container
            spacing={3}
            className="header_inner row"
            style={{ alignItems: "center" }}
          >
            <Grid sm={12} md={6} lg={6}>
              <h5>
                Unleash the Power of Digital Insurance Empower Intermediaries to
                Deliver Seamless
                <span>B2C Insurance Solutions.</span>
              </h5>
            </Grid>
            <Grid
              sm={12}
              md={6}
              lg={6}
              style={{ textAlign: "end" }}
              className="text-md-center"
            >
              <img src="./images/aggregation_headerimg.svg" alt="aggregation" />
            </Grid>
          </Grid>
        </div>

        {/* what pos section */}

        <CommonSection images1={images1} heading={heading} para={para} />

        {/* module and description section  */}
        <Grid
          container
          spacing={3}
          className="row aggregationmodule_description"
        >
          <Grid xs={12}>
            <h6>
              Module & its <span>Description</span>
            </h6>
          </Grid>

          <Grid xs={12}>
            <ul className="aggregation_description_list">
              <li>
                <div className="module_list1"></div>
                <h6>B2C Website</h6>
                <div className="module_overlay">
                  <h5>B2C Website</h5>
                  <p>
                    Design exceptional B2C websites with Intuitive UI/UX for
                    intermediaries, revolutionizing their online presence
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list2"></div>
                <h6>Online Application</h6>
                <div className="module_overlay">
                  <h5>Online Application</h5>
                  <p>
                    Enables B2C clients to complete insurance applications
                    online, providing a user-friendly interface to input
                    necessary information and select desired coverage options.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list3"></div>
                <h6>Quote Generation</h6>
                <div className="module_overlay">
                  <h5>Quote Generation</h5>
                  <p>
                    Generates instant quotes based on the client's input,
                    providing real-time pricing estimates for different
                    insurance policies.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list4"></div>
                <h6>Product Catalog</h6>
                <div className="module_overlay">
                  <h5>Product Catalog</h5>
                  <p>
                    A module that allows brokers to showcase a comprehensive
                    range of insurance products, including details on coverage,
                    benefits, and pricing.
                  </p>
                </div>
              </li>

              <li>
                <div className="module_list1"></div>
                <h6>Policy Issuance</h6>
                <div className="module_overlay">
                  <h5>Policy Issuance</h5>
                  <p>
                    Facilitates the issuance of insurance policies digitally,
                    eliminating the need for manual paperwork and expediting the
                    process.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list2"></div>
                <h6>Document Management</h6>
                <div className="module_overlay">
                  <h5>Document Management</h5>
                  <p>
                    Stores and manages digital documents related to insurance
                    policies, endorsements, and other relevant files.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list3"></div>
                <h6>Payment Processing</h6>
                <div className="module_overlay">
                  <h5>Payment Processing</h5>
                  <p>
                    Integrates secure online payment gateways to enable clients
                    to make premium payments electronically.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list4"></div>
                <h6>Customer Portal</h6>
                <div className="module_overlay">
                  <h5>Customer Portal</h5>
                  <p>
                    Provides B2C clients with a personalized portal to access
                    policy details, make changes, and view documents online.
                  </p>
                </div>
              </li>

              <li>
                <div className="module_list1"></div>
                <h6>Communication and Notifications</h6>
                <div className="module_overlay">
                  <h5>Communication and Notifications</h5>
                  <p>
                    Enables automated communication and notifications to keep
                    clients informed about policy updates, renewal reminders,
                    and important announcements.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list2"></div>
                <h6>Reporting and Analytics</h6>
                <div className="module_overlay">
                  <h5>Reporting and Analytics</h5>
                  <p>
                    Offers robust reporting and analytics capabilities,
                    providing insights into sales performance, customer trends,
                    and policy metrics.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list3"></div>
                <h6>Integration with Insurance Carriers</h6>
                <div className="module_overlay">
                  <h5>Integration with Insurance Carriers</h5>
                  <p>
                    Integrates with insurance carriers' systems to facilitate
                    seamless data exchange and ensure accurate policy
                    information.
                  </p>
                </div>
              </li>
              <li>
                <div className="module_list4"></div>
                <h6>Payment Processing </h6>
                <div className="module_overlay">
                  <h5>Payment Processing</h5>
                  <p>
                    Integrates secure online payment gateways to enable clients
                    to make premium payments electronically.
                  </p>
                </div>
              </li>
            </ul>
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

export default InsuranceAggregation;
