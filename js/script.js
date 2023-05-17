var allProducts = document.querySelectorAll(".container h4")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalPrice = 0

allProducts.forEach(function (item){
    item.onclick = function (){
        totalPrice += Number(item.getAttribute("price"))
        content.innerHTML += item.textContent + " / "
        if(content.innerHTMLl != ""){
            btn.style.display = "block"
            btn.style.margin = "auto"
            btn.style.height = "40px"
            

        }
    }

})

btn.onclick = function(){
   content.innerHTML = totalPrice
}






