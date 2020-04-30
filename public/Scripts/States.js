class State {
    constructor(player, government) {
      this.player = player;
      this.government =government;
    }

    get player(){
        return this.player;
    }

    set player(player){
        this.player = player;
    }

    get government(){
        return this.government;
    }

    set government(government){
        this.government = government;
    }


    get population(){
        return this.population;
    }

    set population(population){
        this.population = population;
    }

    get currency(){
        return this.currency;
    }

    set currency(currency){
        this.currency = currency;
    }

    get resources(){
        return this.resources;
    }

    set resources(resources){
        this.resources = resources;
    }

    get happiness(){
        return this.happiness;
    }

    set happiness(happiness){
        this.happiness = happiness;
    }

    get actions(){
        return this.actions;
    }

    set actions(actions){
        this.actions = actions;
    }



  }

// function selectGovt1() {
//     //Checks if first turn
//     var element = document.getElementById('currentTurn').innerHTML;
//     if (element < 1) {
//     //Initializing country values based on government type
//     var currency = document.getElementById('currency').innerHTML;
//     currency = parseInt(currency) + 2500;
//     document.getElementById('currency').innerHTML = currency;

//     var resources = document.getElementById('resources').innerHTML;
//     resources = parseInt(resources) + 3000;
//     document.getElementById('resources').innerHTML = resources;
//     }
// }

// function selectGovt2() {
//     //Checks if first turn
//     var element = document.getElementById('currentTurn').innerHTML;
//     if (element < 1) {
//     //Initializing country values based on government type
//      var currency = document.getElementById('currency').innerHTML;
//     currency = parseInt(currency) + 5000;
//     document.getElementById('currency').innerHTML = currency;

//     var resources = document.getElementById('resources').innerHTML;
//     resources = parseInt(resources) + 1000;
//     document.getElementById('resources').innerHTML = resources;
//     }
// }
