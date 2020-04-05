function nextTurn() {
    var element = document.getElementById('currentTurn').innerHTML;
    element++;
    document.getElementById('currentTurn').innerHTML = element;

    var population = document.getElementById('population').innerHTML;
    population = parseInt(population) + 50;
    document.getElementById('population').innerHTML = population;

    var currency = document.getElementById('currency').innerHTML;
    currency = parseInt(currency) + 2000;
    document.getElementById('currency').innerHTML = currency;

    var resources = document.getElementById('resources').innerHTML;
    resources = parseInt(resources) + 250;
    document.getElementById('resources').innerHTML = resources;
    
    var happiness = document.getElementById('happiness').innerHTML;
    happiness = parseInt(happiness)+5;
    document.getElementById('happiness').innerHTML = happiness;
    
}