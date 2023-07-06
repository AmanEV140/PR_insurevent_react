import React, { useState } from "react";
import "./RequestDemo.scss";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import RKTextField from "../../FieldTypes/RKTextField/RKTextField";
import TextArea from "../../FieldTypes/TextArea/TextArea";
import { TContactForm } from "../../../Services/Type/TContactForm";

function RequestDemo() {
  const [formFields, setFormFields] = useState<TContactForm>({
    name: { value: "", warning: false },
    email: { value: "", warning: false },
    organization: { value: "", warning: false },
    mobile: { value: "", warning: false },
    message: { value: "", warning: false },
  });
  const fieldsUpdateState = (attrName: any, value: any) => {
    attrName[3]({
      ...attrName[2],
      [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value },
    });
  };

  const validateform = () => {
    let contactFormFieldData: TContactForm = formFields;
    contactFormFieldData.name.warning =
      formFields.name.value.length === 0 ? true : false;
    contactFormFieldData.email.warning =
      formFields.email.value.length === 0 ? true : false;
    contactFormFieldData.organization.warning =
      formFields.organization.value.length === 0 ? true : false;
    contactFormFieldData.mobile.warning =
      formFields.mobile.value.length === 0 ? true : false;
    contactFormFieldData.message.warning =
      formFields.message.value.length === 0 ? true : false;

    setFormFields({ ...contactFormFieldData });
  };
  return (
    <Box className="request_wrapper">
      <Grid container spacing={3} className="row">
        <Grid xs={12}>
          <div className="request_demo">
            <Grid container spacing={3}>
              <Grid sm={12} md={12} lg={6} className="text-md-center">
                <h6>
                  Request a <span>Demo</span>
                </h6>
                <p>
                  Experience the Future: Request a Demo and Witness the Power of
                  Our <br /> Solutions in Action!
                </p>
                <img
                  src="./images/request_demo_posp_img.svg"
                  alt="request image"
                />
              </Grid>
              <Grid sm={12} md={12} lg={6} className="pb-0">
                <div className="crm_formSection">
                  <Grid container spacing={3}>
                    <Grid xs={12} className="mb-4">
                      <RKTextField
                        class_name="inputField "
                        title={"Name"}
                        value={formFields.name.value}
                        attrName={["name", "value", formFields, setFormFields]}
                        value_update={fieldsUpdateState}
                        warn_status={formFields.name.warning}
                        error_messg="Please enter name"
                      />
                    </Grid>
                    <Grid xs={12} className="mb-4">
                      <RKTextField
                        class_name="inputField "
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
                        error_messg="Please enter organization"
                      />
                    </Grid>
                    <Grid xs={12} className="mb-4">
                      <RKTextField
                        class_name="inputField "
                        title={"Phone Number"}
                        value={formFields.mobile.value}
                        attrName={[
                          "mobile",
                          "value",
                          formFields,
                          setFormFields,
                        ]}
                        value_update={fieldsUpdateState}
                        warn_status={formFields.mobile.warning}
                        error_messg="Please enter number"
                      />
                    </Grid>
                    <Grid xs={12} className="mb-4">
                      <RKTextField
                        class_name="inputField "
                        title={"Email ID"}
                        value={formFields.email.value}
                        attrName={["email", "value", formFields, setFormFields]}
                        value_update={fieldsUpdateState}
                        warn_status={formFields.email.warning}
                        error_messg="Please enter email"
                      />
                    </Grid>

                    <Grid xs={12} className="mb-4">
                      <TextArea
                        class_name="inputField "
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
                        error_messg="Please enter message"
                        
                      />
                    </Grid>
                    <Grid xs={12} textAlign="center">
                      <Button
                        variant="contained"
                        className="blueBtn"
                        component="label"
                        onClick={validateform}
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
  );
}

export default RequestDemo;
