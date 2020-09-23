let array = [];
var custName;
var cartTotal;
// var num = 0;
let products = [];
let idno = [];
let win;
let num;



// for (i = 0; i < 400; i++) {
//   products[i] = 0;
// }
// //console.log("helloooo")
// //console.log(localStorage.getItem("productsArray"))
// typeof (localStorage.getItem("productsArray")[1])
if (localStorage.getItem("paid") != "1") {
  products = JSON.parse(localStorage.getItem("productsArray"))
  idno = JSON.parse(localStorage.getItem("idArray"))
  //console.log(idno)
  //console.log(products)

  // for (i = 0; i < 400; i++) {
  //   products[i] = Number(productsString[i])
  // }



  var slno = 0;
  var customerName = localStorage.getItem("customerName")

  var cartContents = localStorage.getItem("cartContents")
  document.getElementById("cart_elements").innerHTML = cartContents

  var summaryContents = localStorage.getItem("summaryContents")
  document.getElementById("overlay-content").innerHTML = summaryContents


  var cartTotalString = localStorage.getItem("cartTotal")
  document.getElementById("cartTotal").innerHTML = cartTotalString
  var matches = cartTotalString.match(/(\d+)/);
  if (matches) {
    cartTotal = Number(matches[0]);
  } else {
    cartTotal = 0;
  }

  num = Number(localStorage.getItem("cartNumber"))
  document.getElementById("number").innerHTML = num



  var email = localStorage.getItem("email")
  //console.log(localStorage.getItem("verified"))
  // loginFlag = localStorage.getItem("loginFlag")
  if (localStorage.getItem("verified") == "true") {

    document.getElementById("Ne").innerHTML = customerName;
  } else {
    document.getElementById("logOut").style.display = "none";
    document.getElementById("Ne").innerHTML = "Guest User";
  }


} else {
  localStorage.setItem("paid", "0")
  products = []
  idno = []

  var slno = 0;
  var customerName = localStorage.getItem("customerName")

  document.getElementById("cart_elements").innerHTML = ''
  document.getElementById("overlay-content").innerHTML = `<table id="table">       <tbody><tr>         <th id="table" style="color:white">S/N</th>         <th id="table" style="color:white">Image</th>         <th id="table" style="color:white">Name</th>         <th id="table" style="color:white">Price</th>         <th id="table" style="color:white">Quantity</th>         <th id="table" style="color:white">Size - UK/India</th>         <th id="table" style="color:white">Sub Total</th>        </tr>     </tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody></table>     <br><br>     <div style="color:white" id="chkPrice"><b><i>WOTCHA DOINN?? Why is the CART empty?</i><b></b></b></div>`
  cartTotal = 0
  document.getElementById("cartTotal").innerHTML = "<b><i>Cart is Empty</i><b></b></b>"
  num = 0
  document.getElementById("number").innerHTML = num
  var email = localStorage.getItem("email")
  //console.log(localStorage.getItem("verified"))
  // loginFlag = localStorage.getItem("loginFlag")
  if (localStorage.getItem("verified") == "true") {

    document.getElementById("Ne").innerHTML = customerName;
  } else {
    document.getElementById("logOut").style.display = "none";
    document.getElementById("Ne").innerHTML = "Guest User";
  }



}



function menTeesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)


  fetch("/get_men_tees_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}

function womenTeesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)


  fetch("/get_women_tees_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}

function menJacketsRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)


  fetch("/get_men_jackets_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}

function womenJacketsRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)

  fetch("/get_women_jackets_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}


function menShoesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)


  fetch("/get_men_shoes_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}

function womenShoesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)


  fetch("/get_women_shoes_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}


function menWatchesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)


  fetch("/get_men_watches_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}

function womenWatchesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)

  fetch("/get_women_watches_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}


function perfumesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)

  fetch("/get_perfumes_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom" style="width:60%;"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}

function sunglassesRender() {
  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>  
    
  <span class="txt">Best when its on YOU!</span>
  </div></div>`)


  fetch("/get_sunglasses_data").then((res) =>
    res
    .json()
    .then((data) => {
      array = data;
      //console.log(data);

      myVar = showPage();

      function showPage() {
        document.getElementsByClassName("loader")[0].style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}" class="zoom"></img><div id="Name" style="font-family:Verdana;">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description" style="font-family:Verdana;">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2" onclick="buyNow(this.parentElement.parentElement)">Buy Now</button></div>`;
        }
      }
    })
    .catch((err) => console.log(err))
  );
}



