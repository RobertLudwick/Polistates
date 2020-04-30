function selectGovt1() {
    //Checks if first turn
    var element = document.getElementById('currentTurn').innerHTML;
    if (element < 1) {
        var selectGovt = confirm("You're about to select Country 1, are you sure?");
        if (selectGovt == true) {
            //Initializing country values based on government type
            var currency = document.getElementById('currency').innerHTML;
            currency = parseInt(currency) + 2500;
            document.getElementById('currency').innerHTML = currency;

            var resources = document.getElementById('resources').innerHTML;
            resources = parseInt(resources) + 3000;
            document.getElementById('resources').innerHTML = resources;
            alert("You have selected Country 1.");
            document.getElementById(Govt1.id).disabled = true;
            document.getElementById(Govt2.id).disabled = true;
            return true;
        }
        else {
            alert("You have not selected a country yet.");
            return false;
        }
    }
}

function selectGovt2() {
    //Checks if first turn
    var element = document.getElementById('currentTurn').innerHTML;
    if (element < 1) {
        var selectGovt = confirm("You're about to select Country 2, are you sure?");
        if (selectGovt == true) {
            //Initializing country values based on government type
            var currency = document.getElementById('currency').innerHTML;
            currency = parseInt(currency) + 5000;
            document.getElementById('currency').innerHTML = currency;

            var resources = document.getElementById('resources').innerHTML;
            resources = parseInt(resources) + 1000;
            document.getElementById('resources').innerHTML = resources;
            alert("You have selected Country 2.");
            document.getElementById(Govt1.id).disabled = true;
            document.getElementById(Govt2.id).disabled = true;
            return true;
        }
        else {
            alert("You have not selected a country yet.");
            return false;
        }
    }
}

function incrementTurn(turn) {
    //Increase turn number
    var element = document.getElementById('currentTurn').innerHTML;
    element = turn;
    document.getElementById('currentTurn').innerHTML = element;

    //Increase country values
    var population = document.getElementById('population').innerHTML;
    population = parseInt(population) + 1000;
    document.getElementById('population').innerHTML = population;

    var currency = document.getElementById('currency').innerHTML;
    currency = parseInt(currency) + 2500;
    document.getElementById('currency').innerHTML = currency;

    var resources = document.getElementById('resources').innerHTML;
    resources = parseInt(resources) + 1500;
    document.getElementById('resources').innerHTML = resources;
    
}

function scenario1(){
    var worldfair = confirm("Would you like to contribute to the world fair?");

    if (worldfair){
        //Pull the values 
        var population = document.getElementById('population').innerHTML;
        population = parseInt(population) - 100;
        document.getElementById('population').innerHTML = population;

        var currency = document.getElementById('currency').innerHTML;
        currency = parseInt(currency) - 1000;
        document.getElementById('currency').innerHTML = currency;

        var resources = document.getElementById('resources').innerHTML;
        resources = parseInt(resources) - 500;
        document.getElementById('resources').innerHTML = resources;
        
        //Increase amount of wf(worldfair) contributions
        var wf = document.getElementById('worldfair').innerHTML;
        wf++;
        document.getElementById('worldfair').innerHTML = wf;
    }
    else{
        alert("You didn't contribute to the world fair... shame!");
    }
}