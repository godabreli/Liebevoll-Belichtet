const sizeOf = require("image-size");
const fs = require("node:fs");

const createGaleryData = function () {
  const imageNames = fs.readdirSync(
    "../client/public/Pictures/WeddingGaleryImages"
  );
  const imageData = imageNames.map((pic) => {
    const dimensions = sizeOf(
      `../client/public/Pictures/WeddingGaleryImages/${pic}`
    );
    return {
      imageName: pic,
      width: dimensions.width,
      height: dimensions.height,
    };
  });

  return imageData;
};

module.exports = { createGaleryData };