function homerender() {

  $("#elements").html(`<div id="loader-center"><div class="loader">   
  <span class="box"></span>   
  <span class="box"></span>  
  <div class="code"> 
  <img src="cartLoader.png" width="120px" style="z-index:2;">
  </div>    
  <span class="txt" style="font-family:calibri; font-size:15px;top:90%;"><br><b>Best when its on YOU!</b></span>
  </div></div>`)

  setTimeout(() => {
    document.getElementsByClassName("loader")[0].style.display = "none";
    document.getElementById("elements").innerHTML = `  <div id="homePage" style="margin-top:-15%;">

    <div id="arrow">
      <a href="#section2" id="text"><i class="fa fa-angle-double-down glow" style="font-size:36px;"></i></a>
    </div>
    <div id="shadow" style="box-shadow: inset 5px -30px 18px #000000b7;"></div>

    <div class="w" id="sec1">
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>
      <div class="i"></div>



    </div>

    <div id="section2">

      <div id="cat-1">

        <h4 style="padding-top:10px;margin:0px;"><b>T-Shirts</b></h4>
        <table class="homeTable" style="width:100%">

          <tr>
            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px"
                  src="https://images.unsplash.com/photo-1516178151140-1a27a08c417a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                  alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">MEN</h3>
                  <br>

                  <p style="font-size: 20px;color:black;">Go casual the modish way with our exhaustive
                    fleet of T-shirts for men, that encompasses stylish polo neck tees, classic slim fit crews and a
                    whole lot more! We’re showcasing the season’s favourites with a ramp full of brands like Adidas,
                    Nike and Puma.</p>

                </figcaption>
                <a href="#menTshirts" onclick="menTeesRender()"></a>
              </figure>
            </td>


            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="womenTshirt.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">WOMEN</h3>
                  <br>

                  <p style="font-size: 22px; color:rgb(0, 0, 0);">Funk up your style with our fashionable
                    selection of tees! Bellssimmo showcases stunning styles from vivid graphic prints to versatile
                    geometric art, subtle florals to simple solid tees from top brands
                    like Adidas, Nike and Puma.</p>

                </figcaption>
                <a href="#womenTshirts" onclick="womenTeesRender()"></a>
              </figure>
            </td>
          </tr>
        </table>

      </div>
      <hr>
      <div id="cat-1">

        <h4 style="padding-top:0px;margin:0px;"><b>Jackets</b></h4>
        <table class="homeTable" style="width:100%;" id="hometable">

          <tr>
            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="menJacket.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">MEN</h3>
                  <br>

                  <p style="font-size: 20px;color:black;">Transform your winter wardrobe with the addition
                    of some swanky jackets from our collection! From puffer, varsity, quilted to bomber jackets, we host
                    the full package. Shop men's jackets from top-selling brands in the fashion scene at best prices &
                    offers. </p>

                </figcaption>
                <a href="#menJackets" onclick="menJacketsRender()"></a>
              </figure>
            </td>


            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="womenJacket.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">WOMEN</h3>
                  <br>

                  <p style="font-size: 20px; color:black;">From morning workouts to evening soiree, we are
                    here to meet your fashion needs with our collection of coats and jackets for women. From fierce
                    sports jackets to stunning designs that surprise us, Bellissimmo has it all for a dramatic fashion
                    statement.</p>

                </figcaption>
                <a href="#womenJackets" onclick="womenJacketsRender()"></a>
              </figure>
            </td>
          </tr>
        </table>

      </div>
      <hr>
      <div id="cat-1">

        <h4 style="padding-top:0px;margin:0px;"><b>Shoes</b></h4>
        <table class="homeTable" style="width:100%">

          <tr>
            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="menShoes.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">MEN</h3>
                  <br>

                  <p style="font-size: 20px;color:black;">If you’re going to put your body through any
                    type of strenuous physical activity, it’s important that you wear comfortable footwear. Buy latest
                    collections of sports shoes online on Bellissimmo at best prices from the top brands. </p>

                </figcaption>
                <a href="#menShoes" onclick="menShoesRender()"></a>
              </figure>
            </td>


            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="womenShoes.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">WOMEN</h3>
                  <br>

                  <p style="font-size: 20px;color:black;"> Women’s love for shoes is not a hidden story
                    anymore. They can have as many pairs of shoes as the number of days in a year and still crave for
                    more. With Bellissimmo, a women can find the best match. </p>

                </figcaption>
                <a href="#womenShoes" onclick="womenShoesRender()"></a>
              </figure>
            </td>
          </tr>
        </table>

      </div>
      <hr>
      <div id="cat-1">

        <h4 style="padding-top:0px;margin:0px;"><b>Watches</b></h4>
        <table class="homeTable" style="width:100%">

          <tr>
            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="menWatch.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">MEN</h3>
                  <br>

                  <p style="font-size: 20px;color:black;">Shop for men’s watches online from Flipkart from
                    the biggest names in the country including Fossil, Sonata, Titan, Maxima among dozens of other
                    names. A good wrist watch can go a long way when you’re trying to make an impression! </p>

                </figcaption>
                <a href="#menWatches" onclick="menWatchesRender()" class="ckout"></a>
              </figure>
            </td>


            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="womenWatch.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">WOMEN</h3>
                  <br>

                  <p style="font-size: 20px;color:black;">Ladies’ watches are a range of very classy
                    accessories that can accentuate the style and appearance of a lady. No matter what kind of outfit
                    she is wearing, you can always find a matching women’s watch at Bellissimmo. </p>

                </figcaption>
                <a href="#womenWatches" onclick="womenWatchesRender()"></a>
              </figure>
            </td>
          </tr>
        </table>

      </div>
      <hr>
      <div id="cat-1">

        <h4 style="padding-top:0px;margin:0px;"><b>Perfumes & Sunglasses</b></h4>
        <table class="homeTable" style="width:100%">

          <tr>
            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="perfume.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">PERFUMES</h3>
                  <br>

                  <p style="font-size: 20px;color:black;">Everyone strives to look presentable and at
                    their best at all times.Use deodorants and fragrances to keep body odor at bay and smell fresh all
                    day. Buy the best grooming products from your favorite online shopping site at attractive prices.
                  </p>

                </figcaption>
                <a href="#perfumes" onclick="perfumesRender()"></a>
              </figure>
            </td>


            <td class="homeTableData">
              <figure class="snip1543 zoom-img"
                style="box-shadow:0 10px 16px 0 rgba(0, 0, 0, 0.74),0 6px 20px 0 rgba(0, 0, 0, 0.363);border-radius:2%;">
                <img width="560px" height="315px" src="sunglass.PNG" alt="sample108" />
                <figcaption>
                  <h3 class="Philosopher">SUNGLASSES </h3>
                  <br>

                  <p style="font-size: 20px;color:black;">The right pair of shades will instantly upgrade
                    your look and will make you look stylish. From aviators and wayfarers to cat-eye glasses, you can
                    buy various types of sunnies from Bellissimmo at competitive prices. </p>




                </figcaption>
                <a href="#sunglasses" onclick="sunglassesRender()"></a>
              </figure>
            </td>
          </tr>
        </table>

      </div>
<!--======================================= footer=============================== -->
      <div class="footer">
        <a href="#" id="text"><i class="fa fa-angle-double-up glow" style="font-size:36px;"></i></a>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">Bellissimmo is the best of all online stores because of the  sheer convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery.

                Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones.</p>
            </div>
  
            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
               <li><a href="#menTshirts" onclick="menTeesRender()" class="ckout">MenTees</a></li>
               <li><a href="#menJackets" onclick="menJacketsRender()" class="ckout">MenJackets</a></li>
               <li><a href="#menShoes" onclick="menShoesRender()" class="ckout">MenShoes</a></li>
               <li><a href="#menWatches" onclick="menWatchesRender()" class="ckout">MenWatches</a></li>
               <li><a href="#womenTshirt" onclick="womenTeesRender()" class="ckout">WomenTees</a></li>
               <li><a href="#womenJackets" onclick="womenJacketsRender()" class="ckout">WomenJackets</a></li>
               <li><a href="#womenShoes" onclick="womenShoesRender()" class="ckout">WomenShoes</a></li>
               <li><a href="#womenWatches" onclick="womenWatchesRender()" class="ckout">WomenWatches</a></li>
               <li><a href="#perfumes" onclick="perfumesRender()" class="ckout">Perfumes</a></li>
               <li> <a href="#sunglasses" onclick="sunglassesRender()" class="ckout">Sunglasses</a></li>
           
              </ul>
            </div>
            
  
            <div class="col-xs-6 col-md-3">
              <h6>Brands</h6>
              <ul class="footer-links">
               <li><a>Puma</a></li>
               <li><a>Adidas</a></li>
               <li><a>Nike</a></li>
               <li><a>Sonata</a></li>
               <li><a>Fossil</a></li>
               <li><a>Reebok</a></li>
               <li><a>Bentley</a></li>
              </ul>
            </div>
          </div>
          <hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <!-- <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
           <a href="#">Bellissimmo</a>. -->
           <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <!-- <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li> -->

              <li><a class="github" href="https://github.com/Wicked-North"><i class="fa fa-github"></i></a></li> 
              <li><a class="linkedin" href="https://www.linkedin.com/in/sagnik-das-6aa2211b5/"><i class="fa fa-linkedin"></i></a>Sagnik Das</li>   
            </ul>
          </div>
           </p>
        </div>
            
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <!-- <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li> -->
                <li><a class="github" href="https://github.com/Abhra-Ghosh#"><i class="fa fa-github"></i></a></li> 
                <li><a class="linkedin" href="https://www.linkedin.com/in/abhra-ghosh-57840a1b7/"><i class="fa fa-linkedin"></i></a>Abhra Ghosh</li>   
              </ul>
            </div>
          </div>
        </div>

      </div>
<!--===================================== end footer=================================== -->

    </div>

  </div>
`;

  }, 2000);

}




