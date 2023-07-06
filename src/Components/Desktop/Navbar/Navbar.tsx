import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./Navbar.scss";
import { Box,Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  style?: any;
  image?: string;
  class1 ? : string;
}



const Navbar: React.FC<NavbarProps> = ({ style, image,class1 }) => {
  const [listOne, setListOne] = React.useState(0);
  const [listTwo, setListTwo] = React.useState(0);
  const navigate = useNavigate()


  const apiUrl = 'http://localhost:1337/api/navbar?populate=deep';
  

  const  [fetchedData,setData] = useState<any>(undefined);
  useEffect(()=>{
    fetch(apiUrl)
      .then(data => data.json())
      .then((data : any) => {
        setData(data);
        console.log('Data:', fetchedData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },[])


  
  
  const dynamicNavbarComponents:any = []
  fetchedData?.data.attributes.DnmicComp.split(":").map((fieldName:string)=>{
      let component = fetchedData?.data.attributes[fieldName];
      dynamicNavbarComponents.push(component);
  })
  
  
  //let logo = fetchedData?.data.attributes.logoimg
  const prdctlist = fetchedData?.data.attributes.prdct 
  const srvc = fetchedData?.data.attributes.services 
  const buttons = fetchedData?.data.attributes.btn 
  

  let output1 : any = [];
  let output2 : any = [];
  let output3 : any =[];

  console.log("dff",prdctlist)

  prdctlist?.map((entry : any)=>{
      let components : any = []
      entry.itms.map((subentry : any,subindex : any)=>{

      

        components.push(
          <li className={"sub_icon" + (subindex + 1).toString()}>
            <a
              href="javascript:void(0)"
              onClick={() => setListTwo(output2.length)}
            >
              {subentry.label}
            </a>
          </li>
        )
        output2.push(
          <ul className="bigMenu_list light_yellow">
            <li>Performance Marketing</li>
            <li>
              {subentry.description}
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
                className="link_button product"
              >
                {subentry.btn}
              </a>
            </li>
          </ul>
        )
      })
      output1.push(components)

  })



  return (
    <Box className={`navbar row ${class1}`} style={style}>
      <Grid container spacing={3} sx={{ alignItems: "center" }} className="row">
        <Grid xs={3}>
          <a href="index.html">
            <img src={fetchedData?.data.attributes.logoimg?.img.data.attributes.url} alt="no image" height="60px" />
          </a>
        </Grid>
        <Grid xs={9}>
          <ul className="linksList">
            <li>
              <a
                href="javascript:void(0)"
                className="triangle_bottom"
                style={style}
              >
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
                
                <ul className="bigMenu_list purple">
                    {output1[listOne]}
                </ul>
                

                {/* product last list  */}
                {
                  output2[listTwo]
                }
                {/* insurer last list */}
                
                
            
              </div>
            </li>
            {/* services section start  */}










































            <li>
              <a href="javascript:void(0)" style={style}>
                Services
              </a>
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
                        onClick={() => setListTwo(0)}
                      >
                        Branding Campaigns
                      </a>
                    </li>
                    <li className="services_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}
                      >
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
                        onClick={() => setListTwo(0)}
                      >
                        Performance Marketing
                      </a>
                    </li>
                    <li className="services_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}
                      >
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
                        onClick={() => setListTwo(0)}
                      >
                        Branding Campaigns
                      </a>
                    </li>
                    <li className="services_icon2">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}
                      >
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
                        onClick={() => setListTwo(0)}
                      >
                        Performance Marketing
                      </a>
                    </li>
                    <li className="services_icon1">
                      <a
                        href="javascript:void(0)"
                        onClick={() => setListTwo(1)}
                      >
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
                        className="link_button product"
                      >
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
                        className="link_button product"
                      >
                        Know more
                      </a>
                    </li>
                  </ul>
                ) : null}
              </div>
            </li>
            <li>
              {/* <a href="javascript:void(0)" style={style}>
                About
              </a> */}
              <Link onClick={() =>navigate("/aboutus")}> About Us</Link>
            </li>
            <li>
              <a href="javascript:void(0)" style={style}>
                Contact
              </a>
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
};

export default Navbar;
