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
let cartist = [];

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

        adbtn.onclick = addCarItem.bind(null, elm.id);

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
        let qty = document.createElement("h3");
        let delbtn = document.createElement("button")


        colmn1.setAttribute("class", "cartlist");
        colmn2.setAttribute("class", "image");
        prodimg.setAttribute("src", "img/" + elm.image);
        colmn3.setAttribute("class", "producttxt");
        minbtn.setAttribute("class", "minusBtn");
        plubtn.setAttribute("class", "plusBtn");
        delbtn.setAttribute("class", "btn btn-danger")

        texth4.innerText = "Product Name :" + elm.productname;
        texth5.innerText = "Product Price :" + elm.price;
        minbtn.innerText = " - ";
        plubtn.innerText = " + ";
        qty.innerText = ("Product Quantity :" + elm.quantity);
        delbtn.innerText = "Delete";
        colmn3.append(texth4, texth5, textp, qty, minbtn, plubtn, delbtn);
        colmn2.append(prodimg);
        colmn1.append(colmn2, colmn3);
        cartlist1.append(colmn1);

        plubtn.onclick = addCarItem.bind(null, elm.id);
        minbtn.onclick = decrementcartitem.bind(null, elm.id);
        delbtn.onclick = deletecartItems.bind(null, elm.id);
        // plubtn.addEventListener("click", addkartbtn)

        // function addkartbtn() {
        //     alert("click");
        // }
    });

}

carItem = []
let linkidicon = document.getElementById("addbtn");

function addCarItem(id) {

    let findData = carItem.find(function(item) {
        return item.id === id;
    })
    if (findData) {

        let updatecartlist = carItem.map(function(item) {
            if (item.id === id) {
                item.quantity += 1;
                return item;

            } else
                return item;
        })
        carItem = updatecartlist;
        totalPrice(carItem);
        updatecart(carItem);
        console.log(carItem);
    } else {
        let newItemCart = obj.find(function(item) {
            return item.id === id;

        })
        newItemCart.quantity = 1;
        carItem.push(newItemCart);
        console.log(carItem);
        updatecart(carItem);
        totalPrice(carItem);
    }
}



function decrementcartitem(id) {
    let finddata = carItem.find(function(item) {
        return item.id === id;
    })
    if (finddata) {
        if (finddata.quantity === 1) {
            let updatecartlist = carItem.filter(function(item) {
                return item.id !== id;
            });
            carItem = updatecartlist;
            updatecart(carItem);
            totalPrice(carItem);

        } else {
            let updatecartlist = carItem.map(function(item) {

                if (item.id === id) {
                    item.quantity -= 1;
                    return item;
                } else return item;
            })
            console.log(carItem);
            carItem = updatecartlist;
            totalPrice(carItem);
            updatecart(carItem);
        }
    }
}

function deletecartItems(id) {
    let finddata = carItem.find(function(item) {
        return item.id == id;
    })
    if (finddata) {
        let updateitem = carItem.filter(function(item) {
            return item.id !== id;
        });
        carItem = updateitem
        updatecart(carItem);
        totalPrice(carItem);
    }
}

function totalPrice(carItem) {
    let showtotal = document.getElementById("totalPrice");
    total = 0;

    for (let i = 0; i <= carItem.length; i++) {
        total += (carItem[i].price * carItem[i].quantity);
        console.log(total);
        showtotal.innerText = "Total Price:" + total;
    }
}
totalPrice(carItem)