function goCart(ele) {
  //console.log(ele);
  $('#messageAdd').fadeIn('slow', function () {
    $('#messageAdd').delay(1000).fadeOut();
  });

  img = ele.childNodes[0].getAttribute("src");

  name = ele.childNodes[1].innerHTML;
  price = ele.childNodes[2].innerHTML;
  s = price.slice(1);
  var p = s.replace(",", "");
  iD = ele.childNodes[3].innerHTML;

  //console.log(img);
  //console.log(name);
  //console.log(price);

  if (products[iD] > 0) {
    products[iD] += 1;
    cartTotal = Number(p) + cartTotal;

    //-----FOR CART----------------------------------------
    document.getElementById(
      "cartTotal"
    ).innerHTML = `<b><i>PRICE - ₹${cartTotal}</i><b>`;

    document.getElementById("product-container-" + iD).childNodes[7].innerHTML =
      "qty: " + products[iD]; //changing qty

    //------------------------------------------------------

    //-----------FOR CHECKOUT-------------------------

    document.getElementById(
      "chkPrice"
    ).innerHTML = `<b><i>GRAND TOTAL - ₹${cartTotal}</i><b>`;

    document.getElementById("product-cout-container-" + iD).innerHTML =
      products[iD];
    document.getElementById("product-cout-container-" + iD + 100).innerHTML = "₹" + products[iD] * p;

    //-------------------------------------








  } else {

    products[iD] = 1;
    idno.push(iD);



    // -----------to display the table headers in navbar-------------------------------

    //-----------------------------------------------

    //---------------------FOR CART----------------------------------------------
    const li = document.createElement("li");
    li.classList.add("product-container-" + iD);

    li.innerHTML = `<div iD="product-container-${iD}" style="color:white"><img src="${img}" width="200"></img><span onclick="removeItem(this.parentElement.parentElement)" class="closebtn">&times;</span><br><span>${name}</span><br><span>${price}</span><br><span>qty: ${products[iD]}</span><div style="display:none">${iD}</div></div><hr><br>`;

    // li.innerHTML = `<div><br><img src="${img}" width="200"></img><br> <b>${name}</b> <b><i> &nbsp;  &nbsp; ${price}</i></b><div>`;

    document.getElementById("cart_elements").appendChild(li);
    // ---------------------------------------------------------------------------

    //----------------------FOR CHECKOUT---------------------------------

    const tr = document.createElement("tr");
    tr.classList.add("product-cout-container-" + iD);
    let size;
    if (iD < 81) {
      size = `<td>
      <div class="size" style="width:200px; ">
      <select required>
        <option value="0">Select size</option>
        <option value="4">4.0</option>
        <option value="5">5.0</option>
        <option value="6">6.0</option>
        <option value="7">7.0</option>
        <option value="8">8.0</option>
        <option value="9">9.0</option>
        <option value="10">10.0</option>
        <option value="11">11.0</option>
        <option value="12">12.0</option>
       
      </select>
    </div>
      
    </td>`
    } else if (iD > 80 && iD < 241) {
      size = `<td>
      <div class="size" style="width:200px;">
      <select required>
        <option value="0">Select size</option>
        <option value="3">XS</option>
        <option value="1">S</option>
        <option value="2">M</option>
        <option value="3">L</option>
        <option value="3">XL</option>
        <option value="3">XXL</option>

      </select>
    </div>
    </td>`
    } else {
      size = `<td>
      <div class="custom-select" style="width:200px;" >
      N/A
    </div>
      
    </td>`
    }


    tr.innerHTML = `<td style="color:white" id="product-cout-container-${iD + 300}"></td>
    <td style="color:white"><img src="${img}" width="200"></img></td>
    <td style="color:white" id="product-cout-container-${iD + 200}">${name}</td>
    <td style="color:white" >${price}</td>
    <td style="color:white" id="product-cout-container-${iD}">${
      products[iD]
    }</td>${size}
    
    <td style="color:white" id="product-cout-container-${iD + 100}">₹${
      p * products[iD]
    }</td>`;

    //console.log(price * products[iD]);
    document.getElementById("table").appendChild(tr);


    for (x = 0; x < idno.length; x++) {

      var curIdno = idno[x]
      //console.log("product-cout-container-" + curIdno + 300)
      document.getElementById("product-cout-container-" + curIdno + 300).innerHTML = x + 1;



    }

    // -----------------------------------------------------------------
    num = num + 1;

    cartTotal = Number(p) + cartTotal;
    //console.log(cartTotal);

    document.getElementById("number").innerHTML = num;

    //---------------------FOR CART----------------------------------------------

    document.getElementById(
      "cartTotal"
    ).innerHTML = `<b><i>PRICE - ₹${cartTotal}</i><b>`;
    // ---------------------------------------------------------------------------

    //----------------------FOR CHECKOUT---------------------------------

    document.getElementById(
      "chkPrice"
    ).innerHTML = `<b><i>GRAND TOTAL - ₹${cartTotal}</i><b>`;
    // ---------------------------------------------------------------------------









  }

  //console.log(products);

}

function removeItem(product) {

  $('#messageRemove').fadeIn('slow', function () {
    $('#messageRemove').delay(1000).fadeOut();
  });



  s = product.childNodes[0].childNodes[5].innerHTML;
  pid = product.childNodes[0].childNodes[8].innerHTML;
  //console.log(pid);
  //console.log(s);

  q = s.slice(1);
  var p = q.replace(",", "");
  var sub = Number(p);

  cartTotal = cartTotal - sub;
  //console.log(cartTotal);

  if (products[pid] > 1) {
    products[pid] = products[pid] - 1;
    //console.log("if block: ", products);
    // -------------FOR CART--------------------------
    document.getElementById(
      "cartTotal"
    ).innerHTML = `<b><i>PRICE - ₹${cartTotal}</i><b>`;
    document.getElementById(
      "product-container-" + pid
    ).childNodes[7].innerHTML = "qty: " + products[pid]; //changing qty

    // ----------------------------------------

    //-------------------FOR CHECKOUT-----------------

    document.getElementById(
      "chkPrice"
    ).innerHTML = `<b><i>GRAND TOTAL - ₹${cartTotal}</i><b>`;

    document.getElementById("product-cout-container-" + pid).innerHTML =
      products[pid];

    document.getElementById("product-cout-container-" + pid + 100).innerHTML = '₹' + products[pid] * sub;

    //------------------------------------------









  } else if (products[pid] == 1) {
    //console.log(products[pid]);



    //-----------for deleting from checkout-------------------
    for (x = 0; x < idno.length; x++) {
      if (idno[x] == pid) {
        idno.splice(x, 1);
      }
    }
    // -------------------------------------------------------

    // ---------------------------FOR  SLNO--------------------------

    for (x = 0; x < idno.length; x++) {

      var curIdno = idno[x]
      //console.log("product-cout-container-" + curIdno + 300)
      document.getElementById("product-cout-container-" + curIdno + 300).innerHTML = x + 1;



    }



    // ---------------------------------------------------------------

    num = num - 1;
    //console.log(num)

    products[pid] -= 1;
    //console.log(products[pid])

    //console.log("else block: ", products);
    //----------------FOR CART-------------------
    product.remove();
    //---------------------------------

    //------------------------FOR CHECKOUT--------------
    document
      .getElementsByClassName("product-cout-container-" + pid)[0]
      .remove();

    //----------------------------------------------
    if (num > 0) {
      //console.log("ghosh")

      document.getElementById(
        "cartTotal"
      ).innerHTML = `<b><i>PRICE - ₹${cartTotal}</i><b>`;

      //-------------FOR CHECKOUT-------------------------
      document.getElementById(
        "chkPrice"
      ).innerHTML = `<b><i>GRAND TOTAL - ₹${cartTotal}</i><b>`;
      //-----------------------------------------------
    } else {
      //console.log("abhra")
      //-------------FOR CHECKOUT-------------------------
      document.getElementById(
        "chkPrice"
      ).innerHTML = `<b><i>WOTCHA DOINN?? Why is the CART empty?</i><b>`;
      //-----------------------------------------------

      document.getElementById(
        "cartTotal"
      ).innerHTML = `<b><i>Cart is Empty</i><b>`;
    }
    //------------------------------------------------

    document.getElementById("number").innerHTML = num;


    cartProducts = document.getElementById("cart_elements").innerHTML
    summaryProducts = document.getElementById("overlay-content").innerHTML
    //console.log(summaryProducts)
    cartNumber = document.getElementById("number").innerHTML
    cartTot = document.getElementById("cartTotal").innerHTML




  }

}


