const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const description = require("./description.json");
var MongoClient = require("mongodb").MongoClient;
var uri =
  "mongodb+srv://sagnik:ecommerce@cluster-1.tdvmo.mongodb.net/flipkart?retryWrites=true&w=majority";

const nightmare = Nightmare({ show: true });
const url =
  "https://www.flipkart.com/watches/fossil~brand/pr?sid=r18&otracker=nmenu_sub_Men_0_Fossil";


const watchName = [];
const watchPrice = [];
const urlWatch= [];
const watchImg = [];
const watchDesc = [];

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


  //PRODUCT NAME
  var iD = 280;

  $("._2mylT6").each((index, element) => {
    const Name = $(element).text();
    iD++;

    watchName[index] = { iD,Brand:"Fossil",Gender:"M", Name };
  });
  // console.log(watchName)

  //PRICE
  var iD = 280;

  $("._1vC4OE").each((index, element) => {
    const Price = $(element).text();

    iD++;
    watchPrice[index] = { iD, Price };
  });
  // console.log(watchPrice)


  //IMG SRC
  var iD = 280;

  $("._3JlYXy").each((index, element) => {
    const src = $(element).find("img").attr("src");
    iD++;

    watchImg[index] = { iD, src };
 
  });
  // console.log(watchImg)
  //PAGE LINK

  var iD = 280;

  $("a._3dqZjq").each((index, element) => {
    const pageUrl = $(element).attr("href");
    iD++;
    const siteLink = "https://www.flipkart.com" + pageUrl;

    urlWatch[index] = { iD, siteLink };
  });
  // console.log(urlWatch)


  setInterval(() => {
    {
      i++;
      if (i < 40) {
        Objurl = urlWatch[i].siteLink;
        axios.get(Objurl).then((res) => {
          const $ = cheerio.load(res.data);
          watchDesc.push({ desc: $("._3_-w3z").find('p').text() });
        });
      }
    }
  }, 1000);

  //JOINING ARRAYS
  setTimeout(() => {
    let arr1 = watchName.map((item, i) =>
      Object.assign({}, item, watchName[i])
    );
    let arr2 = arr1.map((item, i) => Object.assign({}, item, watchPrice[i]));
    let arr3 = arr2.map((item, i) => Object.assign({}, item, watchImg[i]));
    let arr4 = arr3.map((item, i) => Object.assign({}, item, watchDesc[i]));


    Final  = arr4.map((item, i) => Object.assign({}, item, urlWatch[i]));

   

    console.log(Final);

    MongoClient.connect(uri, (err, client) => {
      let db = client.db("flipkart");
      db.collection("fossilWatches").deleteMany();
      console.log(
        "--------------------DATA REFRESHED---------------\n.\n.\n.\n."
      );
      db.collection("fossilWatches").insertMany(Final, (err, result) => {
        console.log("--------------------DATA INSERTED----------------");
        client.close();
      });
    });

    return Final;
  }, 50000);
};
