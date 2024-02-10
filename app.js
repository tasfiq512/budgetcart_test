// calculate kitkat chocolate price with quantity
function handleKitkat() {
    const kitkatCost = multiplePriceWithQuantity("kitkat-quantity", 200);
    setInnerText("chocolate", kitkatCost);
    document.getElementById("kitkat-quantity").value = "";
    total();
  }

  // this fucntion will calculate the quatity and price of gift this function will take two parameter inutField id & price of gift
function multiplePriceWithQuantity(id, price) {
    const quantity = document.getElementById(id).value;
    const totalPrice = parseInt(quantity) * parseInt(price);
    return totalPrice;
  }