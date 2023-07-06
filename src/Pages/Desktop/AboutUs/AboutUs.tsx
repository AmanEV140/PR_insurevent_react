
import "./AboutUs.scss";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "../../../Components/Desktop/Navbar/Navbar";
import Footer from "../../../Components/Desktop/Footer/Footer";

function AboutUs() {
  const image = "./images/insurevent_logo.svg";

  const apiUrl = "http://localhost:1337/api/pages?populate=deep";

  let fdta: any;
  const [fetchedData, setFetchedData] = useState<any>(undefined);
  useEffect(() => {
    fetch(apiUrl)
      .then((res: any) => res.json())
      .then((data: any) => {
        setFetchedData(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

      


  return (
    <>
      <Navbar image={image} />
      <Box className="about_wrapper">
        <div className="header">
          <Grid container spacing={3} className="row">
            <Grid sm={12} md={5} lg={5} style={{ alignSelf: "center" }}>
              <h5 className="heading">About Us</h5>
              <p className="heading_content">
                We at Insurvent, believe in revolutionizing the insurance
                industry through our cutting-edge technology. Our team of
                software engineers, and product experts come together to
                synergize their skills and make the process of purchasing and
                managing insurance policies easy and convenient.
              </p>
            </Grid>
            <Grid sm={12} md={7} lg={7} className="about_img">
              <img src="./images/boy_1.svg" alt="aboutt" />
            </Grid>
          </Grid>
        </div>
        {/* our goals section */}
        <div className="our_goals">
          <Grid container spacing={3} className="row">
            <Grid xs={12} className="text-center">
              <h5 className="heading">
                Our <span>Goals</span>
              </h5>
              <p className="heading_content">
                We believe that everyone deserves access to affordable and
                comprehensive insurance coverage <br /> thus we strive to bridge
                this gap between different stakeholders of the insurance world.
              </p>
            </Grid>
          </Grid>
        </div>

        {/* our founders */}
        <div className="our_founder">
          <Grid container spacing={3} className="row">
            <Grid xs={12} className="text-center">
              <h5 className="heading">
                Our <span>Founders</span>
              </h5>
              <p className="heading_content">
                “To accomplish great things, we must not only dream, but also
                plan, not only believe, but sincerely act."
              </p>
            </Grid>
          </Grid>
          <div className="founder_section">
            <Grid container spacing={3} className="row">
              <Grid xs={12}>
                <div className="inner_section mb-12">
                  <div className="inner_content">
                  <img src="./images/boy_1.svg" alt="aboutt" />
                    <p>
                      “At Evervent, we have been into the insurance distribution
                      business for more than a decade and being an early
                      creators of digital distribution technology, we understand
                      the nuances of insurtech to the core. We are fortunate to
                      be a part of the digital journeys of our clients, helping
                      them transform their insurance business.”
                      <span>- Sunil Juneja</span>
                    </p>
                  </div>
                </div>
                <div className="inner_section">
                  <div className="inner_content">
                  <img src="./images/boy_1.svg" alt="aboutt" />
                    <p>
                      “Acceleration in Digital innovation is transforming the
                      Fintech industry worldwide. We are already witnessing use
                      of A.I and block chain to solve complex problems in
                      Insurance. Disruptive and future ready businesses will be
                      those who have technology at the heart of their company.”
                      <span>- Ankit Sachdeva</span>
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>

        {/* our journey section */}

        <Grid container spacing={3} className="row">
          <Grid xs={12} className="text-center">
            <h5 className="heading">
              Our <span>Journey</span>
            </h5>
            <p className="heading_content">
              “ The Journey of a thousand miles begins with one step - Lao Tzu
            </p>
          </Grid>
          <Grid xs={12}>
            <div className="journey_section">
              <Grid container spacing={3} className="row">
                <Grid xs={12}>
                  <span className="journey_content journey2025">
                    <h6>2025</h6>
                    <p>
                      Global Leaders <br /> Insurtech Products
                    </p>
                  </span>
                  <span className="journey_content journey2020">
                    <h6>2020</h6>
                    <p>
                      Achieved Premium <br /> benchmark of USD 1M <br /> throgh
                      online sales.
                    </p>
                  </span>
                  <span className="journey_content journey2016">
                    <h6>2016</h6>
                    <p>
                      Turned into <br /> Insuretech Provider
                    </p>
                  </span>
                  <span className="journey_content journey2015">
                    <h6>2015</h6>
                    <p>
                      Setup Customer contact <br /> center with Tele-assisted{" "}
                      <br /> sales
                    </p>
                  </span>
                  <span className="journey_content journey2013">
                    <h6>2013</h6>
                    <p>
                      Started insurance web <br /> aggregation portal <br /> “
                      Quickbima.com “
                    </p>
                  </span>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        {/* our team section */}
        <Grid container spacing={3} className="row">
          <Grid xs={12} className="text-center our_team">
            <h5 className="heading">
              Our <span>Team</span>
            </h5>
            <p className="heading_content">
              We believe in the magic of team strength. We are a team of 60+
              employees, mainly software engineers, designers and testing
              professionals & this number is only growing. We provide a
              professional environment, numerous learning opportunities & a
              creative space for its employees & that's why people love working
              here. We have one of the best employee retention rates and we take
              pride in being equal opportunity provider.
            </p>
            <img src="./images/boy_1.svg" alt="aboutt" />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default AboutUs;
