import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header/header.component";
import CarouselComponent from "../../components/carousel/carousel.component";
import LayananComponent from "../../components/layanan/layanan.components";
import CardService from "../../components/card-services/card-services.component";
import PortofolioComponent from "../../components/portofolio/portofolio.component";
import photos from "../../data/photos.dummy";
import service from "../../data/service.dummy";
import portofolio from "../../data/portofolio.dummy";
import { Row } from "react-bootstrap";
import AboutComponent from "../../components/about-us/about-us.component";
import AboutData from "../../data/about.dummy";
import { fetchDataCaraousel } from "../../services/caraousel";
import { fetchDataLayanan } from "../../services/layanan";
import { fetchDataPortofolio } from "../../services/portofolio";
import { fetchProfileCompany } from "../../services/company";

export const HomePage = () => {
  const URL_BASE = process.env.REACT_APP_API_URL;
  const [dataCaraousel, setDataCaraousel] = useState([]);
  const [dataLayanan, setDataLayanan] = useState([]);
  const [dataPortofolio, setDataPortofolio] = useState([]);
  const [dataCompany, setDataCompany] = useState([]);

  useEffect(() => {
    fetchDataCaraousel(`${URL_BASE}/caraousel/list?offset=0&limit=8`).then(
      (res) => {
        if (res.data.result.data.length === 0) {
          return setDataCaraousel(photos);
        }
        setDataCaraousel(res.data.result.data);
      }
    );

    fetchDataLayanan(`${URL_BASE}/pelayanan/list?offset=0&limit=8`).then(
      (res) => {
        if (res.data.result.data.length === 0) {
          return setDataLayanan(service);
        }
        setDataLayanan(res.data.result.data);
      }
    );

    fetchDataPortofolio(`${URL_BASE}/protofolio/list?offset=0&limit=8`).then(
      (res) => {
        if (res.data.result.data.length === 0) {
          return setDataPortofolio(portofolio);
        }
        setDataPortofolio(res.data.result.data);
      }
    );

    fetchProfileCompany(`${URL_BASE}/contact`).then((res) => {
        console.log(res.data);
      if (res.data.result === "undefined") {
        return setDataCompany(AboutData);
      }
      console.log(res.data.result);
      setDataCompany(res.data.result);
    });
  }, []);

  return (
    <div className="justify-content-md-center section-of-content">
      <HeaderComponent />
      <div className="w-75 h-50 mx-auto my-3">
        <CarouselComponent listData={dataCaraousel} />
      </div>
      <div className="w-75 h-10 mx-auto my-3">
        <LayananComponent text="Pelayanan Kami" />
        <Row>
          {dataLayanan.map((item, index) => (
            <CardService data={item} index={index} key={`service_${index}`} />
          ))}
        </Row>
      </div>
      <PortofolioComponent dataList={dataPortofolio} />
      <div className="w-75 mx-auto">
        <AboutComponent aboutCompany={dataCompany} />
      </div>
    </div>
  );
};
