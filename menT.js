const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
var MongoClient = require("mongodb").MongoClient;
const description = require("./description.json");

var uri =
  "mongodb+srv://sagnik:ecommerce@cluster-1.tdvmo.mongodb.net/flipkart?retryWrites=true&w=majority";

const nightmare = Nightmare({ show: false });
const url =
  "https://www.flipkart.com/clothing-and-accessories/topwear/tshirt/men-tshirt/pr?sid=clo%2Cash%2Cank%2Cedy&otracker=categorytree&otracker=nmenu_sub_Men_0_T-Shirts&p%5B%5D=facets.brand%255B%255D%3DADIDAS&p%5B%5D=facets.brand%255B%255D%3DREEBOK&p%5B%5D=facets.brand%255B%255D%3DPuma";

const TBrand = [];
const TName = [];
const TPrice = [];
const urlT = [];
const TImg = [];
const TDesc = [];
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
  var iD = 160;
  $("._2B_pmu").each((index, element) => {
    const Brand = $(element).text();
    iD++;

    TBrand[index] = { iD, Category: "Tees", Brand, Gender: "M" };
  });

  //PRODUCT NAME
  var iD = 160;

  $("._2mylT6").each((index, element) => {
    const Name = $(element).text();
    iD++;

    TName[index] = { iD, Name };
  });

  //PRICE
  var iD = 160;

  $("._1vC4OE").each((index, element) => {
    const Price = $(element).text();

    iD++;
    TPrice[index] = { iD, Price };
  });

  //IMG SRC
  var iD = 160;

  $("._3JlYXy").each((index, element) => {
    const src = $(element).find("img").attr("src");
    iD++;

    TImg[index] = { iD, src };
    return TImg;
  });
  //PAGE LINK

  var iD = 160;

  $("a._3dqZjq").each((index, element) => {
    const pageUrl = $(element).attr("href");
    iD++;
    const siteLink = "https://www.flipkart.com" + pageUrl;

    urlT[index] = { iD, siteLink };
  });

  setInterval(() => {
    {
      i++;
      if (i < 40) {
        Objurl = urlT[i].siteLink;
        axios.get(Objurl).then((res) => {
          const $ = cheerio.load(res.data);
          TDesc.push({ desc: $("._3_-w3z").text() });
        });
      }
    }
  }, 1000);

  //JOINING ARRAYS
  setTimeout(() => {
    let arr1 = TBrand.map((item, i) =>
      Object.assign({}, item, TPrice[i])
    );
    let arr2 = arr1.map((item, i) => Object.assign({}, item, TName[i]));
    let arr3 = arr2.map((item, i) => Object.assign({}, item, urlT[i]));

    let arr4 = arr3.map((item, i) => Object.assign({}, item, TDesc[i]));

    Final = arr4.map((item, i) => Object.assign({}, item, TImg[i]));

    console.log(Final);

    MongoClient.connect(uri, (err, client) => {
      let db = client.db("flipkart");
      db.collection("menT").deleteMany();
      console.log(
        "--------------------DATA REFRESHED---------------\n.\n.\n.\n."
      );
      db.collection("menT").insertMany(Final, (err, result) => {
        console.log("--------------------DATA INSERTED---------------");
        client.close();
      });
    });

    return Final;
  }, 50000);
};
