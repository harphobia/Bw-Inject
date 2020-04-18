const puppeteer = require("puppeteer");
const moment = require("moment");

(async () => {
  let waktu = moment().format("LTS");
  console.log(`[${waktu}] INTRA INJECT STARTED`);
  const options = { waitUntil: "networkidle2" };
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--disable-notifications", "--disable-features=site-per-process"],
  });
  const [page] = await browser.pages();

  await page.goto("https://get-bug-cloudflare.lvddong.repl.run/", options);
  const terminal =
    "#target > div > div.xterm-screen > canvas.xterm-cursor-layer";

  while (true) {
    let times = moment().format("LTS");
    await page.waitFor(15000);
    await page.waitForSelector(terminal);
    await page.type(terminal, "121b39e6-89c5-4485-a4cf-ec14555db0b7");
    await page.keyboard.press("Enter");
    await page.type(terminal, "3");
    await page.keyboard.press("Enter");
    await page.waitFor(8000);
    console.log(`[${times}] Sukses menambah 2GB..`);
    console.log(`[${times}] Reload page...`);
    await page.reload({ options });
  }
})();
