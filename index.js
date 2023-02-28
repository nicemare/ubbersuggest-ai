const puppeteer = require('puppeteer')
const fs = require('fs');
//const randomName = require('random-name');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['defaultViewport: 1400,900','--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
  });
  const pageList = await browser.pages();   
  const context = await browser.createIncognitoBrowserContext();  
  const page = await context.newPage();

  const url = `https://app.neilpatel.com/en/labs/ai_writer`;
  //await page.emulate(iPhoneX);
  await page.goto(`${url}`,{waitUntil : 'networkidle2'});
 
  await page.waitForSelector('#tippy-tooltip-1 > div > div.tippy-tooltip-content > div > div.sc-eKYRpg.hCEyrj > div',{waitUntil: 'networkidle2'})  
  await page.click('#tippy-tooltip-1 > div > div.tippy-tooltip-content > div > div.sc-eKYRpg.hCEyrj > div')
  await page.waitForSelector('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-ddtzlP.bSgJRC > form > button', {waitUntil: 'networkidle2'})

  const input = fs.readFileSync('input.txt', 'utf8').trim(); // read input from file and trim any whitespace
  await page.type('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-ddtzlP.bSgJRC > form > div > input', input, {delay:50});

  await page.waitForSelector('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-ddtzlP.bSgJRC > form > button', {waitUntil: 'networkidle2'});
  await page.click('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-ddtzlP.bSgJRC > form > button');
  await page.waitForSelector('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(5)', {waitUntil: 'networkidle2'})
  await page.click('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(5)',{delay:50})
  await page.click('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-jRGlIe.jcNTeq > button.sc-la-Dzhv.bhxHSf',{delay:100})
  await page.waitForSelector('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(5)',{waitUntil: 'networkidle2'})
  await page.click('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(5)',{delay:100})
  await page.waitForSelector('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-jRGlIe.jcNTeq > button.sc-la-Dzhv.bhxHSf > div',{waitUntil: 'networkidle2'})
  await page.click('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-jRGlIe.jcNTeq > button.sc-la-Dzhv.bhxHSf > div',{delay:50})
  await page.waitForSelector('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(4) > label > span.sc-fKTzBO.gCJyNv.uber-checkmark',{waitUntil: 'networkidle2'})
  await page.click('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(4) > label > span.sc-fKTzBO.gCJyNv.uber-checkmark',{delay:50})
  await page.waitForSelector('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-jRGlIe.jcNTeq > button.sc-la-Dzhv.bhxHSf > div',{waitUntil: 'networkidle2'})
  await page.click('#root > div.sc-bMHunV.izwWPr > div.sc-byhIDU.kUuZQS > div.sc-QbyCT.kISech > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-jRGlIe.jcNTeq > button.sc-la-Dzhv.bhxHSf > div',{delay:50})
})();
