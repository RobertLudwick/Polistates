// Here people will pick their states

function selectGovt1() {
    //Checks if first turn
    var element = document.getElementById('currentTurn').innerHTML;
    if (element < 1) {
    //Initializing country values based on government type
    var currency = document.getElementById('currency').innerHTML;
    currency = parseInt(currency) + 2500;
    document.getElementById('currency').innerHTML = currency;

    var resources = document.getElementById('resources').innerHTML;
    resources = parseInt(resources) + 3000;
    document.getElementById('resources').innerHTML = resources;
    }
}

function selectGovt2() {
    //Checks if first turn
    var element = document.getElementById('currentTurn').innerHTML;
    if (element < 1) {
    //Initializing country values based on government type
     var currency = document.getElementById('currency').innerHTML;
    currency = parseInt(currency) + 5000;
    document.getElementById('currency').innerHTML = currency;

    var resources = document.getElementById('resources').innerHTML;
    resources = parseInt(resources) + 1000;
    document.getElementById('resources').innerHTML = resources;
    }
}
