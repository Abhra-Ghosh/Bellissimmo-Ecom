const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
const EventEmitter = require("events"); //EventEmitter is the class being imported
const {
  get
} = require("http");
const eventemitter = new EventEmitter();
var women_objects = [];
var email;
var name;
var cartContents;
var summaryContents;
var cartNum;
var cartTot;
let prodArray = [];
let idnoArray = [];
let sess = "0";
// let sess = 0;
var url ="------------<YOUR MONGODB API KEY>-----------------"

const app = express();


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({
  extended: true
}));


//----------------------MONGO DATA RETRIEVAL---------------------------------
app.get("/get_men_tees_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("menT")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});

app.get("/get_women_tees_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("womenT")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});

app.get("/get_men_jackets_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("menJ")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});

app.get("/get_women_jackets_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("womenJ")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});

app.get("/get_women_jackets_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("womenJ")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});

app.get("/get_men_watches_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("fossilWatches")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});

app.get("/get_women_watches_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("womenW")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});






app.get("/get_men_shoes_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("menShoe")
      .find()
      .toArray((err, res) => {
        men_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(men_objects);
  }, 2000);
});

app.get("/get_women_shoes_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("womenShoe")
      .find()
      .toArray((err, res) => {
        women_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(women_objects);
  }, 2000);
});

app.get("/get_perfumes_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("perfumes")
      .find()
      .toArray((err, res) => {
        women_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(women_objects);
  }, 2000);
});

app.get("/get_sunglasses_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("sunglass")
      .find()
      .toArray((err, res) => {
        women_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(women_objects);
  }, 2000);
});


app.get("/get_kids_data", (req, res) => {
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo
      .collection("kidShoes")
      .find()
      .toArray((err, res) => {
        kid_objects = [...res];

        // console.log(men_objects);

        db.close();
      });
  });
  setTimeout(() => {
    res.json(kid_objects);
  }, 2000);
});
//----------------------------------------------------------------------------------------------------------

app.post("/index", (req, res) => {
  // console.log(req)
  let productsArray = [];
  for (i = 0; i < 400; i++) {
    productsArray[i] = 0;
  }

  let idArray = [];

  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let email = req.body.email;
  let password = req.body.password;
  let phone = req.body.phone;
  let session = "0";
  let summary = `<table id="table">       <tbody><tr>         <th id="table" style="color:white">S/N</th>         <th id="table" style="color:white">Image</th>         <th id="table" style="color:white">Name</th>         <th id="table" style="color:white">Price</th>         <th id="table" style="color:white">Quantity</th>         <th id="table" style="color:white">Size - UK/India</th>         <th id="table" style="color:white">Sub Total</th>        </tr>     </tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody></table>     <br><br>     <div style="color:white" id="chkPrice"><b><i>WOTCHA DOINN?? Why is the CART empty?</i><b></b></b></div>`
  var userobj = {
    name: name,
    birthday: birthday,
    gender: gender,
    email: email,
    password: password,
    phone: phone,
    session: session,
    cart: "",
    cartNumber: "0",
    cartTotal: "<b><i>Cart is Empty</i><b></b></b>",
    productsArray: productsArray,
    summary: summary,
    idArray: idArray
  };
  console.log(userobj);

  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    var que = {
      email: email
    }
    console.log(que)
    dbo.collection("userinfo").find(que).toArray(function (err, result) {
      if (err) throw err;
      if (result.length < 1) {

        console.log(result.length)

        MongoClient.connect(url, {
          useUnifiedTopology: true
        }, function (err, db) {
          if (err) throw err;
          var dbo = db.db("flipkart");
          dbo.collection("userinfo").insertOne(userobj, (err, res) => {
            if (err) throw err;
            console.log("user object inserted");
            db.close();
          });
        });

        res.redirect("/index.html");

      } else {
        // console.log(result)
        res.redirect("emailExist.html")
      }
    });
  });




});
// app.post("/indexGuest", (req, res) => {
//   res.redirect("/loginGuest.html");
//   let name = req.body.name;
//   let birthday = req.body.birthday;
//   let gender = req.body.gender;
//   let email = req.body.email;
//   let password = req.body.password;
//   let phone = req.body.phone;
//   var userobj = {
//     name: name,
//     birthday: birthday,
//     gender: gender,
//     email: email,
//     password: password,
//     phone: phone,
//   };
//   console.log(userobj);

//   MongoClient.connect(url, {
//     useUnifiedTopology: true
//   }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("flipkart");
//     dbo.collection("userinfo").insertOne(userobj, (err, res) => {
//       if (err) throw err;
//       console.log("user object inserted");
//       db.close();
//     });
//   });
// });

// app.get("/login", (req, res) => {
//   res.render("login.ejs");
// });

