import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import devices from "puppeteer/DeviceDescriptors";

const tablet = devices["iPad landscape"];
const customizePage = page => page.emulate(tablet);
const beforeScreenshot = page => page.emulate(tablet);
const getMatchOptions = () => ({
  failureThreshold: 0.2,
  failureThresholdType: "percent"
});

initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({
    storybookUrl: "http://localhost:9009",
    customizePage,
    beforeScreenshot,
    getMatchOptions
  })
});
