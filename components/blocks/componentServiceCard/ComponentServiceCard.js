import classes from "./ComponentServiceCard.module.scss";
import React from "react";
import ReactMarkdown from "react-markdown";

function ComponentServiceCard({ servicesList }) {
  const Services = servicesList.items;
  return (
    <div className={`${classes.oServicesListBlock} container`}>
      <div className={`${classes.oRow} row`}>
        {Services.sort(function (a, b) {
          return new Date(a.fields.order) - new Date(b.fields.order);
        }).map((Service) => (
          <article
            className={`${classes.oCard} col-12 col-md-6`}
            key={Service.sys.id}
          >
            <div
              className={classes.mCardBG}
              style={{
                backgroundImage: `url(http:${Service.fields.image.fields.file.url})`,
              }}
            ></div>
            <div className={classes.mCardBody}>
              <h2>{Service.fields.title}</h2>
              <ReactMarkdown className={`${classes.aText} a-fnt-18f`}>
                {Service.fields.copy}
              </ReactMarkdown>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ComponentServiceCard;
