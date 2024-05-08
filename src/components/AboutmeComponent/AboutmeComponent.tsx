import React, { useRef } from "react";
import './AboutmeComponent.css';
import LanguageChart from "../LanguageChartComponent/LanguageChartComponent";
import Hobby from "../HobbyComponent/HobbyComponent";

import camping from '../../assets/CampingHobby.jpg';
import sports from '../../assets/SportsHobby.jpg';
import fishing from '../../assets/FishingHobby.jpg';

import { useTranslation } from 'react-i18next';


const Aboutme = () => {
  const { t } = useTranslation();

  const germanRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const italianRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const englischRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const frenchRef = useRef<HTMLDivElement>({} as HTMLDivElement);



  return (
    <div className="container ">
      <h2 className="margin-bottom-2 sc-navy">{t("aboutme.title")}</h2>
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-8 d-flex justify-content-between flex-column margin-bottom-2 margin-top-2">

          <LanguageChart length={50} language={"Deutsch"} color={"iris"} chartRef={germanRef} />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 margin-bottom-2 margin-top-2 sc-navy">
          <sdx-card>
            <div className="d-flex align-items-center margin-bottom-2">

              <h2 className="mb-2">
                {t("aboutme.cardTitle")}
              </h2>
            </div>
            <div className="d-flex align-items-center margin-bottom-2">
              <sdx-icon
                icon-name="icon-cake"
                size={2}
              ></sdx-icon>
              <p className="mb-0 margin-left-1">
                {t("aboutme.cardYears")}
              </p>
            </div>
            <div className="d-flex align-items-center margin-bottom-2">
              <sdx-icon
                icon-name="icon-map-pointer"
                size={2}
              ></sdx-icon>
              <p className="mb-0 margin-left-1">
                {t("aboutme.cardResidence")}
              </p>
            </div>
            <div className="d-flex align-items-center margin-bottom-2">
              <sdx-icon
                icon-name="icon-robot-happy"
                size={2}
              ></sdx-icon>
              <p className="mb-0 margin-left-1">
                {t("aboutme.cardHobbys")}

              </p>
            </div>
            <sdx-content-slider lg={1} xl={1} ul={1} sr-hint="My three slides">

              <Hobby img={camping} imgAlt={"Image of camping hobby"} title={`${t("aboutme.cardCampingTitle")}`} description={`${t("aboutme.cardCampingDescription")}`} />


              <Hobby img={sports} imgAlt={"Image of sports hobby"} title={`${t("aboutme.cardSportsTitle")}`} description={`${t("aboutme.cardSportsDescription")}`} />


              <Hobby img={fishing} imgAlt={"Image of fishing hobby"} title={`${t("aboutme.cardFishingTitle")}`} description={`${t("aboutme.cardFishingDescription")}`} />

            </sdx-content-slider>
          </sdx-card>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
