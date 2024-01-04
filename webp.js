import imagemin from "imagemin";
import webp from "imagemin-webp";
import gif2webp from "imagemin-gif2webp";

const outputFolder = "./public/assets/images/";
const inputFolder = "public/assets/images/";

const produceWebP = async () => {
  await imagemin([inputFolder + "*.png"], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true,
      }),
    ],
  });
  console.log("PNGs processed");
  await imagemin([inputFolder + "*.{jpg,jpeg}"], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65,
      }),
    ],
  });
  console.log("JPGs and JPEGs processed");
  await imagemin([inputFolder + "*.gif"], {
    destination: outputFolder,
    plugins: [gif2webp({ lossy: true, minimize: true })],
  });
  console.log("Gifs processed");
};
produceWebP();
