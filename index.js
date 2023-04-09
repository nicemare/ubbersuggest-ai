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
  console.log('+++++++++++++++++++++++++++++++++++')
  console.log('+ Coded by allif +')  
  console.log('https://github.com/nicemare +')
  console.log('+++++++++++++++++++++++++++++++++++')
  console.log('+1.+ Opening URL ..')
  const url = `https://app.neilpatel.com/en/labs/ai_writer`;
  //await page.emulate(iPhoneX);
  await page.goto(`${url}`,{waitUntil : 'networkidle2'});
  console.log('+2.+ Success') 
  await page.waitForSelector('#tippy-tooltip-1 > div > div.tippy-tooltip-content > div > div.sc-eKYRpg.hCEyrj > div',{waitUntil: 'networkidle2'})  
  await page.click('#tippy-tooltip-1 > div > div.tippy-tooltip-content > div > div.sc-eKYRpg.hCEyrj > div')
  console.log('+3.+ Closing Pop')
  await page.waitForSelector('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-kBaCpg.dmShbc > form > div > input', {waitUntil: 'networkidle2'})
  const input = fs.readFileSync('input.txt', 'utf8').trim(); // read input from file and trim any whitespace
  console.log('+4.+ Input Keyword from txt  ')
  await page.type('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-kBaCpg.dmShbc > form > div > input', input, {delay:5});
  await page.waitForSelector('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-kBaCpg.dmShbc > form > button', {waitUntil: 'networkidle2'})
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_3G > div > div.sc-kBaCpg.dmShbc > form > button', {delay:16})
// click content
  console.log('+5.+ Solving Capcha .. ')
  console.log('+6.+ Submitting Keyword ')
  await page.waitForSelector('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(7) > div.sc-cQMCMF.gSquui > label', {waitUntil: 'networkidle2'})
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(7) > div.sc-iJCRLp.fbdpVH', {delay:15})
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-dkdgYO.fWVIAn > button.sc-fudrna.cLMEtZ', {delay:15})
  await page.waitForSelector('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(6) > div.sc-iJCRLp.fbdpVH', {waitUntil:'networkidle2'})
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(6) > div.sc-iJCRLp.fbdpVH', {delay:15})
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-dkdgYO.fWVIAn > button.sc-fudrna.cLMEtZ > div', {delay:25})
  // checklist
  await page.waitForSelector('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(4) > div.sc-iJCRLp.kYGahX')
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(4) > div.sc-iJCRLp.kYGahX')
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(5) > div.sc-iJCRLp.kYGahX')
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(6)')
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(7) > div.sc-iJCRLp.kYGahX')
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div:nth-child(8) > div.sc-iJCRLp.kYGahX')
  await page.click('#root > div.sc-ddtzlP.eQezsf > div.sc-gVhppA.iLnozd > div.sc-bDaekV.jEEGRS > div > div:nth-child(1) > div > div.rsw_2f.rsw_1z.rsw_1M.rsw_3G > div > div.sc-dkdgYO.fWVIAn > button.sc-fudrna.cLMEtZ > div', {delay:30})
  console.log('+7.+ Success, article generated !!!')
  console.log('+++++++++++++++++++++++++++++++++++')
})();
