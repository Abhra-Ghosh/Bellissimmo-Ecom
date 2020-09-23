const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const description = require("./description.json");
var MongoClient = require("mongodb").MongoClient;
var uri =
  "mongodb+srv://sagnik:ecommerce@cluster-1.tdvmo.mongodb.net/flipkart?retryWrites=true&w=majority";

const nightmare = Nightmare({ show: false });
const url =
  "https://www.flipkart.com/search?sid=r18&otracker=CLP_Filters&p%5B%5D=facets.brand%255B%255D%3DTitan&p%5B%5D=facets.brand%255B%255D%3DTommy%2BHilfiger&p%5B%5D=facets.brand%255B%255D%3DTissot&p%5B%5D=facets.brand%255B%255D%3DMaxima&p%5B%5D=facets.brand%255B%255D%3DSonata&p%5B%5D=facets.brand%255B%255D%3DCasio&p%5B%5D=facets.brand%255B%255D%3DTommy%2Bhilfiger&p%5B%5D=facets.ideal_for%255B%255D%3DWomen";

const shoeBrand = [];
const shoeName = [];
const shoePrice = [];
const urlShoe = [];
const shoeImg = [];
const shoeDesc = [];
const b = [];
let Final = [];
i = -1;

nightmare
  .goto(url)
  .wait(2000) //waiting for site to finish exe of js
  .evaluate(() => document.querySelector("body").innerHTML) //evaluating
  .end()
  .then((response) => {
    getData(response);
  })
  .catch((err) => {
    console.log(err);
  });
let getData = (html) => {
  const $ = cheerio.load(html);

  //BRAND
  var iD = 240;
  $("._2B_pmu").each((index, element) => {
    const Brand = $(element).text();
    iD++;

    shoeBrand[index] = { iD, Category: "Shoes", Brand, Gender: "M" };
  });
  // console.log(shoeBrand)

  //PRODUCT NAME
  var iD = 240;

  $("._2mylT6").each((index, element) => {
    const Name = $(element).text();
    iD++;

    shoeName[index] = { iD,Category: "Watches", Gender: "F", Name };
  });
  // console.log(shoeName)


  //PRICE
  var iD = 240;

  $("._1vC4OE").each((index, element) => {
    const Price = $(element).text();

    iD++;
    shoePrice[index] = { iD, Price };
  });
  // console.log(shoePrice)


  //IMG SRC
  var iD = 240;

  $("._3JlYXy").each((index, element) => {
    const src = $(element).find("img").attr("src");
    iD++;

    shoeImg[index] = { iD, src };
    return shoeImg;
  });
  // console.log(shoeImg)

  //PAGE LINK

  var iD = 240;

  $("a._3dqZjq").each((index, element) => {
    const pageUrl = $(element).attr("href");
    iD++;
    const siteLink = "https://www.flipkart.com" + pageUrl;

    urlShoe[index] = { iD, siteLink };
  });
  // console.log(urlShoe)


  setInterval(() => {
    {
      i++;
      if (i < 40) {
        Objurl = urlShoe[i].siteLink;
        axios.get(Objurl).then((res) => {
          const $ = cheerio.load(res.data);
          shoeDesc.push({ desc: $("._3_-w3z").text() });
        });
      }
    }
  }, 1000);

  //JOINING ARRAYS
  setTimeout(() => {
    let arr1 = shoeName.map((item, i) =>
      Object.assign({}, item, shoePrice[i])
    );
    let arr2 = arr1.map((item, i) => Object.assign({}, item, shoeImg[i]));
    // let arr3 = arr2.map((item, i) => Object.assign({}, item, urlShoe[i]));

    let arr4 = arr2.map((item, i) => Object.assign({}, item, shoeDesc[i]));

    Final = arr4.map((item, i) => Object.assign({}, item, urlShoe[i]));
    console.log("LOGGING FINAL")

    console.log(Final);

    MongoClient.connect(uri, (err, client) => {
      let db = client.db("flipkart");
      db.collection("womenW").deleteMany();
      console.log(
        "--------------------DATA REFRESHED---------------\n.\n.\n.\n."
      );
      db.collection("womenW").insertMany(Final, (err, result) => {
        console.log("--------------------DATA INSERTED----------------");
        client.close();
      });
    });

    return Final;
  }, 50000);
};
