import classes from "./ComponentProfile.module.scss";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

function ComponentProfile({ data }) {
  const { title, copy, image, imagePosition } = data;
  return (
    <section className={classes.oProfileBlock}>
      <div className={`${classes.oContainer} container`}>
        <div
          className={`${classes.oContentRow} ${
            classes[`image${imagePosition}`]
          } row`}
        >
          <figure
            className={`${classes.mImage} col-12 col-md-6`}
            style={{
              backgroundImage: `url(http:${image.fields.file.url})`,
            }}
          >
            {/* <Image
              className={`${classes.aImage} a-responsive-image`}
              src={image.fields.file.url}
              alt={`title`}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              aria-hidden="true"
              layout="responsive"
              priority="true"
            /> */}
          </figure>
          {/* <ReactMarkdown
            className={`${classes.mCopy} col-12 col-md-6 a-fnt-18f`}
          >
            {copy}
          </ReactMarkdown> */}
          <div
            className={`${classes.mCopy} col-12 col-md-6 a-fnt-18f`}
            dangerouslySetInnerHTML={{ __html: copy }}
          />
        </div>
      </div>
    </section>
  );
}

export default ComponentProfile;
