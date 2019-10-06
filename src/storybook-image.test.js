import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

const beforeScreenshot = page =>
  page.setViewport({
    width: 800,
    height: 800,
    deviceScaleFactor: 2
  });

const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: "percent"
});

initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({
    storybookUrl: "http://localhost:9009",
    beforeScreenshot,
    getMatchOptions
  })
});