app.post("/check", (req, res) => {

  let uemail = req.body.email;
  let upass = req.body.pass;
  console.log(uemail, upass);

  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");

    var query = {
      $and: [{
        email: uemail
      }, {
        password: upass
      }],
    };

    dbo
      .collection("userinfo")
      .find(query)
      .toArray(function (err, result) {
        if (err) throw err;
        // console.log(result);
        if (result.length > 0) {
          if (result[0].session == "0") {
            sessionFlag = 0;
            // eventemitter.emit("get_email", uemail);
            console.log("verified");
            name = result[0].name
            email = uemail;
            cartContents = result[0].cart;
            cartNum = result[0].cartNumber;
            cartTot = result[0].cartTotal;
            prodArray = result[0].productsArray;
            summaryContents = result[0].summary;
            idnoArray = result[0].idArray;
            sess = "1";

            console.log(prodArray);

            // console.log(name);
            console.log(result);
            console.log(result[0].name);


            res.redirect("/landingPage.html");
            console.log(`email is ${uemail}`);
          } else {
            res.redirect("sessionActive.html")
          }

        } else {
          console.log("Login Failed");
          res.redirect("/loginFailed.html");
        }

        var query = {
          $and: [{
            email: uemail
          }, {
            password: upass
          }],
        };

        var newvalues = {
          $set: {
            session: "0"
          }
        };
        dbo.collection("userinfo").updateOne(query, newvalues, function (err, res) {
          if (err) throw err;
          console.log("1 document updated");

        });



      });




  });
});

// app.post("/checkGuest", (req, res) => {
//   let uemail = req.body.email;
//   let upass = req.body.pass;
//   console.log(uemail, upass);

//   MongoClient.connect(url, {
//     useUnifiedTopology: true
//   }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("flipkart");

//     var query = {
//       $and: [{
//         email: uemail
//       }, {
//         password: upass
//       }],
//     };

//     dbo
//       .collection("userinfo")
//       .find(query)
//       .toArray(function (err, result) {
//         if (err) throw err;
//         // console.log(result);
//         if (result.length > 0) {
//           // eventemitter.emit("get_email", uemail);
//           if (result[0].session == "0") {
//             console.log("verified");
//             name = result[0].name
//             // sessionFlag = 1;
//             // console.log(name);
//             console.log(result);
//             console.log(result[0].name);

//             res.redirect("guestSuccessful.html")
//             email = uemail;
//             console.log(`email is ${uemail}`);
//           } else {
//             res.redirect("sessionActive.html")
//           }

//         } else {
//           console.log("Login Failed");
//           res.redirect("/login_failed.html");
//         }


//         var query = {
//           $and: [{
//             email: uemail
//           }, {
//             password: upass
//           }],
//         };

//         var newvalues = {
//           $set: {
//             session: "1"
//           }
//         };

//         dbo.collection("userinfo").updateOne(query, newvalues, function (err, res) {
//           if (err) throw err;
//           console.log("1 document updated");

//         });

//       });


//   });
// });
app.get("/get_sess", (req, res) => {
  console.log(sess);
  res.send(sess);
  sess = "0"
});

app.get("/get_email", (req, res) => {
  console.log(email);
  res.send(email);
  email="";
});

app.get("/get_name", (req, res) => {
  console.log(name);
  res.send(name);
  name="";
});

app.get("/get_cart_contents", (req, res) => {
  console.log(cartContents);
  res.send(cartContents);
  cartContents=[]
});

app.get("/get_cart_number", (req, res) => {
  console.log(cartNum);
  res.send(cartNum);
  cartNum=0
});

app.get("/get_cart_total", (req, res) => {
  console.log(cartTot);
  res.send(cartTot);
  cartTot=0
});

app.get("/get_products_array", (req, res) => {
  console.log(prodArray);
  res.send(prodArray);
  prodArray=[];
});

app.get("/get_summary_contents", (req, res) => {
  console.log(summaryContents);
  res.send(summaryContents);
  summaryContents=""
});

app.get("/get_idno_array", (req, res) => {
  console.log(idnoArray);
  res.send(idnoArray);
  idnoArray=[]
});



//PLACE ORDER DATA

app.post("/place_Order", (req, res) => {

  var userObj = req.body;
  console.log(userObj);

  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    dbo.collection("customerOrders").insertOne(userObj, (err, res) => {
      if (err) throw err;
      console.log("user object inserted");
      db.close();
    });
  });
})

app.post("/cartContents", (req, res) => {

  var userObj = req.body;
  console.log((userObj));
  var email = userObj[0];
  var cart = userObj[1].cartProducts;
  var cartNumber = userObj[2];
  var cartTot = userObj[3]
  var productsArray = userObj[4];
  var summary = userObj[5].summaryProducts;
  var idArray = userObj[6];
  console.log(idArray)

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");
    var myquery = {
      email: email
    };
    var newvalues = {
      $set: {
        cart: cart,
        cartNumber: cartNumber,
        cartTotal: cartTot,
        productsArray: productsArray,
        summary: summary,
        idArray: idArray
      }
    };
    dbo.collection("userinfo").updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
})







app.post("/sessionLogout", (req, res) => {

  var recEmail = req.body;
  console.log(recEmail.email);
  MongoClient.connect(url, {
    useUnifiedTopology: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("flipkart");

    var query = {
      email: recEmail.email
    };

    var newvalues = {
      $set: {
        session: "0"
      }
    };
    dbo.collection("userinfo").updateOne(query, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");

      db.close();
    });


    // MongoClient.connect(url, {
    //   useUnifiedTopology: true
    // }, function (err, db) {
    //   if (err) throw err;
    //   var dbo = db.db("flipkart");
    //   dbo.collection("customerOrders").insertOne(userObj, (err, res) => {
    //     if (err) throw err;
    //     console.log("user object inserted");
    //     db.close();
    //   });
    // });
  })
})


const PORT =process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("server running on port 3000");
});

//======================================DONE :D ==========================================================