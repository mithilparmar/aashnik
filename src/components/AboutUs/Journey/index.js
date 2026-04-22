import React from "react";
import "./index.scss";

const JourneySummary = ({ year, title, contents, italic}) => {

  
  return (
    <>

      <li className='event' data-date={year}>
        <span className='heading'>{title}</span>
        <br />
        <br />
        <div className='contentContainer'>
          {contents.map((content, index) => (
            <p key={index} className='content'>
              {content}
            </p>
          ))}
        </div>
        <div className='contentContainer'>
          {italic.map((content, index) => (
            <p key={index} className='content_italic'>
              {content}
            </p>
          ))}
        </div>
      </li>

    </>
  );
};


export default JourneySummary;
