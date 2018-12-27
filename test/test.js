const React = require('react');
const puppeteer = require('puppeteer');
const Enzyme = require('enzyme');
const shallow = require('enzyme');
const mount = require('enzyme');

const GalleryHalf = require('../client/src/components/GalleryHalf');

const pageUrl = 'http://localhost:9999';

let page;
let browser;
const width = 1280;
const height = 720;

Enzyme.configure({ adapter: new Adapter() });

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
    // await page.waitFor(15000);
    await page.waitForNavigation(); // The promise resolves after navigation has finished
    const title = await page.title();
    // const title = await page.$eval('bozz, e => e.innerHtml);
    expect(title).toEqual('Image Gallery');

    // await bodyHandle.dispose();

  });  // end test

  test('gallaryHalf is correct', async () => {
    const h1 = '.bnb-title';
    await page.waitForNavigation(); // The promise resolves after navigation has finished
    const title = await page.$eval(h1, e => e.textContent);
    expect(title).toEqual('Best BnB Gallery');

    // await bodyHandle.dispose();

  }); // test

  test('check for gallery components', async () => {
    test('renders', () => {
      const wrapper = shallow(<GalleryHalf);

      expect(wrapper.exist()).toBe(true);
    });

    // const galleryHalf = shallow(GalleryHalf);
    // const wrapper = mount(GalleryHalf.toString());
    // expect(galleryHalf.find('img').prop('src')).toBe(typeof 'string')

    E




    
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