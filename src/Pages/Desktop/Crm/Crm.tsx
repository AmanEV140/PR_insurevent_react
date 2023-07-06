import React, { useState } from "react";
import "./Crm.scss";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "../../../Components/Desktop/Navbar/Navbar";
import Footer from "../../../Components/Desktop/Footer/Footer";
import RKTextField from "../../../Components/FieldTypes/RKTextField/RKTextField";
import TextArea from "../../../Components/FieldTypes/TextArea/TextArea";

function Crm() {
  const [formFields, setFormFields] = useState<{
    name: { value: string; warning: boolean };
    email: { value: string; warning: boolean };
    mobile: { value: string; warning: boolean };
    organization: { value: string; warning: boolean };
    message: { value: string; warning: boolean };
  }>({
    name: { value: "", warning: false },
    email: { value: "", warning: false },
    mobile: { value: "", warning: false },
    organization: { value: "", warning: false },
    message: { value: "", warning: false },
  });
  const fieldsUpdateState = (attrName: any, value: any) => {
    attrName[3]({
      ...attrName[2],
      [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value },
    });
  };
  const navbarStyle = { backgroundColor: "#6458D8", color: "#ffffff" };
  const image = "./images/insurevent_logo_white.svg";


  return (
    <>
      <Navbar style={navbarStyle} image={image}  class1="whiteMenu"/>
      <Box className="crm_wrapper">
        <div className="header">
          <Grid container spacing={3} className="header_inner row">
            <Grid sm={12} md={5} lg={5} style={{ alignSelf: "center" }}>
              <h5>
                Elevating intermediary excellence for
                <span>unmatched client relationships</span>
              </h5>
            </Grid>
            <Grid
              sm={12}
              md={7}
              lg={7}
              style={{ alignSelf: "end", textAlign: "end" }}
              className="text-md-center"
            >
              <img src="./images/crm_header_img.svg" alt="laptop" />
            </Grid>
          </Grid>
        </div>

        {/* what cem section */}
        <div className="what_crm">
          <Grid container spacing={3} className="row">
            <Grid sm={12} md={4} lg={4} style={{ alignSelf: "center" }}>
              <h6>
                What is <span>CRM</span>
              </h6>
            </Grid>
            <Grid sm={12} md={4} lg={4}>
              <p>
                Our CRM solution is a game-changer for intermediaries,
                revolutionizing their sales and productivity. By centralizing
                lead management and offering comprehensive customer relationship
                management, intermediaries can effectively convert leads and
                deliver personalized services, fostering higher satisfaction and
                loyalty. Streamlined policy management and automated workflows
                reduce manual effort and enhance accuracy.
              </p>
            </Grid>
            <Grid sm={12} md={4} lg={4}>
              <p>
                Robust analytics provide real-time insights for data-driven
                decision-making, optimizing sales strategies and driving revenue
                growth. With seamless collaboration and mobile accessibility,
                brokers can work efficiently and respond promptly to client
                needs. Additionally, our CRM enables easy access to insurance
                quotes, comparison, and payment link sharing from a single
                dashboard, simplifying the sales process and enhancing customer
                experience. 
              </p>
            </Grid>
          </Grid>
        </div>

        {/* modules and description */}

        <Grid container spacing={3} className="row">
          <Grid xs={12}>
            <div className="modules_description">
              <Grid container spacing={3}>
                <Grid sm={12} md={12} lg={6} className="text-md-center">
                  <h5>Modules & Description</h5>
                  <p>
                    Unlock the Full Potential of Our Feature-Packed Solutions!
                  </p>
                  <img src="./images/crm_module_img.svg" alt="" />
                </Grid>
                <Grid sm={12} md={12} lg={6}>
                  <div className="module_description_list">
                    <ul>
                      <li className="module_innner_list">
                        <span className="module_list1"></span>
                        <div className="module_subinnner_list">
                          <h6>Overview</h6>
                          <ul>
                            <li>
                              Sales dashboard provides a comprehensive view of
                              the generated business
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="module_innner_list">
                        <span className="module_list2"></span>
                        <div className="module_subinnner_list">
                          <h6>Upcoming Renewals</h6>
                          <ul>
                            <li>
                              Stay informed about upcoming policy renewals.
                            </li>
                            <li>
                              Plan and prioritize renewal activities to ensure
                              customer satisfaction.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="module_innner_list">
                        <span className="module_list3"></span>
                        <div className="module_subinnner_list">
                          <h6>Offline Policy Booking</h6>
                          <ul>
                            <li>
                              Ability to book policies offline for customer
                              convenience.
                            </li>
                            <li>
                              Maintain a record of policies booked through
                              offline channels.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="module_innner_list">
                        <span className="module_list4"></span>
                        <div className="module_subinnner_list">
                          <h6>Business Analytics</h6>
                          <ul>
                            <li>
                              View overall business generated by insurance
                              companies.
                            </li>
                            <li>
                              Analyze business performance based on insurance
                              product categories.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="module_innner_list">
                        <span className="module_list1"></span>
                        <div className="module_subinnner_list">
                          <h6>Overview</h6>
                          <ul>
                            <li>
                              Sales dashboard provides a comprehensive view of
                              the generated business
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="module_innner_list">
                        <span className="module_list2"></span>
                        <div className="module_subinnner_list">
                          <h6>Upcoming Renewals</h6>
                          <ul>
                            <li>
                              Stay informed about upcoming policy renewals.
                            </li>
                            <li>
                              Plan and prioritize renewal activities to ensure
                              customer satisfaction.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="module_innner_list">
                        <span className="module_list3"></span>
                        <div className="module_subinnner_list">
                          <h6>Offline Policy Booking</h6>
                          <ul>
                            <li>
                              Ability to book policies offline for customer
                              convenience.
                            </li>
                            <li>
                              Maintain a record of policies booked through
                              offline channels.
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        {/* usp benefitsection */}
        <div className="usp_benefits">
          <Grid container spacing={3} className="row">
            <Grid sm={12} md={6} lg={6} className="text-md-center">
              <img src="./images/crm_benefits_img.svg" alt="benefits" />
            </Grid>
            <Grid sm={12} md={6} lg={6} className="benefits_inner_section">
              <h5>
                USP & <span>Benefits</span>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  Comprehensive overview of business performance and analytics.
                </li>
                <li>
                  Efficient management of in-progress leads and upcoming
                  renewals.
                </li>
                <li>
                  Seamless offline policy booking for customer convenience.
                </li>
                <li>
                  Accurate tracking of commission for better financial insights.
                </li>
                <li>Clear visibility of leads in progress.</li>
                <li>Timely Policy Issuance without any hassle.</li>
                <li>
                  Enhanced efficiency for reduction in redundant data entry
                  tasks.
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
        {/* request demo section */}
        <Grid container spacing={3} className="row">
          <Grid xs={12}>
            <div className="request_demo">
              <Grid container spacing={3} className="text-md-center">
                <Grid sm={12} md={12} lg={5}>
                  <h6>
                    Request a <span>Demo</span>
                  </h6>
                  <p>
                    Experience the Future: Request a Demo and Witness the Power
                    of Our Solutions in Action!
                  </p>
                  <img
                    src="./images/request_demo_img.svg"
                    alt="request image"
                  />
                </Grid>
                <Grid sm={12} md={12} lg={7} className="pb-0">
                  <div className="crm_formSection">
                    <Grid container spacing={3}>
                      <Grid xs={6}>
                        <RKTextField
                          class_name="inputField blue_bg"
                          title={"Name"}
                          value={formFields.name.value}
                          attrName={[
                            "name",
                            "value",
                            formFields,
                            setFormFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={formFields.name.warning}
                        />
                      </Grid>
                      <Grid xs={6} className="mb-10">
                        <RKTextField
                          class_name="inputField blue_bg"
                          title={"Phone Number"}
                          value={formFields.mobile.value}
                          attrName={[
                            "number",
                            "value",
                            formFields,
                            setFormFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={formFields.mobile.warning}
                        />
                      </Grid>
                      <Grid xs={6} className="mb-10">
                        <RKTextField
                          class_name="inputField blue_bg"
                          title={"Email ID"}
                          value={formFields.email.value}
                          attrName={[
                            "email",
                            "value",
                            formFields,
                            setFormFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={formFields.email.warning}
                        />
                      </Grid>
                      <Grid xs={6} className="mb-10">
                        <RKTextField
                          class_name="inputField blue_bg"
                          title={"Organization"}
                          value={formFields.organization.value}
                          attrName={[
                            "organization",
                            "value",
                            formFields,
                            setFormFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={formFields.organization.warning}
                        />
                      </Grid>
                      <Grid xs={12} className="mb-9">
                        <TextArea
                          class_name="inputField blue_bg"
                          title={"Message"}
                          value={formFields.message.value}
                          placeholder={"Enter description here"}
                          attrName={[
                            "message",
                            "value",
                            formFields,
                            setFormFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={formFields.message.warning}
                        />
                      </Grid>
                      <Grid xs={12} textAlign="center">
                        <Button
                          variant="contained"
                          className="blueBtn"
                          component="label"
                        >
                          Submit Details
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Crm;
