// const React = require('react');
const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:9999';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  // console.log('page: ', page);

  await page.setViewport({
    width,
    height
  });
});
afterAll(() => {
  // browser.close();
});

afterAll(() => {
  browser.close();
});


describe('title on page', () => {

  beforeEach(() => {
     page.goto(pageUrl, {
       waitUntil: 'networkidle2'
     });
  });

  test('assert that the gallery <title> is correct', async () => {
    const title1 = 'Image Gallery';
    // const title = await page.evaluate(h1.textContent);
    page.waitFor(15000);
    await page.waitForNavigation();
    // const title = 'Best BnB Gallery';
    // const title = await page.$eval(h1, e => e.textContent);
    const title = await page.title();
    // const title = await page.$eval('bozz, e => e.innerHtml);
    expect(title).toEqual('Image Gallery');

    // await bodyHandle.dispose();

  });  // end test

  test('gallaryHalf is correct', async () => {
    const h1 = '.bnb-title';
    // const title1 = 'Image Gallery';
    // const title = await page.evaluate(h1.textContent);
    // await //#endregionpage.waitFor(15000);
    // await page.waitForNavigation();
    page.waitForNavigation(); // The promise resolves after navigation has finished
    // const title = 'Best BnB Gallery';
    const title = await page.$eval(h1, e => e.textContent);
    // const title = await page.$eval('.bnb-title', e => e.outerHtml);
    // const title = 'Best BnB Gallery';
    expect(title).toEqual('Best BnB Gallery');

    // await bodyHandle.dispose();

  });

});
//   beforeEach(() => {
//     page.goto(pageUrl, {waitUntil: 'networkidle2'});
//   });

//   test('assert that <title> is correct', async () => {
//     const title = await page.title();

//     expect(title).toBe(
//       'Image Gallery'
//     );
//     // Insert more test starting here

//   });

//   // test('has primary image', () => {
//   //   let div = '.col-6 .half img'
//   // });
  
// });

// describe("<GalleryHalf />", () => {
//   it("renders an image", () => {
//     const galleryHalf = shallow( GalleryHalf).JSON.stringigy();

//     {/* expect(GalleryHalf.find("img").prop("src")).toEqual("blahh"); */}
//     expect(galleryHalf.find("img").prop("src"));
//   });
// });