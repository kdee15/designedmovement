import classes from "./SubcomponentPreivewCard.module.scss";
import React from "react";
import ReactMarkdown from "react-markdown";

function SubcomponentPreivewCard({ serviceItem }) {
  return (
    <article className={`${classes.oCard} col-12 col-md-6`}>
      <div
        className={classes.mCardBG}
        style={{
          backgroundImage: `url(http:${serviceItem.fields.image.fields.file.url})`,
        }}
      ></div>
      <div className={classes.mCardBody}>
        <h2>{serviceItem.fields.title}</h2>
        <ReactMarkdown className={`${classes.aText} a-fnt-18f`}>
          {serviceItem.fields.copy}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default SubcomponentPreivewCard;
