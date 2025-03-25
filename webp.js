import imagemin from "imagemin";
import webp from "imagemin-webp";
import gif2webp from "imagemin-gif2webp";

const args = process.argv;

const inputArgIndex = args.findIndex((value) => value === '-i');
const outputArgIndex = args.findIndex((value) => value === '-o');

const inputArg = inputArgIndex !== -1 ? args[inputArgIndex + 1] : undefined;
const outputArg = outputArgIndex !== -1 ? args[outputArgIndex + 1] : undefined;

const outputFolder = outputArg ?? "./src/assets/images/";
const inputFolder = inputArg ?? "src/assets/images/";

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
