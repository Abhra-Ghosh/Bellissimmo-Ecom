let array = [];
var cartTotal=0;
var num = 0;
let products = [];

fetch("/get_men_data").then((res) =>
  res
    .json()
    .then((data) => {
      array = data;
      console.log(data);

      myVar = showPage();
      function showPage() {
        document.getElementById("wrapper").style.display = "none";

        for (i = 1; i < 40; i++) {
          var div = document.createElement("div");
          div.id = "grid-item-" + i;
          div.setAttribute("class", "grid-item");
          document.getElementById("elements").appendChild(div);
          document.getElementById(
            div.id
          ).innerHTML = `<img src="${array[i].src}"></img><div id="Name">${array[i].Name}</div><span>${array[i].Price}</span><div style="display:none">${array[i].iD}</div><div id="description">${array[i].desc}</div><div ><button type="button" class="button_1" onclick="goCart(this.parentElement.parentElement)">Add to Cart</button><br><br><button type="buton" class="button_2">Buy Now</button></div><br><br>`;
        }
      }
    })
    .catch((err) => console.log(err))
);

function goCart(ele) {
  
  
  console.log(ele);

  img = ele.childNodes[0].getAttribute("src");

  name = ele.childNodes[1].innerHTML;
  price = ele.childNodes[2].innerHTML;
  iD = ele.childNodes[3].innerHTML;
  
  console.log(img);
  console.log(name);
  console.log(price);
  var e=products.length+1;
  
   
   products.push(iD)
      const li = document.createElement("li");
      li.classList.add("individual_element");

      li.innerHTML = `<div class="hello"><img src="${img}" width="200"></img><br><span>${name}</span><br><span>${price}</span><br><span onclick="removeItem(this.parentElement.parentElement)" class="closebtn">&times;</span><div>`;

      // li.innerHTML = `<div><br><img src="${img}" width="200"></img><br> <b>${name}</b> <b><i> &nbsp;  &nbsp; ${price}</i></b><div>`;

      document.getElementById("cart_elements").appendChild(li);

      num = num + 1;
      s=price.slice(1);
      var p= s.replace(",", "");

      cartTotal= Number(p)+cartTotal;
      console.log(cartTotal)

      document.getElementById("number").innerHTML = num;
      document.getElementById("cartTotal").innerHTML = "PRICE : ₹" + cartTotal;
      
     }
    
  function removeItem(product){

  s=product.childNodes[0].childNodes[2].innerHTML  
  product.remove();
  console.log(product)
  console.log(s)
  
  q=s.slice(1);
  var p= q.replace(",", "");
  console.log(p)
 

  var sub=Number(p)
  cartTotal=cartTotal-sub
  console.log(cartTotal)
  
 
  
 
  document.getElementById("number").innerHTML = num;
  document.getElementById("cartTotal").innerHTML = "PRICE : ₹"+(cartTotal);
}


fetch("/get_email").then((res) => {
  res.text().then((data) => {
    document.getElementsByClassName("navbar-text")[0].innerHTML = data;
    console.log(data);
  });
});
