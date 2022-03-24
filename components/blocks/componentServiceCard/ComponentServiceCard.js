import { createClient } from "contentful";
import classes from "./ComponentServiceCard.module.scss";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

function ComponentServiceCard({ servicesList }) {
  const Services = servicesList.items;
  // const { description, image, logo, theme } = servicesList.items;
  console.log("servicesList", servicesList);
  return (
    <div className={`${classes.oServicesListBlock} container`}>
      <div className={`${classes.oRow} row`}>
        {Services.sort(function (a, b) {
          return new Date(b.sys.createdAt) - new Date(a.sys.createdAt);
        }).map((Service) => (
          <article
            className={`${classes.oCard} col-12 col-md-6`}
            key={Service.sys.id}
            style={{
              backgroundImage: `url(http:${Service.fields.image.fields.file.url})`,
            }}
          >
            <div className={`container`}>
              <div className={`${classes.oContentRow} row`}>
                <div
                  className={`${classes.oContentBlock} col-12 col-md-6 offset-md-6 col-12 col-lg-7 offset-lg-5`}
                >
                  <h2>{Service.fields.title}</h2>
                  <ReactMarkdown className={`${classes.aText} a-fnt-18f`}>
                    {Service.fields.copy}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ComponentServiceCard;
