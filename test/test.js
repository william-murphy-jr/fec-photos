const React = require('react');
const puppeteer = require('puppeteer');
const Enzyme = require('enzyme');
const shallow = require('enzyme');
const mount = require('enzyme');

// const GalleryHalf = require('../client/src/components/GalleryHalf');

const pageUrl = 'http://localhost:9999';

let page;
let browser;
const width = 1280;
const height = 720;

// Enzyme.configure({ adapter: new Adapter() });

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();

  await page.setViewport({
    width,
    height
  });
});

afterAll(() => {
  browser.close();
});

describe('Galley Component Tests', () => {

  beforeEach(() => {
     page.goto(pageUrl, {
       waitUntil: 'networkidle2'
     });
  });

  test('assert that the page gallery title is correct', async () => {
    // await page.waitFor(15000);
    await page.waitForNavigation(); // The promise resolves after navigation has finished
    const title = await page.title();
    expect(title).toEqual('Image Gallery');

  });  // end test

  test('gallaryHalf component at position 0 exits', async () => {
    const galleryHalf = '.half';

    await page.waitForNavigation();
    const frameExist = await page.$eval(galleryHalf, el => {
      return el ? true : false;
    });
    expect(frameExist).toBe(true);
  });

  test('gallaryQuarter component at position 1 exits', async () => {
    const galleryQtr = '.pos1';

    await page.waitForNavigation();
    const frameExist = await page.$eval(galleryQtr, el => {
      return el ? true : false;
    });
    expect(frameExist).toBe(true);
  });

   test('gallaryQuarter component at position 2 exits', async () => {
     const galleryQtr = '.pos2';

     await page.waitForNavigation();
     const frameExist = await page.$eval(galleryQtr, el => {
       return el ? true : false;
     });
     expect(frameExist).toBe(true);
   });

    test('gallaryQuarter component at position 3 exits', async () => {
      const galleryQtr = '.pos3';

      await page.waitForNavigation();
      const frameExist = await page.$eval(galleryQtr, el => {
        return el ? true : false;
      });
      expect(frameExist).toBe(true);
    });

    test('gallaryQuarter component at position 4 exits', async () => {
      const galleryQtr = '.pos4';

      await page.waitForNavigation();
      const frameExist = await page.$eval(galleryQtr, el => {
        return el ? true : false;
      });
      expect(frameExist).toBe(true);
    });

  // test('check for gallery components', async () => {
  //   test('renders', () => {
  //     const wrapper = shallow(<GalleryHalf />);

  //     expect(wrapper.exist()).toBe(true);
  //   });

  //   // const galleryHalf = shallow(GalleryHalf);
  //   // const wrapper = mount(GalleryHalf.toString());
  //   // expect(galleryHalf.find('img').prop('src')).toBe(typeof 'string')

  // });

});  // describe block

// describe("<GalleryHalf />", () => {
//   it("renders an image", () => {
//     const galleryHalf = shallow( GalleryHalf).JSON.stringigy();

//     {/* expect(GalleryHalf.find("img").prop("src")).toEqual("blahh"); */}
//     expect(galleryHalf.find("img").prop("src"));
//   });
// });