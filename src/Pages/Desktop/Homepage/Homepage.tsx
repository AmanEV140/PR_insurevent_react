import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ItemsCarousel from "react-items-carousel";
import Carousel from "react-material-ui-carousel";
import Footer from "../../../Components/Desktop/Footer/Footer";
import Navbar from "../../../Components/Desktop/Navbar/Navbar";
import RKTextField from "../../../Components/FieldTypes/RKTextField/RKTextField";
import "../Homepage/Homepage.scss";
function Homepage() {
  const [viewTabsStatus, setViewTabsStatus] = React.useState("aggregation");
  const [viewTabsStatusOne, setViewTabsStatusOne] =
    React.useState("testimonial1");
  const [viewTabsStatusTwo, setViewTabsStatusTwo] = React.useState("upcoming1");
  const updateMasterState = (attrName: any, value: any) => {
    attrName(value);
  };
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [quoteFields, setQuoteFields] = useState<{
    name: { value: string; warning: boolean };
    email: { value: string; warning: boolean };
    mobile: { value: string; warning: boolean };
  }>({
    name: { value: "", warning: false },
    email: { value: "", warning: false },
    mobile: { value: "", warning: false },
  });
  const fieldsUpdateState = (attrName: any, value: any) => {
    attrName[3]({
      ...attrName[2],
      [attrName[0]]: { ...[attrName[0]], [attrName[1]]: value },
    });
  };
  const apiUrl = "http://localhost:1337/api/home-page?populate=deep";

  
  const [fetchedData, setFetchedData] = useState<any>(undefined);
  useEffect(() => {
    fetch(apiUrl)
      .then((res: any) => res.json())
      .then((data: any) => {
        setFetchedData(data.data.attributes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const items: any[] = [];
  let ptnrs: any = [];
  const upcomingproducts: any = fetchedData?.futprdct;

  fetchedData?.prtnrimg?.data.map((entry: any, index: number) => {
    let node = {
      image_url: `http://localhost:1337${entry.attributes.url}`,
    };
    if (ptnrs.length < 10) {
      console.log(node, "A", index, ptnrs);
      ptnrs.push(node);
    } else {
      console.log(node, "B", index);
      items.push(ptnrs);
      ptnrs = [];
      ptnrs.push(node);
    }
  });
  console.log("Sub ptners : ", ptnrs);
  if (ptnrs.length > 0) {
    items.push(ptnrs);
    ptnrs.length = 0;
  }
  console.log(fetchedData);
  console.log("ptners Array : ", items);

  // var items = [
  //   {
  //     data: [
  //       { image_url: "./images/insurerlogo/aditya_birla_capital.svg" },
  //       {
  //         image_url:
  //           "./images/insurerlogo/AEGON-Religare-Life-Insurance-Company-Limited.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/Bajaj-Allianz-General-Insurance-Co-Ltd.svg",
  //       },
  //       { image_url: "./images/insurerlogo/Bharti-Axa-General-Insurance.svg" },
  //       {
  //         image_url: "./images/insurerlogo/Birla-Sun-Life-Insurance-Co-Ltd.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/CignaTTK-Health-Insurance-Company-Limited.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/Edelweiss-Tokio-Life-Insurance-Co-Ltd.svg",
  //       },
  //       { image_url: "./images/insurerlogo/Go-Digit-General-Insurance.svg" },
  //       {
  //         image_url:
  //           "./images/insurerlogo/HDFC-ERGO-General-Insurance-Co-Ltd.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/ICICI-Lombard-General-Insurance-Co-Ltd.svg",
  //       },
  //     ],
  //   },
  //   {
  //     data: [
  //       { image_url: "./images/insurerlogo/Bharti-Axa-General-Insurance.svg" },
  //       {
  //         image_url: "./images/insurerlogo/Birla-Sun-Life-Insurance-Co-Ltd.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/CignaTTK-Health-Insurance-Company-Limited.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/Edelweiss-Tokio-Life-Insurance-Co-Ltd.svg",
  //       },
  //       { image_url: "./images/insurerlogo/Go-Digit-General-Insurance.svg" },
  //       {
  //         image_url:
  //           "./images/insurerlogo/HDFC-ERGO-General-Insurance-Co-Ltd.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/ICICI-Lombard-General-Insurance-Co-Ltd.svg",
  //       },
  //       { image_url: "./images/insurerlogo/aditya_birla_capital.svg" },
  //       {
  //         image_url:
  //           "./images/insurerlogo/AEGON-Religare-Life-Insurance-Company-Limited.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/Bajaj-Allianz-General-Insurance-Co-Ltd.svg",
  //       },
  //     ],
  //   },
  //   {
  //     data: [
  //       { image_url: "./images/insurerlogo/Bharti-Axa-General-Insurance.svg" },
  //       {
  //         image_url: "./images/insurerlogo/Birla-Sun-Life-Insurance-Co-Ltd.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/CignaTTK-Health-Insurance-Company-Limited.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/Edelweiss-Tokio-Life-Insurance-Co-Ltd.svg",
  //       },
  //       { image_url: "./images/insurerlogo/aditya_birla_capital.svg" },
  //       {
  //         image_url:
  //           "./images/insurerlogo/AEGON-Religare-Life-Insurance-Company-Limited.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/Bajaj-Allianz-General-Insurance-Co-Ltd.svg",
  //       },

  //       { image_url: "./images/insurerlogo/Go-Digit-General-Insurance.svg" },
  //       {
  //         image_url:
  //           "./images/insurerlogo/HDFC-ERGO-General-Insurance-Co-Ltd.svg",
  //       },
  //       {
  //         image_url:
  //           "./images/insurerlogo/ICICI-Lombard-General-Insurance-Co-Ltd.svg",
  //       },
  //     ],
  //   },
  // ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(1);
  const chevronWidth = 40;

  let subarray: any = [];
  const service: any[] = [];

  fetchedData?.srvcs?.map((entry: any, index: number) => {
    let node = {
      image_url: `http://localhost:1337${entry.bigimg.data.attributes.url}`,
      heading: entry.btnhding,
      para: entry.description,
    };
    if (subarray.length < 2) {
      console.log(node, "A", index, subarray);
      subarray.push(node);
    } else {
      console.log(node, "B", index);
      service.push(subarray);
      subarray = [];
      subarray.push(node);
    }
  });
  console.log("Sub Array : ", subarray);
  if (subarray.length > 0) {
    service.push(subarray);
    subarray.length = 0;
  }
  console.log(fetchedData);
  console.log("Service Array : ", service);
  
  let insurevent: any = [];
  let subvent: any = [];

  fetchedData?.whyvnt.map((entry: any, index: number) => {
    let node = {
      image_url: `http://localhost:1337${entry.bigimg.data.attributes.url}`,
      heading: entry.btnhding,
      para: entry.description,
    };
    if (subvent.length < 3) {
      console.log(node, "A", index, subvent);
      subvent.push(node);
    } else {
      console.log(node, "B", index);
      insurevent.push(subvent);
      subvent = [];
      subvent.push(node);
    }
  });
  console.log("Sub insurevent : ", subvent);
  if (subvent.length > 0) {
    insurevent.push(subvent);
    subvent.length = 0;
  }
  console.log(fetchedData);
  console.log("insurevent prop : ", service);

  const image = "public/images/arrow_right.svg";

  console.log("terget2 :", fetchedData);
  //console.log("img1 : ",{`http://localhost:1337/api/home-page${fetchedData?.intro.img.data.attributes.url}`})

  return (
    <>
      <Navbar image={image} />
      <Box className='homePageWrapper'>
        {/* header section */}
        <div className='header'>
          <Grid container spacing={3} className='row'>
            <Grid xs={6}>
              <h2>{fetchedData?.intro.label}</h2>
              <p>{fetchedData?.intro.description}</p>
              <a href='javascript:void(0)' className='blueBtn arrow_icon'>
                {fetchedData?.btn.label}
              </a>
            </Grid>
            <Grid xs={6}>
              <img
                src={`http://localhost:1337${fetchedData?.intro.img.data.attributes.url}`}
                alt='insurevant'
                className='headerimg'
              />
            </Grid>
          </Grid>
        </div>
        {/* products we offer */}
        <Grid container spacing={3} className='row'>
          <Grid xs={12}>
            <div className='products_offer'>
              <Grid container spacing={3}>
                <Grid sm={12} md={6} lg={6} className='pb-0 '>
                  {viewTabsStatus == "aggregation" ? (
                    <div className='product_img'>
                      <img
                        src={`http://localhost:1337${fetchedData?.product[0].bigimg.data.attributes.url}`}
                        alt=''
                        width={426}
                      />
                    </div>
                  ) : null}
                  {viewTabsStatus == "crm" ? (
                    <div className='product_img'>
                      <img
                        src={`http://localhost:1337${fetchedData?.product[1].bigimg.data.attributes.url}`}
                        alt=''
                        width={426}
                      />
                    </div>
                  ) : null}
                  {viewTabsStatus == "enterprise" ? (
                    <div className='product_img'>
                      <img
                        src={`http://localhost:1337${fetchedData?.product[2].bigimg.data.attributes.url}`}
                        alt=''
                        width={426}
                      />
                    </div>
                  ) : null}
                  {viewTabsStatus == "pos" ? (
                    <div className='product_img'>
                      <img
                        src={`http://localhost:1337${fetchedData?.product[3].bigimg.data.attributes.url}`}
                        alt=''
                        width={426}
                      />
                    </div>
                  ) : null}
                  {viewTabsStatus == "voluntry" ? (
                    <div className='product_img'>
                      <img
                        src={`http://localhost:1337${fetchedData?.product[4].bigimg.data.attributes.url}`}
                        alt=''
                        width={426}
                      />
                    </div>
                  ) : null}
                  {viewTabsStatus == "inspection" ? (
                    <div className='product_img'>
                      <img
                        src={`http://localhost:1337${fetchedData?.product[5].bigimg.data.attributes.url}`}
                        alt=''
                        width={426}
                      />
                    </div>
                  ) : null}
                </Grid>
                <Grid sm={12} md={6} lg={6} className='pb-0'>
                  <div className='productTabs'>
                    <h2>
                      {fetchedData?.productweoffer.heading.split(":")[0]}{" "}
                      <span>
                        {" "}
                        {fetchedData?.productweoffer.heading.split(":")[1]}
                      </span>
                    </h2>
                    <p>{fetchedData?.productweoffer.subhead}</p>
                    <Button
                      className={
                        viewTabsStatus == "aggregation"
                          ? "defaultTab active product_icon1"
                          : "defaultTab product_icon1"
                      }
                      onClick={() => {
                        updateMasterState(setViewTabsStatus, "aggregation");
                      }}
                    >
                      <h6> {fetchedData?.product[0].btnhding}</h6>
                      <p>{fetchedData?.product[0].description}</p>
                    </Button>
                    <hr />
                    <Button
                      className={
                        viewTabsStatus == "crm"
                          ? "defaultTab active product_icon2"
                          : "defaultTab product_icon2"
                      }
                      onClick={() => {
                        updateMasterState(setViewTabsStatus, "crm");
                      }}
                    >
                      <h6>{fetchedData?.product[1].btnhding}</h6>
                      <p>{fetchedData?.product[1].description}</p>
                    </Button>
                    <hr />
                    <Button
                      className={
                        viewTabsStatus == "enterprise"
                          ? "defaultTab active product_icon3"
                          : "defaultTab product_icon3"
                      }
                      onClick={() => {
                        updateMasterState(setViewTabsStatus, "enterprise");
                      }}
                    >
                      <h6>{fetchedData?.product[2].btnhding}</h6>
                      <p>{fetchedData?.product[2].description}</p>
                    </Button>
                    <hr />
                    <Button
                      className={
                        viewTabsStatus == "pos"
                          ? "defaultTab active product_icon4"
                          : "defaultTab product_icon4"
                      }
                      onClick={() => {
                        updateMasterState(setViewTabsStatus, "pos");
                      }}
                    >
                      <h6>{fetchedData?.product[3].btnhding}</h6>
                      <p>{fetchedData?.product[3].description}</p>
                    </Button>
                    <hr />
                    <Button
                      className={
                        viewTabsStatus == "voluntry"
                          ? "defaultTab active product_icon5"
                          : "defaultTab product_icon5"
                      }
                      onClick={() => {
                        updateMasterState(setViewTabsStatus, "voluntry");
                      }}
                    >
                      <h6>{fetchedData?.product[4].btnhding}</h6>
                      <p>{fetchedData?.product[4].description}</p>
                    </Button>
                    <hr />
                    <Button
                      className={
                        viewTabsStatus == "inspection"
                          ? "defaultTab active product_icon6"
                          : "defaultTab product_icon6"
                      }
                      onClick={() => {
                        updateMasterState(setViewTabsStatus, "inspection");
                      }}
                    >
                      <h6>{fetchedData?.product[5].btnhding}</h6>
                      <p>{fetchedData?.product[5].description}</p>
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        {/* potential clients section  */}
        <Grid container spacing={3} className='row'>
          <Grid xs={12}>
            <div className='potential_client'>
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <h5> {fetchedData?.whtwdo[0].heading}</h5>
                  <p>
                    {fetchedData?.whtwdo[0].subhead.split(":")[0]} <br />{" "}
                    {fetchedData?.whtwdo[0].subhead.split(":")[1]} <br />
                    {fetchedData?.whtwdo[0].subhead.split(":")[2]}
                  </p>
                </Grid>
                <Grid xs={8} sx={{ alignSelf: "center" }}>
                  <ul>
                    <li>
                      <span>
                        <CountUp end={10} duration={5} />
                      </span>
                      {fetchedData?.whtwdo[1].heading}
                    </li>
                    <li>
                      <span>
                        <CountUp end={1.2} duration={5} />
                      </span>
                      {fetchedData?.whtwdo[2].heading}
                    </li>
                    <li>
                      <span>
                        <CountUp end={10} duration={5} />
                      </span>
                      {fetchedData?.whtwdo[3].heading}
                    </li>
                    <li>
                      <span>
                        <CountUp end={10} duration={5} />
                      </span>
                      {fetchedData?.whtwdo[4].heading}
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        {/* services overview section */}
        <div className='service_section'>
          <Grid container spacing={3} className='row'>
            <Grid sm={12} md={4} lg={4} sx={{ alignSelf: "center" }}>
              <h5 className='heading'>
                {fetchedData?.serviceview.heading.split(":")[0]} <br />{" "}
                <span> {fetchedData?.serviceview.heading.split(":")[1]}</span>
              </h5>
              <p className='heading_content'>
                {fetchedData?.serviceview.subhead}
              </p>
            </Grid>
            <Grid sm={12} md={8} lg={8}>
              <Carousel autoPlay={true} animation='slide' duration={800}>
                {service.map((item: any, i: number) => (
                  <Grid container spacing={3}>
                    {item.map((item: any, index: number) => (
                      <Grid xs={6}>
                        {index === 0 ? (
                          <div className='inner_section active'>
                            <img src={item.image_url} />
                            <h6>{item.heading}</h6>
                            <p>{item.para}</p>
                          </div>
                        ) : (
                          <div className='inner_section'>
                            <img src={item.image_url} />
                            <h6>{item.heading}</h6>
                            <p>{item.para}</p>
                          </div>
                        )}
                      </Grid>
                      // <Grid xs={6}>
                      //   <div className="inner_section">
                      //     <img
                      //       src={item.image_url}
                      //     />
                      //     <h6>{item.heading}</h6>
                      //     <p>{item.para}</p>
                      //   </div>
                      // </Grid>
                    ))}
                  </Grid>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </div>
        {/* brands business section */}
        <Grid container spacing={3} className='row'>
          <Grid xs={12}>
            <div className='brand_business'>
              <Grid container spacing={3}>
                <Grid sm={12} md={12} lg={4} className='brand_content'>
                  <h3 className='heading'>
                    {fetchedData?.brnds.heading.split(":")[0]} &nbsp;
                    <span>
                      {fetchedData?.brnds.heading.split(":")[1]}
                      <br /> {fetchedData?.brnds.heading.split(":")[2]}
                    </span>
                  </h3>
                  <p className='heading_content'>
                    {fetchedData?.brnds.subhead}
                  </p>
                </Grid>
                <Grid sm={12} md={12} lg={8} className='brand_list'>
                  <ul className='brand_list_logo'>
                    <li className='instantbeema'></li>
                  </ul>
                  <ul className='brand_list_logo'>
                    <li className='auxilium'></li>
                    <li className='srg'></li>
                    <li className='shareindia'></li>
                  </ul>
                  <ul className='brand_list_logo'>
                    <li className='atelier'></li>
                    <li className='swastika'></li>
                    <li className='bharatre'></li>
                    <li className='ahalia'></li>
                    <li className='ahalia'></li>
                  </ul>
                  <ul className='brand_list_logo'>
                    <li className='motilal'></li>
                    <li className='parivar'></li>
                    <li className='jbboda'></li>
                    <li className='samyag'></li>
                  </ul>
                  <ul className='brand_list_logo mr-0'>
                    <li className='mannapuram'></li>
                    <li className='bharatre'></li>
                    <li className='jrk'></li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        {/*  why insurevent section */}
        <div className='why_insurevent'>
          <Grid container spacing={3} className='row'>
            <Grid xs={12} className='textCenter'>
              <h5 className='heading'>
                {fetchedData?.whyins.heading.split(":")[0]}{" "}
                <span> {fetchedData?.whyins.heading.split(":")[1]} </span>
              </h5>
              <p className='heading_content'>{fetchedData?.whyins.subhead}</p>
            </Grid>
            <Grid xs={12}>
              <Carousel autoPlay={true} animation='slide' duration={800}>
                {insurevent.map((item: any, i: number) => (
                  <Grid container spacing={3}>
                    {item.map((item: any, index: number) => (
                      <Grid xs={4}>
                        {index === 1 ? (
                          <div className='insurevent_inner active'>
                            <img src={item.image_url} />
                            <h6>{item.heading}</h6>
                            <p>{item.para}</p>
                          </div>
                        ) : (
                          <div className='insurevent_inner'>
                            <img src={item.image_url} />
                            <h6>{item.heading}</h6>
                            <p>{item.para}</p>
                          </div>
                        )}
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </div>
        {/* insurer partner section */}
        <div className='insurer_partner'>
          <Grid container spacing={3} className='row'>
            <Grid sm={6} md={6} lg={4} className='alignSelfCenter'>
              <img
                src={`http://localhost:1337${fetchedData?.prtnr.img.data.attributes.url}`}
                alt=''
                height='348'
              />
            </Grid>
            <Grid sm={6} md={6} lg={8}>
              <h4 className='heading'>
                {fetchedData?.prtnr.label.split(":")[0]}{" "}
                <span>{fetchedData?.prtnr.label.split(":")[1]} </span>
              </h4>
              <p className='heading_content mb-11'>
                {fetchedData?.prtnr.description}
              </p>
              <Carousel autoPlay={true} animation='slide' duration={800}>
                {items.map((item: any, i: number) => (
                  <Box>
                    {item.map((item: any, i: number) => (
                      <img
                        style={{
                          height: "102px",
                          width: "135px",
                          background: "#fff",
                          padding: "10px",
                          margin: "10px",
                          borderRadius: "20px",
                        }}
                        src={item.image_url}
                      />
                    ))}
                  </Box>
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </div>
        {/* upcoming products */}
        <Grid container spacing={3} className='row'>
          <Grid xs={12}>
            <div className='upcoming_products'>
              <Grid container spacing={3}>
                <Grid xs={12}>
                  <h6 className='heading'>
                    {fetchedData?.upprdct.heading.split(":")[0]}{" "}
                    <span>{fetchedData?.upprdct.heading.split(":")[1]}</span>
                  </h6>
                  <p className='heading_content'>
                    {fetchedData?.upprdct.subhead.split(":")[0]}
                    {/* {" "} */}
                    <br /> {fetchedData?.upprdct.subhead.split(":")[1]}
                  </p>
                </Grid>
                <Grid xs={12} className='upcoming_innersection'>
                          <Grid container spacing={3}>
                            {upcomingproducts?.map((entry: any) => {
                              return viewTabsStatusTwo == `upcoming${entry.label}` ? (
                                <>
                                  <Grid xs={6} className='img_section'>
                                    <img src={entry.bigimg} alt='' height='265' />
                                  </Grid>
                                  <Grid xs={6}>
                                    <h5 className='upcoming_heading'>{entry.btnhding.replace(":","")}</h5>
                                    <p className='upcoming_content'>{entry.description}</p>
                                  </Grid>
                                </>
                              ) : null;
                            })}
                          </Grid>
                        </Grid>

                            <Grid
                              xs={12}
                              sx={{ display: "flex", justifyContent: "space-between" }}
                            >


                              {upcomingproducts?.map((entry: any)=>{
                                  return <Button
                                  className={
                                    viewTabsStatusTwo == `upcoming${entry.label}`
                                      ? "defaultTab active commercial"
                                      : "defaultTab commercial"
                                  }
                                  onClick={() => {
                                    updateMasterState(setViewTabsStatusTwo, `upcoming${entry.label}`);
                                  }}
                                >
                                  {entry.btnhding.split(":")[0]}<br /> {entry.btnhding.split(":")[1]}
                                </Button>
                              
                              })}




                              {/* <Button
                                className={
                                  viewTabsStatusTwo == "upcoming1"
                                    ? "defaultTab active commercial"
                                    : "defaultTab commercial"
                                }
                                onClick={() => {
                                  updateMasterState(setViewTabsStatusTwo, "upcoming1");
                                }}
                              >
                                Commercial <br /> vehicle
                              </Button>

                              <Button
                                className={
                                  viewTabsStatusTwo == "upcoming2"
                                    ? "defaultTab active dialpro"
                                    : "defaultTab dialpro"
                                }
                                onClick={() => {
                                  updateMasterState(setViewTabsStatusTwo, "upcoming2");
                                }}
                              >
                                Dial Pro <br /> CRM
                              </Button>

                              <Button
                                className={
                                  viewTabsStatusTwo == "upcoming3"
                                    ? "defaultTab active insurance_platform"
                                    : "defaultTab insurance_platform"
                                }
                                onClick={() => {
                                  updateMasterState(setViewTabsStatusTwo, "upcoming3");
                                }}
                              >
                                Re-Insurance <br /> Platform
                              </Button>

                              <Button
                                className={
                                  viewTabsStatusTwo == "upcoming4"
                                    ? "defaultTab active liability"
                                    : "defaultTab liability"
                                }
                                onClick={() => {
                                  updateMasterState(setViewTabsStatusTwo, "upcoming4");
                                }}
                              >
                                Liability <br /> Insurance
                              </Button>

                              <Button
                                className={
                                  viewTabsStatusTwo == "upcoming5"
                                    ? "defaultTab active marine"
                                    : "defaultTab marine"
                                }
                                onClick={() => {
                                  updateMasterState(setViewTabsStatusTwo, "upcoming5");
                                }}
                              >
                                Marine <br /> Insurance
                              </Button>

                              <Button
                                className={
                                  viewTabsStatusTwo == "upcoming6"
                                    ? "defaultTab active fire"
                                    : "defaultTab fire"
                                }
                                onClick={() => {
                                  updateMasterState(setViewTabsStatusTwo, "upcoming6");
                                }}
                              >
                                Fire <br /> Insurance
                              </Button> */}
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
        {/* testimonial section */}
        <div className='testimonial_section'>
          <Grid container spacing={3} className='row'>
            <Grid xs={12}>
              <h5 className='heading'>
                <span> {fetchedData?.testimnial.heading} </span>
              </h5>
              <p className='heading_content mb-13'>
                {fetchedData?.testimnial.Description}
              </p>
            </Grid>
            <Grid sm={6} md={6} lg={5} className='testimonial_inner'>
              <Button
                className={
                  viewTabsStatusOne == "testimonial1"
                    ? "defaultTab active testimonial_icon1"
                    : "defaultTab testimonial_icon1"
                }
                onClick={() => {
                  updateMasterState(setViewTabsStatusOne, "testimonial1");
                }}
              >
                <h5>
                  Mr. Manmoar lal
                  <span>- JB BODA</span>
                </h5>
              </Button>

              <Button
                className={
                  viewTabsStatusOne == "testimonial2"
                    ? "defaultTab active testimonial_icon2"
                    : "defaultTab testimonial_icon2"
                }
                onClick={() => {
                  updateMasterState(setViewTabsStatusOne, "testimonial2");
                }}
              >
                <h5>
                  Mr. Baljit Singh
                  <span>- Bharat ree</span>
                </h5>
              </Button>

              <Button
                className={
                  viewTabsStatusOne == "testimonial3"
                    ? "defaultTab active testimonial_icon3"
                    : "defaultTab testimonial_icon3"
                }
                onClick={() => {
                  updateMasterState(setViewTabsStatusOne, "testimonial3");
                }}
              >
                <h5>
                  Mr. Bharampal Singh
                  <span>- Instant Beema</span>
                </h5>
              </Button>

              <Button
                className={
                  viewTabsStatusOne == "testimonial4"
                    ? "defaultTab active testimonial_icon1"
                    : "defaultTab testimonial_icon1"
                }
                onClick={() => {
                  updateMasterState(setViewTabsStatusOne, "testimonial4");
                }}
              >
                <h5>
                  Mr. Manmoar lal
                  <span>- JB BODA</span>
                </h5>
              </Button>

              <Button
                className={
                  viewTabsStatusOne == "testimonial5"
                    ? "defaultTab active testimonial_icon2"
                    : "defaultTab testimonial_icon2"
                }
                onClick={() => {
                  updateMasterState(setViewTabsStatusOne, "testimonial5");
                }}
              >
                <h5>
                  Mr. Baljit Singh
                  <span>- Bharat ree</span>
                </h5>
              </Button>

              <Button
                className={
                  viewTabsStatusOne == "testimonial6"
                    ? "defaultTab active testimonial_icon3"
                    : "defaultTab testimonial_icon3"
                }
                onClick={() => {
                  updateMasterState(setViewTabsStatusOne, "testimonial6");
                }}
              >
                <h5>
                  Mr. Bharampal Singh
                  <span>- Instant Beema</span>
                </h5>
              </Button>
            </Grid>
            <Grid sm={6} md={6} lg={7}>
              {viewTabsStatusOne == "testimonial1" ? (
                <>
                  <h4>“ Experience was great ”</h4>
                  <span className='star_icon1 rating'></span>
                  <p>
                    I have been a client of “ Evervent ” for many years now, and
                    I cannot recommend them enough. Their products and services
                    are top-notch and have exceeded my expectations every time.
                    The team is highly professional and always goes above and
                    beyond to ensure my satisfaction. They truly care about
                    their customers and it shows in their work. I have never had
                    any issues with “ Evervent ” and I have complete trust in
                    their abilities. I highly recommend them to anyone looking
                    for quality and reliability.
                  </p>
                </>
              ) : null}
              {viewTabsStatusOne == "testimonial2" ? (
                <>
                  <h4>“ Experience was good ”</h4>
                  <span className='star_icon2 rating'></span>
                  <p>
                    I have been a client of “ Evervent ” for many years now, and
                    I cannot recommend them enough. Their products and services
                    are top-notch and have exceeded my expectations every time.
                    The team is highly professional and always goes above and
                    beyond to ensure my satisfaction. They truly care about
                    their customers and it shows in their work. I have never had
                    any issues with “ Evervent ” and I have complete trust in
                    their abilities. I highly recommend them to anyone looking
                    for quality and reliability.
                  </p>
                </>
              ) : null}
              {viewTabsStatusOne == "testimonial3" ? (
                <>
                  <h4>“ Experience was great ”</h4>
                  <span className='star_icon3 rating'></span>
                  <p>
                    I have been a client of “ Evervent ” for many years now, and
                    I cannot recommend them enough. Their products and services
                    are top-notch and have exceeded my expectations every time.
                    The team is highly professional and always goes above and
                    beyond to ensure my satisfaction. They truly care about
                    their customers and it shows in their work. I have never had
                    any issues with “ Evervent ” and I have complete trust in
                    their abilities. I highly recommend them to anyone looking
                    for quality and reliability.
                  </p>
                </>
              ) : null}
              {viewTabsStatusOne == "testimonial4" ? (
                <>
                  <h4>“ Experience was good ”</h4>
                  <span className='star_icon4 rating'></span>
                  <p>
                    I have been a client of “ Evervent ” for many years now, and
                    I cannot recommend them enough. Their products and services
                    are top-notch and have exceeded my expectations every time.
                    The team is highly professional and always goes above and
                    beyond to ensure my satisfaction. They truly care about
                    their customers and it shows in their work. I have never had
                    any issues with “ Evervent ” and I have complete trust in
                    their abilities. I highly recommend them to anyone looking
                    for quality and reliability.
                  </p>
                </>
              ) : null}
              {viewTabsStatusOne == "testimonial5" ? (
                <>
                  <h4>“ Experience was great ”</h4>
                  <span className='star_icon5 rating'></span>
                  <p>
                    I have been a client of “ Evervent ” for many years now, and
                    I cannot recommend them enough. Their products and services
                    are top-notch and have exceeded my expectations every time.
                    The team is highly professional and always goes above and
                    beyond to ensure my satisfaction. They truly care about
                    their customers and it shows in their work. I have never had
                    any issues with “ Evervent ” and I have complete trust in
                    their abilities. I highly recommend them to anyone looking
                    for quality and reliability.
                  </p>
                </>
              ) : null}
              {viewTabsStatusOne == "testimonial6" ? (
                <>
                  <h4>“ Experience was good ”</h4>
                  <span className='star_icon6 rating'></span>
                  <p>
                    I have been a client of “ Evervent ” for many years now, and
                    I cannot recommend them enough. Their products and services
                    are top-notch and have exceeded my expectations every time.
                    The team is highly professional and always goes above and
                    beyond to ensure my satisfaction. They truly care about
                    their customers and it shows in their work. I have never had
                    any issues with “ Evervent ” and I have complete trust in
                    their abilities. I highly recommend them to anyone looking
                    for quality and reliability.
                  </p>
                </>
              ) : null}
            </Grid>
          </Grid>
        </div>
        {/* get in touch section */}
        <Grid container spacing={3} className='row'>
          <Grid xs={12}>
            <div className='getin_touch'>
              <Grid container spacing={3}>
                <Grid xs={12}>
                  <h5 className='heading'>
                    {fetchedData?.getin.label.split(":")[0]}{" "}
                    <span>{fetchedData?.getin.label.split(":")[1]}</span>
                  </h5>
                  <p className='heading_content'>
                    {fetchedData?.getin.description}
                  </p>
                </Grid>
                <Grid sm={12} md={4} lg={6} sx={{ alignSelf: "center" }}>
                  <div className='getin_touch_inner'>
                    <img
                      src={`http://localhost:1337${fetchedData?.getin.img.data.attributes.url}`}
                      alt=''
                      height='401'
                    ></img>
                  </div>
                </Grid>
                <Grid sm={12} md={8} lg={6}>
                  <div className='formSection'>
                    <Grid container spacing={3}>
                      <Grid xs={12} className='mb-4'>
                        <RKTextField
                          class_name='inputField'
                          title={"Name"}
                          value={quoteFields.name.value}
                          attrName={[
                            "name",
                            "value",
                            quoteFields,
                            setQuoteFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={quoteFields.name.warning}
                        />
                      </Grid>
                      <Grid xs={12} className='mb-4'>
                        <RKTextField
                          class_name='inputField'
                          title={"Email"}
                          value={quoteFields.email.value}
                          attrName={[
                            "email",
                            "value",
                            quoteFields,
                            setQuoteFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={quoteFields.email.warning}
                        />
                      </Grid>
                      <Grid xs={12} className='mb-4'>
                        <RKTextField
                          class_name='inputField'
                          title={"Phone Number"}
                          value={quoteFields.mobile.value}
                          attrName={[
                            "number",
                            "value",
                            quoteFields,
                            setQuoteFields,
                          ]}
                          value_update={fieldsUpdateState}
                          warn_status={quoteFields.mobile.warning}
                        />
                      </Grid>
                      <Grid xs={12} textAlign='center'>
                        <Button
                          variant='contained'
                          className='blueBtn'
                          component='label'
                        >
                          {fetchedData?.inpt.submit.label}
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

export default Homepage;
