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

function scenario2(){
    //Introduce Virus
    var virus = alert("A deadly virus now exists in the world");

    //Amount of currency needed to find a cure
    var vResearchNeed = 10000;

    //Amount needed for virus to die out
    var vPeopleCNeed = 5000;
    var vPeopleRNeed = 7000;
    
    //Initial value of how many people die after the virus is first introduced
    var liveslost = 100;

    //Country Values
    var population = document.getElementById('population').innerHTML;
    var currency = document.getElementById('currency').innerHTML;
    var resources = document.getElementById('resources').innerHTML;

    if(vResearchNeed > 0 || vPeopleCNeed > 0 && vPeopleRNeed > 0){
        population = parseInt(population) - liveslost;
        document.getElementById('population').innerHTML = population;

        var peopleCNeed = confirm("Your country's people are suffering. Would you like to give some currency to help them?");
        if (peopleCNeed){
            var cDonate = parseInt(prompt("Enter your chosen amount currency you'd like to donate"));
            currency = parseInt(currency) - cDonate;
            document.getElementById('currency').innerHTML = currency;
        } else{
            liveslost += 10;
        }

        var peopleRNeed = confirm("Your country's people are suffering. Would you like to give some resources to help them?");
        if (peopleRNeed){
            var rDonate = parseInt(prompt("Enter your chosen amount resources you'd like to donate"));
            resources = parseInt(resources) - rDonate;
            document.getElementById('resources').innerHTML = resources;
        } else{
            liveslost = liveslost * 2;
        }
        
        var researchNeed = confirm("People are suffering from this virus. Would you like to give some currency to help find a cure?");
        if (researchNeed){
            var rchDonate = parseInt(prompt("Enter your chosen amount currency you'd like to donate to finding a cure"));
            currency = parseInt(currency) - rchDonate;
            document.getElementById('currency').innerHTML = currency;
        } else{
            alert("The world continues to suffer...");
        }
    } else{
        liveslost = 0;
    }
}