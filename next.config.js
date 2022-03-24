const contentful = require("contentful");

module.exports = {
  images: {
    loader: "imgix",
    path: "https://designedmovement.imgix.net",
    domains: ["images.ctfassets.net"],
  },
};
