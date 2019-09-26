//Function that is executed when the button is clicked
//We are passing an anonymous function ( a function without a name to the button's onclick handler when it's clicked )
function calculateTip() {
  //  (bill amount, service quality, number of people splitting the bill)
    var billAmount = document.getElementById("billAmt").value;
    console.log(billAmount);

    var serviceQuality = document.getElementById("serviceQual").value;
    console.log(serviceQuality);
    var numberOfPeople = document.getElementById("numPeople").value;
    console.log(numberOfPeople);

    //Validate their input to make sure what they input is visible)

    //Bill Amount - words, negative values, empty string

    var amount= Number(billAmount); //Try to turn the value of billAmount into a number
    
    if(isNaN(amount) || amount <= 0) {
        //If amount can't be converted into a number or is less than or equal to 0, show an error.
        alert("Invalid input for bill amount");
        return; //Return to exit the function if the bill amount is invalid 
    }

    //If we make it here, the amount is good 
    //Service Selector - Not choosing an option 
    var service = Number(serviceQuality); //Convert serviceQuality into a number 

    if(service === 0) {
        alert("You must pick an option for service quality")
    }
    //Number of People - Words, Negative Values , Empty Strings , Decimal Values
    var people = Number(numberOfPeople);
    if (isNaN(people) || people < 1 ) {
        alert("Enter a valid number of people splitting the bill. ");
        return;
    }

    //Calculate the amount of the tip each person needs to pay 
    var tipPerPerson = (amount * service ) / people;
    tipPerPerson = tipPerPerson.toFixed(2); //Round the tip per person to 2 decinal points
    console.log(tipPerPerson);
    //Display that information to the user 
    var tipResult = "Your tip is $" + tipPerPerson;
    document.getElementById("tipAmount").style.display = "block";
    document.getElementById("tipAmount").innerText = tipResult;

}

//Function that is executed when the button is clicked 
//We are passing an anonymous function(a function without a name to the button's onclick handler when it's clicked)
document.getElementById("calculateTip").onclick= function() {
    calculateTip();
} 

document.getElementById("reset").onclick = function() {
    document.getElementById("billAmt").value = "";
    document.getElementById("serviceQual").value = 0;
    document.getElementById("numPeople").value = "";
    document.getElementById("tipAmount").style.display = "none";

}