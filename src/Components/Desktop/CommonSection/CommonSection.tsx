import { Box } from '@mui/material'
import React from 'react'
import "./CommonSection.scss";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface CommonSectionProps {
  images1?: string;
  heading? : string;
  para?: string;
}
const CommonSection: React.FC<CommonSectionProps> = ({ images1, heading,para }) => {
  return (
    <Box className="common_section">
      <Grid container spacing={3} className="row">
        <Grid xs={12}>
          <div className="what_erp">
            <Grid container spacing={3}>
              <Grid xs={6} style={{ alignSelf: "center" }}>
                {/* <img src="./images/erp_image.svg" alt="posp" /> */}
                <img src={images1} alt="" />
              </Grid>
              <Grid xs={6} style={{ alignSelf: "center" }}>
                <h6>
                  What is <span>{heading}</span>
                </h6>
                <p>{para}</p>
                {/* <h6>
                  What is <span>ERP?</span>
                </h6>
                <p>
                  Experience seamless insurance brokerage operations with our
                  powerful InsurTech solution. By integrating ERP and a Broker
                  Management System, we provide brokers with a comprehensive
                  platform to manage customer relationships, policies, claims,
                  and finances effortlessly. Our solution streamlines workflows,
                  reduces manual tasks, ensures accurate data, and boosts
                  overall efficiency. Bid farewell to fragmented systems and
                  embrace our integrated InsurTech solution for a streamlined
                  and successful brokerage experience.
                </p> */}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommonSection