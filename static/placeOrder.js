var cartProducts = JSON.parse(localStorage.getItem("orderSummary"))
var customerName = localStorage.getItem("customerName")
var customerEmail = localStorage.getItem("email")

//console.log(customerName)
//console.log(cartProducts)
try {
  $(".price").text("₹" + cartProducts[0].grandTotal)
} catch (err) {
  setTimeout(() => {
    window.alert('Your cart is empty');
    window.close();
  }, 1500)

}



function placeOrder() {

  var name = $('#fname').val();
  var email = $('#email').val();
  var address = $('#adr').val();
  var city = $('#city').val();
  var state = $('#state').val();
  var zip = $('#zip').val();

  var cname = $('#cname').val();
  var ccnum = $('#ccnum').val();
  var expmonth = $('#expmonth').val();
  var expyear = $('#expyear').val();
  var cvv = $('#cvv').val();

  var items = cartProducts

  //console.log(city)
  if (name === '' || email === '' || city === '' || address === '' || state === '' || zip === '' || cname === ''|| ccnum === ''|| expmonth === ''|| expyear === ''|| cvv === '') {
    window.alert("Please fill out all the fields before proceeding with the payment")
    window.location.reload()
  } else {
    var data = {
      name: name,
      email: email,
      city: city,
      address: address,
      state: state,
      zip: zip,
      grandTotal: cartProducts[0].grandTotal,
      items: items
    }
    //console.log(data)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch("/place_Order", options);

    let idArray = [];
    let productsArray = [];
    let cartContents = '';
    let cartNumber = '0';
    let cartTotal = "<b><i>Cart is Empty</i><b></b></b>"
    localStorage.setItem("paid", "1")
    localStorage.setItem('productsArray', JSON.stringify(productsArray));
    localStorage.setItem('idArray', JSON.stringify(idArray));
    localStorage.setItem('cartNumber', cartNumber);
    localStorage.setItem('cartContents', cartContents)
    localStorage.setItem('cartTotal', cartTotal);
    let summary =
      `<table id="table">       <tbody><tr>         <th id="table" style="color:white">S/N</th>         <th id="table" style="color:white">Image</th>         <th id="table" style="color:white">Name</th>         <th id="table" style="color:white">Price</th>         <th id="table" style="color:white">Quantity</th>         <th id="table" style="color:white">Size - UK/India</th>         <th id="table" style="color:white">Sub Total</th>        </tr>     </tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody><tbody></tbody></table>     <br><br>     <div style="color:white" id="chkPrice"><b><i>WOTCHA DOINN?? Why is the CART empty?</i><b></b></b></div>`
    localStorage.setItem('summaryContents', summary);
    var cartObject = {
      cartContents
    }

    var summaryObject = {
      summary
    }


    localStorage.setItem("prevOrder", "1")

    let cartArray = [];
    cartArray.push(customerEmail);
    cartArray.push(cartObject);
    cartArray.push(cartNumber);
    cartArray.push(cartTotal);
    cartArray.push(productsArray);
    cartArray.push(summaryObject);
    cartArray.push(idArray)

    const options2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartArray)
    };

    if (localStorage.getItem("verified") != "false") {

      //console.log(email)
      fetch("/cartContents", options2);

    }






    var containerElement = document.getElementById('main_container');
    var overlayEle = document.getElementById('overlay');
    var overlayEle2 = document.getElementById('writeup');

    overlayEle.style.display = 'block';
    overlayEle2.style.display = 'block';

    containerElement.setAttribute('class', 'blur');






    setTimeout(() => {


      window.location.replace("finalPage.html")



    }, 3000)
  }



}