//-------------------PROCEED TO PAY-----------------
function finalPage() {

  let orderSumm = []


  for (x = 0; x < idno.length; x++) {


    var cid = idno[x];
    var orderid = cid;
    var name = document.getElementById("product-cout-container-" + cid + "200").innerHTML;
    var quantity = document.getElementById("product-cout-container-" + cid).innerHTML;
    var stotal = document.getElementById("product-cout-container-" + cid + "100").innerHTML;
    var grandTotal = cartTotal
    var cobj = {
      orderid,
      name,
      quantity,
      stotal,
      grandTotal
    }
    //console.log(cobj)
    orderSumm.push(cobj)


  }
  localStorage.setItem("orderSummary", JSON.stringify(orderSumm));
  //console.log(orderSumm)
  //console.log(idno)

  var checkBox = document.getElementById("cbox");


  // If the checkbox is checked, display the output text

  if (localStorage.getItem("verified") == "false") {
    window.open("guestOrder.html")
    localStorage.setItem("flag", '0');

    var refresh = setInterval(() => {
      if (localStorage.getItem("flag") === '1') {

        window.location.reload()
        clearInterval(refresh);

      }
      //console.log("r")

    }, 1000)

  } else {
    if (checkBox.checked == true) {
      win = window.open("friend_order.html", "order")
      localStorage.setItem("flag", '0');

      var refresh = setInterval(() => {
        if (localStorage.getItem("flag") === '1') {

          window.location.reload()
          clearInterval(refresh);

        }
        //console.log("r")

      }, 1000)


    } else {
      window.open("personal_order.html");

      localStorage.setItem("flag", '0');

      var refresh = setInterval(() => {
        if (localStorage.getItem("flag") === '1') {

          window.location.reload()
          clearInterval(refresh);

        }
        //console.log("r")

      }, 1000)
    }
  }

}
//--------------------------------------------------

