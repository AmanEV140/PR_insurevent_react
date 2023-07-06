import React from 'react'
import "./UniqueSelling.scss";
import { Box } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface UniqueSellingProps {
  images?: string; 
}
const UniqueSelling: React.FC<UniqueSellingProps> = ({  images }) => {
  return (
    <Box className="uniqueSelling_wrapper">
      <Grid container spacing={3} className="row ">
        <Grid xs={12}>
          <div className="selling_points">
            <Grid container spacing={3}>
              <Grid sm={12} md={12} lg={6} className="selling_points_inner">
                <h6>
                  Our &nbsp;
                  <span>
                    Unique Selling <br /> Points!
                  </span>
                </h6>
                <img src={images} alt="" />
              </Grid>
              <Grid sm={12} md={12} lg={6}>
                <ul className="erp_selling_list">
                  <li>
                    <span className="selling_list8 innerbox"></span>
                    <p>
                      Seamless integration of ERP and Broker Management System
                      enhances data synchronization and eliminates data silos.
                    </p>
                  </li>
                  <li>
                    <span className="selling_list5 innerbox"></span>
                    <p>
                      Real-time access to critical information for informed
                      decision-making.
                    </p>
                  </li>
                  <li>
                    <span className="selling_list4 innerbox"></span>
                    <p>
                      Advanced reporting and analytics capabilities for
                      actionable insights.
                    </p>
                  </li>
                  <li>
                    <span className="selling_list6 innerbox"></span>
                    <p>
                      Customizable solution to adapt to the unique needs and
                      processes of insurance intermediaries.
                    </p>
                  </li>
                  <li>
                    <span className="selling_list7 innerbox"></span>
                    <p>
                      Improved collaboration and communication among team
                      members and stakeholders.
                    </p>
                  </li>
                  <li>
                    <span className="selling_list4 innerbox"></span>
                    <p>
                      Advanced reporting and analytics capabilities for
                      actionable insights.
                    </p>
                  </li>
                  <li>
                    <span className="selling_list6 innerbox"></span>
                    <p>
                      Customizable solution to adapt to the unique needs and
                      processes of insurance intermediaries.
                    </p>
                  </li>
                  <li>
                    <span className="selling_list7 innerbox"></span>
                    <p>
                      Improved collaboration and communication among team
                      members and stakeholders.
                    </p>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UniqueSelling;