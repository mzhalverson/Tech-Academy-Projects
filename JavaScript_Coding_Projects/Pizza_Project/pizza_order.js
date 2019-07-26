


// Get's size input, prints item and price and returns size price
function getSizePrice() {
    var size = document.querySelector('input[name="size"]:checked').value;
    if (size == "small") {
        price = 6;
        document.getElementById("size-receipt").innerHTML = "Personal Pizza &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp $"+ price + ".00"; 
    }
    else if (size == "medium") {
        price = 10;
        document.getElementById("size-receipt").innerHTML = "Medium Pizza &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp $"+ price + ".00"; 
    }
    else if (size == "large") {
        price = 14;
        document.getElementById("size-receipt").innerHTML = "Large Pizza &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp $"+ price + ".00"; 
    }
    else if (size == "xlarge") {
        price = 16;
        document.getElementById("size-receipt").innerHTML = "Extra Large Pizza &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp $"+ price + ".00"; 
    }

    return price;
}

// Right now returns undefined for meatList no matter what??!!!!!!!!
function getMeatPrice() {
    // finds which inputs were checked
    meatList = document.querySelectorAll('input[name="meat"]:checked');
    var price = 0;
    var meatDisplay = "";
    // Go through list and add them
    for (i=0; i<meatList.length; i++) {

        var meat = meatList[i].value;
        // if it is the first meat, price = 0, or other, price = 3
        if (i==0) {
            meatDisplay = meat + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$0.00";
        } else {
            price = price + 1;
            meatDisplay = meatDisplay + "<br><br>" + meat + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$1.00";
        }
    }
    if (meatDisplay == "") {
        return price;
    }
    else {
        document.getElementById("meat-receipt").innerHTML = meatDisplay;
        return price;
    }
}




// Get's cheese input, prints item and price and returns cheese price
function getCheesePrice() {
    var cheese = document.querySelector('input[name="cheese"]:checked').value;
    if (cheese == "regular") {
        price = 0;
        document.getElementById("cheese-receipt").innerHTML = "Regular cheese &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }
    else if (cheese == "nocheese") {
        price = 0;
        document.getElementById("cheese-receipt").innerHTML = "No cheese &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }
    else if (cheese == "extracheese") {
        price = 3;
        document.getElementById("cheese-receipt").innerHTML = "Extra cheese &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }

    return price;
}


// Get's crust input, prints item and price and returns crust price
function getCrustPrice() {
    var crust = document.querySelector('input[name="crust"]:checked').value;
    if (crust == "plain") {
        price = 0;
        document.getElementById("crust-receipt").innerHTML = "Plain Crust &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }
    else if (crust == "garlic") {
        price = 0;
        document.getElementById("crust-receipt").innerHTML = "Garlic Butter Crust &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }
    else if (crust == "cheese") {
        price = 3;
        document.getElementById("crust-receipt").innerHTML = "Cheese Stuffed Crust &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }
    else if (crust == "spicy") {
        price = 0;
        document.getElementById("crust-receipt").innerHTML = "Spicy Crust &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }
    else if (crust == "house") {
        price = 0;
        document.getElementById("crust-receipt").innerHTML = "House Special Crust &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$"+ price + ".00";
    }
    return price;
}

// Get's sauce input and prints item 
function getSauce() {
    var sauce = document.querySelector('input[name="sauce"]:checked').value;
    if (sauce == "marinara") {
        document.getElementById("sauce-receipt").innerHTML = "Marinara Sauce &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$0.00";
    }
    else if (sauce == "white") {
        document.getElementById("sauce-receipt").innerHTML = "White Sauce &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$0.00";
    }
    else if (sauce == "bbq") {
        document.getElementById("sauce-receipt").innerHTML = "Barbeque Sauce &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$0.00";
    }
    else if (sauce == "nosauce") {
        document.getElementById("sauce-receipt").innerHTML = "No Sauce &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$0.00";
    }
}

// Get's veggie input and prints out items and prices
function getVeggiePrice() {
    // finds which inputs were checked
    veggieList = document.querySelectorAll('input[name="veggies"]:checked');
    var price = 0;
    var veggieDisplay = "";
    // Go through list and add them
    for (i=0; i<veggieList.length; i++) {

        var veggie = veggieList[i].value;
        // if it is the first meat, price = 0, or other, price = 3
        if (i==0) {
            veggieDisplay = veggie + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$0.00";
        } else {
            price = price + 1;
            veggieDisplay = veggieDisplay + "<br><br>" + veggie + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp +$1.00";
        }
    }
    if (veggieDisplay == "") {
        return price;
    }
    else {
        document.getElementById("veggie-receipt").innerHTML = veggieDisplay;
        return price;
    }
}


function displayReceipt() {
    // start total at 0
    var total = 0;
    
    // Sets base price
    total = getSizePrice();

    // Add Meats
    total = total + getMeatPrice();

    // Add Cheese
    total = total + getCheesePrice();

    // Add Crust
    total = total + getCrustPrice();

    // Prints Sauce Type
    getSauce();

    // Add Veggies
    total = total + getVeggiePrice();

    document.getElementById("total").innerHTML = "Total: &nbsp &nbsp $" + total + ".00";
    




}







