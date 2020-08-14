import React from "react";

import "../style/sections.css";

function generateSectionHighlighted(data) {
  return (
    <div className="highlighted sections">{generateInnerSection(data)}</div>
  );
}

function generateSection(data) {
  return <div className="sections">{generateInnerSection(data)}</div>;
}

function generateInnerSection(data) {
  return (
    <div>
      <h3>{data.title}</h3>
      <div>{data.description}</div>
    </div>
  );
}

function generateSections(props) {
  return props.data.map((section, index) => (
    <React.Fragment key={index}>
      {index % 2 === 0
        ? generateSectionHighlighted(section)
        : generateSection(section)}
    </React.Fragment>
  ));
}

export default generateSections;
