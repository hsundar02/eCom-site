var obj = [{
    id: 1,
    image: "bluesofa.jpg ",
    productname: "BLUE-SOFA ",
    price: "5000",
}, {
    id: 2,
    image: "blackchair.jpg ",
    productname: "BLACK-CHAIR ",
    price: "2000 ",
}, {
    id: 3,
    image: "storagetable.jpg ",
    productname: "STORAGE-ABLE ",
    price: "4000 ",
}, {
    id: 4,
    image: "chair.jpg ",
    productname: "CHAIR ",
    price: "2500 ",
}, {
    id: 5,
    image: "sofa.jpg ",
    productname: "SOFA ",
    price: "4500 ",
}, {
    id: 6,
    image: "craddle.jpg ",
    productname: "CRADDLE ",
    price: "3500 ",
}, ]
let productshow = document.getElementById("productData");

function showdata(data) {
    productshow.innerHTML = "";
    data.forEach(function(elm, i, arr) {

        let colm1 = document.createElement("div");
        let colm2 = document.createElement("div");
        let proimg = document.createElement("img");
        let colm3 = document.createElement("div");
        let txth5 = document.createElement("h5");
        let txtp = document.createElement("p");
        let adbtn = document.createElement("button")

        colm1.setAttribute("class", "col-4");
        colm2.setAttribute("class", "product1 ");
        proimg.setAttribute("src", "img/" + elm.image);
        colm3.setAttribute("class", "protext");
        adbtn.setAttribute("class", "addbtn");


        adbtn.innerText = "Add To Cart";

        colm3.append(txth5, txtp, adbtn);
        colm2.append(proimg, colm3);
        colm1.append(colm2);
        productshow.append(colm1);

        txth5.innerText = elm.productname;
        txtp.innerText = elm.price;

        adbtn.onclick = addCartItem.bind(null, elm.id);

    });
}

showdata(obj)
console.log(obj)

let cartlist1 = document.getElementById("ofcanvas");

function updatecart(data) {
    cartlist1.innerHTML = "";
    data.forEach(function(elm, i, arr) {
        let colmn1 = document.createElement("div");
        let colmn2 = document.createElement("div");
        let prodimg = document.createElement("img");
        let colmn3 = document.createElement("div");
        let texth4 = document.createElement("h4");
        let texth5 = document.createElement("h5");
        let textp = document.createElement("p");
        let minbtn = document.createElement("button");
        let plubtn = document.createElement("button");


        colmn1.setAttribute("class", "cartlist");
        colmn2.setAttribute("class", "image");
        prodimg.setAttribute("src", "img/" + elm.image);
        colmn3.setAttribute("class", "producttxt");
        minbtn.setAttribute("class", "minusBtn");
        plubtn.setAttribute("class", "plusBtn");


        texth4.innerText = elm.productname;
        texth5.innerText = elm.price;
        minbtn.innerText = "- ";
        plubtn.innerText = "+";

        colmn3.append(texth4, texth5, textp, minbtn, plubtn);
        colmn2.append(prodimg);
        colmn1.append(colmn2, colmn3);
        cartlist1.append(colmn1);


    });

}

cartItem = []
let linkidicon = document.getElementById("addbtn");

function addCartItem(id) {

    let findData = cartItem.find(function(item) {
        return item.id === id;
    })
    if (findData) {
        cartItem.map(function(item) {
            if (item.id === id) {
                item.quantity += 1;
                return item;

            } else
                return item;
        })
        console.log(cartItem);
    } else {
        let newItemCart = obj.find(function(item) {
            return item.id === id;

        })
        newItemCart.quantity = 1;
        cartItem.push(newItemCart);
        console.log(cartItem);
        updatecart(cartItem);
    }
}