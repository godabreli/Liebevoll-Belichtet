const sizeOf = require("image-size");
const fs = require("node:fs");

const imageNames = fs.readdirSync("./public/Pictures/WeddingGaleryImages");
const imageData = [];

console.log(imageNames);

for (let i = 0; i < imageNames.length - 1; i++) {
  const dimensions = sizeOf(
    `./public/Pictures/WeddingGaleryImages/${imageNames[i]}`
  );
  imageData.push({
    imageName: imageNames[i],
    width: dimensions.width,
    height: dimensions.height,
  });
}
fs.writeFileSync(
  "MyWeddingGaleryImages.json",
  JSON.stringify(imageData),
  "Utf8"
);
