import React from "react";
import me from "../compoent/me.jpg";

export default function Maincontain() {
  const detailcard = [
    {
      year: "2020-2023",
      degree: "Graduation",
      collage: "St.Xavier's Collage Ranchi",
    },
    {
      year: "2018-2020",
      degree: "Intermediate",
      collage: "Sant Nandlal Smriti Vidya Mandir",
    },
    {
      year: "2016-2018",
      degree: "10th",
      collage: "Sant Nandlal Smriti Vidya Mandir",
    },
  ];
  const detailcard1 = [
    {
      year: "07/2022-Present",
      degree: "Intern Full Stack Web Developer",
      collage: "Refresh Infratech PVT.LTD",
    },
    {
      year: "2018-2020",
      degree: "Intern",
      collage: "DigisolTech",
    },
 
  ];
  const rendercard = (card, index) => {
    return (
      <>
        <div className="row1" key={index}>
          <div className="img_container">
            <img src={me} />
          </div>
          <div className="edu_info">
            <div className="year_contian">
              <h2>{card.year}</h2>
            </div>
            <div className="role">{card.degree}</div>
            <span>{card.collage}</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section className="about_contain">
        <h1>My Education</h1>
        {detailcard.map(rendercard)}
      </section>
      <section className="about_contain">
        <h1>My Expericence</h1>
        {detailcard1.map(rendercard)}
      </section>
    </>
  );
}
