import { Box,Link } from '@mui/material'
//import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import "./Footer.scss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Footer() {
  const apiUrl = 'http://localhost:1337/api/btmmenu?populate=deep';

  let fdta: any;
  const [fetchedData,setFetchedData]  = useState<any>(undefined);
  useEffect(()=>{
    fetch(apiUrl)
      .then((res : any) => res.json())
      .then((data : any) => {
        setFetchedData(data.data.attributes)        
      })
      .catch(error => {
        console.error('Error:', error);
     });
  },[])
  const navigate = useNavigate()

  const lists  : any = fetchedData?.lists


  return (
    <Box className="footer">
      <Grid container spacing={3}>
        <Grid sm={6} md={3} lg={3}>
          <div>
            <a href="">
              <img
                src="./images/footer_insurevent_logo.svg"
                alt=""
                height="64"
                className="mb-10"
              />
            </a>
            <img
              src="./images/footer_boy.svg"
              alt=""
              height="207px"
              className="footer_boy"
            />
          </div>
        </Grid>
        {
          lists?.map((section:any)=>{
              return(
                <Grid sm={6} md={3} lg={3}>
                  <h6>{section?.heading}</h6>
                  <ul className="product_list">
                    {
                      section?.links.map((entry:any)=>{
                        return(
                          <li>
                          
                            <Link onClick={() => navigate(entry.url)}>{entry.label}</Link>
                          </li>)
                      })
                    }
                   
                  </ul>
                </Grid>
              )
          })
        }
       
        <Grid xs={12}>
          <hr />
        </Grid>
        <Grid sm={12} md={6} lg={6}>
          <div className="address_detail">
            <a href="mailto:someone@example.com">{fetchedData?.ftr.email.label} |</a>
            <span> {fetchedData?.ftr.phoneno}</span>
            <p>
            {fetchedData?.ftr.address}
            </p>
          </div>
        </Grid>
        {/* {
          handles?.map((section:any)=>{
              return(
                <Grid sm={12} md={6} lg={6}>
                  
                  <div className="social_sites">
                    {
                      section?.links.map((entry:any)=>{
                        return(
                          <li>
                            <a href={entry.url}>{entry.label}</a>
                          </li>)
                      })
                    }
                   
                   </div>
                </Grid>
              )
          })
        } */}
        <Grid sm={12} md={6} lg={6}>
          <div className="social_sites">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/everventindia"
                  target="_blank"
                  className="facebook"
                ></a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/company/evervent1"
                  target="_blank"
                  className="linkedin"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/?next=/evervent_/"
                  target="_blank"
                  className="instagram"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="youtube"
                ></a>
              </li>
            </ul>
            <p>{fetchedData?.ftr.copyrt}</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;