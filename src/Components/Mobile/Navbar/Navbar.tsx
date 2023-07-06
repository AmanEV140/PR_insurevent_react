//import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Box } from "@mui/material";
//import { useState } from "react";

function Navbar() {
  const [listOne, setListOne] = React.useState(0);
  const [listTwo, setListTwo] = React.useState(0);
  const apiUrl = 'http://localhost:1337/api/navbar?populate=deep';

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
  
  return (
    <Box className="navbar row">
      <Grid container spacing={3} sx={{ alignItems: "center" }} className="row">
        <Grid xs={3}>
          <a href="index.html">
            <img src="images/insurevent_logo.svg" alt="" height="40px" />
          </a>
        </Grid>
        <Grid xs={9}>
          <ul className="linksList">
            <li>
              <a href="javascript:void(0)" className="triangle_bottom">
                Products
              </a>
              <div className="bigMenu">
                <ul className="bigMenu_list">
                  <li className="icon1 active">
                    <a href="javascript:void(0)" onClick={() => setListOne(0)}>
                      intermediaries
                      <span>
                        For Brokers, Corporate Agencies, Web Aggregaters
                      </span>
                    </a>
                  </li>
                  <li className="icon2">
                    <a href="javascript:void(0)" onClick={() => setListOne(1)}>
                      Insurers
                    </a>
                  </li>
                  <li className="icon3">
                    <a href="javascript:void(0)" onClick={() => setListOne(2)}>
                      General Products
                    </a>
                  </li>
                  <li className="icon4">
                    <a href="javascript:void(0)" onClick={() => setListOne(3)}>
                      Banks
                    </a>
                  </li>
                  <li className="icon5">
                    <a href="javascript:void(0)" onClick={() => setListOne(4)}>
                      NBFCs
                    </a>
                  </li>
                  <li className="icon6">
                    <a href="javascript:void(0)" onClick={() => setListOne(5)}>
                      Original Equipment Manufacturers
                    </a>
                  </li>
                  <li className="icon7">
                    <a href="javascript:void(0)" onClick={() => setListOne(6)}>
                      Corporates
                    </a>
                  </li>
                  <li className="icon8">
                    <a href="javascript:void(0)" onClick={() => setListOne(7)}>
                      MISP Dealers
                    </a>
                  </li>
                </ul>
                {listOne == 0 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Enterprise Resource Planning /BMS
                      </a>
                    </li>
                    <li className="sub_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Point of Sales Person
                      </a>
                    </li>
                    <li className="sub_icon3">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(2)}>
                        Customer Relationship Manager
                      </a>
                    </li>
                    <li className="sub_icon4">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(3)}>
                        Insurance Aggregation Platform & Application
                      </a>
                    </li>
                    <li className="sub_icon5">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(4)}>
                        Self Inspection Application
                      </a>
                    </li>
                    <li className="sub_icon6">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(5)}>
                        Employee Benefit Platform
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 1 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon6">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Integration Kits & SDK's
                      </a>
                    </li>
                    <li className="sub_icon3">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Online Transaction Journey
                      </a>
                    </li>
                    <li className="sub_icon4">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(2)}>
                        Customer Enterprise Software Systems
                      </a>
                    </li>
                    <li className="sub_icon5">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(3)}>
                        Integration Support for Sales Partners
                      </a>
                    </li>
                    <li className="sub_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(4)}>
                        Development Services
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 2 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon5">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Self Inspection Application
                      </a>
                    </li>
                    <li className="sub_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Enterprise Resource Planning /BMS
                      </a>
                    </li>
                    <li className="sub_icon6">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(2)}>
                        Employee Benefit Platform
                      </a>
                    </li>
                    <li className="sub_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(3)}>
                        Point of Sales Person
                      </a>
                    </li>
                    <li className="sub_icon3">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(4)}>
                        Customer Relationship Manager
                      </a>
                    </li>
                    <li className="sub_icon4">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(5)}>
                        Insurance Aggregation Platform & Application
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 3 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon6">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Enterprise Resource Planning
                      </a>
                    </li>
                    <li className="sub_icon3">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Customer Relationship Manager
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 4 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon5">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Self Inspection Application
                      </a>
                    </li>
                    <li className="sub_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Enterprise Resource Planning /BMS
                      </a>
                    </li>
                    <li className="sub_icon6">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(2)}>
                        Employee Benefit Platform
                      </a>
                    </li>
                    <li className="sub_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(3)}>
                        Point of Sales Person
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 5 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon6">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Enterprise Resource Planning
                      </a>
                    </li>
                    <li className="sub_icon3">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Customer Relationship Manager
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 6 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon5">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Self Inspection Application
                      </a>
                    </li>
                    <li className="sub_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Enterprise Resource Planning /BMS
                      </a>
                    </li>
                    <li className="sub_icon4">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(2)}>
                        Insurance Aggregation Platform & Application
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 7 ? (
                  <ul className="bigMenu_list purple">
                    <li className="sub_icon5">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Self Inspection Application
                      </a>
                    </li>
                    <li className="sub_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Enterprise Resource Planning /BMS
                      </a>
                    </li>
                    <li className="sub_icon6">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(2)}>
                        Employee Benefit Platform
                      </a>
                    </li>
                    <li className="sub_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(3)}>
                        Point of Sales Person
                      </a>
                    </li>
                  </ul>
                ) : null}

                {/* product last list  */}
                {listTwo == 0 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>Enterprise Resource Planning /BMS</li>
                    <li>
                      Interactive Policy Lifecycle Management, Automated
                      renewals, Lead management process.
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 1 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>
                      PoSP/Agent Examination & Certification, Complete Business
                      Engagement & Integration with BMS
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 2 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>
                      Lead Management System, Dialer Integrations & Advanced
                      Assistance Features
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 3 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>
                      Break-In Handling System, Advanced Assistive Features &
                      Integrations
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 4 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>
                      Group Insurance Product Aggregator/Platform, Automated
                      Renewals & Balance Triggers, Policy Wallets & Lead
                      Management System
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 5 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>
                      End User Website & Application, Real time Quotation
                      System, Advanced API Integrations
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}

                {/* insurer last list */}
                {listTwo == 0 ? (
                  <ul className="bigMenu_list light_yellow d-none">
                    <li>
                      Advanced API Kits complete with Quotation, Proposal,
                      Policy Issuance, Policy Document, Schedulers
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 1 ? (
                  <ul className="bigMenu_list light_yellow d-none">
                    <li>
                      Instant Policy Issuance, Real-Time Premium Calculation,
                      Policy & Customer Lifecycle Management
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 2 ? (
                  <ul className="bigMenu_list light_yellow d-none">
                    <li>
                      Customer Retention System, Advanced Data Security,
                      Pipeline/Lead Management Systems, Realtime Interactive
                      Emailers/SMS
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 3 ? (
                  <ul className="bigMenu_list light_yellow d-none">
                    <li>
                      Automated Processes, Develop need-pay Off, Dialer Systems,
                      Real time Quotation System
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 4 ? (
                  <ul className="bigMenu_list light_yellow d-none">
                    <li>
                      Product Designing, Prototyping, Software Development &
                      Testing
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
              </div>
            </li>
            {/* services section start  */}
            <li>
              <a href="javascript:void(0)">Services</a>
              <div className="bigMenu">
                <ul className="bigMenu_list">
                  <li className="service_icon1 active">
                    <a href="javascript:void(0)" onClick={() => setListOne(0)}>
                      Custom Product Development
                    </a>
                  </li>
                  <li className="service_icon2">
                    <a href="javascript:void(0)" onClick={() => setListOne(1)}>
                      Digitization of Insurance Business
                    </a>
                  </li>
                  <li className="service_icon3">
                    <a href="javascript:void(0)" onClick={() => setListOne(2)}>
                      Agency Management Services
                    </a>
                  </li>
                  <li className="service_icon4">
                    <a href="javascript:void(0)" onClick={() => setListOne(3)}>
                      Lead Generation & Digital Marketing
                      <span>
                        For Brokers, Corporate Agencies, Web Aggregaters
                      </span>
                    </a>
                  </li>
                </ul>
                {listOne == 0 ? (
                  <ul className="bigMenu_list purple">
                    <li className="services_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Branding Campaigns
                      </a>
                    </li>
                    <li className="services_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Performance Marketing
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 1 ? (
                  <ul className="bigMenu_list purple">
                    <li className="services_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Performance Marketing
                      </a>
                    </li>
                    <li className="services_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Branding Campaigns
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 2 ? (
                  <ul className="bigMenu_list purple">
                    <li className="services_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Branding Campaigns
                      </a>
                    </li>
                    <li className="services_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Performance Marketing
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listOne == 3 ? (
                  <ul className="bigMenu_list purple">
                    <li className="services_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(0)}>
                        Performance Marketing
                      </a>
                    </li>
                    <li className="services_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}>
                        Branding Campaigns
                      </a>
                    </li>
                  </ul>
                ) : null}

                {/* services last list */}
                {listTwo == 0 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>Performance Marketing</li>
                    <li>
                      High Intent , high Quality Lead Generation through target
                      Marketing Campaigns.
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons_two.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
                {listTwo == 1 ? (
                  <ul className="bigMenu_list light_yellow">
                    <li>Branding Campaigns</li>
                    <li>
                      Banner Ads, Interstitial Ads, Native Ads, Feature
                      Advertising.
                    </li>
                    <li className="text-center">
                      <img
                        src="./images/products-nav-icons_two.svg"
                        alt=""
                        height="182"
                      />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="link_button product">
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
              </div>
            </li>
            <li>
              <a href="javascript:void(0)">About</a>
            </li>
            <li>
              <a href="javascript:void(0)">Contact</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="blueBtn">
                Get in touch
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Navbar;