function buyNow(ele) {
  //console.log(ele);
  iD = ele.childNodes[3].innerHTML;
  name = ele.childNodes[1].innerHTML;
  qty = "1";
  sTotal = ele.childNodes[2].innerHTML;
  gTotal = ele.childNodes[2].innerHTML;
  s = gTotal.slice(1);
  var p = s.replace(",", "");
  var cobj = [{
    iD,
    name,
    qty,
    sTotal,
    grandTotal: p
  }]
  localStorage.setItem("orderSummary", JSON.stringify(cobj));
  //console.log(localStorage.getItem("orderSummary"))


  if (localStorage.getItem("verified") == "false") {
    window.open("guestOrder.html")

  } else {
    {
      window.open("personal_order.html");
    }
  }
}

function logout() {

  var cartProducts = document.getElementById("cart_elements").innerHTML
  var summaryProducts = document.getElementById("overlay-content").innerHTML
  //console.log(summaryProducts)
  var cartNumber = document.getElementById("number").innerHTML
  var cartTot = document.getElementById("cartTotal").innerHTML

  //console.log(typeof (cartObject))

  var cartObject = {
    cartProducts
  }

  var summaryObject = {
    summaryProducts
  }



  //console.log(cartObject)
  let cartArray = [];
  cartArray.push(email);
  cartArray.push(cartObject);
  cartArray.push(cartNumber);
  cartArray.push(cartTot);
  cartArray.push(products);
  cartArray.push(summaryObject);
  cartArray.push(idno)




  //console.log(cartArray);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cartArray)
  };

  //console.log(email)
  fetch("/cartContents", options);
  // ---------------------------------------------------------
  var emailObj = {
    email: email
  }
  fetch("/sessionLogout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(emailObj)
  });
  // -----------------------------------------------------------

  window.location.replace('index.html');




}
//====================================================
window.addEventListener("beforeunload", function (event) {

  if (localStorage.getItem("prevOrder") === '0') {

    let cartProducts = document.getElementById("cart_elements").innerHTML
    let summaryProducts = document.getElementById("overlay-content").innerHTML
    //console.log(summaryProducts)
    let cartNumber = document.getElementById("number").innerHTML
    let cartTot = document.getElementById("cartTotal").innerHTML


    localStorage.setItem('productsArray', JSON.stringify(products));
    localStorage.setItem('idArray', JSON.stringify(idno));

    localStorage.setItem('cartNumber', cartNumber);
    localStorage.setItem('cartContents', cartProducts);
    localStorage.setItem('cartTotal', cartTot);
    localStorage.setItem('summaryContents', summaryProducts);

    //console.log(typeof (cartObject))

    var cartObject = {
      cartProducts
    }

    var summaryObject = {
      summaryProducts
    }



    //console.log(cartObject)
    let cartArray = [];
    cartArray.push(email);
    cartArray.push(cartObject);
    cartArray.push(cartNumber);
    cartArray.push(cartTot);
    cartArray.push(products);
    cartArray.push(summaryObject);
    cartArray.push(idno)




    //console.log(cartArray);


    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartArray)
    };
    if (localStorage.getItem("verified") != "false") {
      //console.log(email)
      fetch("/cartContents", options);
    }

    // ---------------------------------------------------------


  } else {
    localStorage.setItem('prevOrder', '0')

  }


});



// window.addEventListener("unload", function (event) {

//   if(localStorage.getItem("prevOrder")==='1'){
//     localStorage.setItem('prevOrder','0')
//   }else{

//     let cartProducts = document.getElementById("cart_elements").innerHTML
//   let summaryProducts = document.getElementById("overlay-content").innerHTML
//   //console.log(summaryProducts)
//   let cartNumber = document.getElementById("number").innerHTML
//   let cartTot = document.getElementById("cartTotal").innerHTML


//   localStorage.setItem('productsArray', JSON.stringify(products));
//   localStorage.setItem('idArray', JSON.stringify(idno));

//   localStorage.setItem('cartNumber', cartNumber);
//   localStorage.setItem('cartContents', cartProducts);
//   localStorage.setItem('cartTotal', cartTot);
//   localStorage.setItem('summaryContents', summaryProducts);

//   //console.log(typeof (cartObject))

//   var cartObject = {
//     cartProducts
//   }

//   var summaryObject = {
//     summaryProducts
//   }



//   //console.log(cartObject)
//   let cartArray = [];
//   cartArray.push(email);
//   cartArray.push(cartObject);
//   cartArray.push(cartNumber);
//   cartArray.push(cartTot);
//   cartArray.push(products);
//   cartArray.push(summaryObject);
//   cartArray.push(idno)




//   //console.log(cartArray);
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(cartArray)
//   };

//   //console.log(email)
//   fetch("/cartContents", options);
//   // ---------------------------------------------------------
//   var emailObj = {
//     email: email
//   }

//   // -----------------------------------------------------------


//   }


// });

// function place(){
//   window.location.replace('Final Page');
// }




// //console.log(custName)