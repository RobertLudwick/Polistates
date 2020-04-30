class govt {
    constructor(team){
        this.population = _population;
        this.currency = _currency;
        this.resources = _resources;
        this.happiness = _happiness;
        this.actions = _actions;
    }
    //-----Class Properties-----
    //team[]; 
    //-----Population-----
    get population(){
      return this.population;
    }
    set population(pchg){
      this.population += pchg;
    }
    
    //-----Currency-----
    get currency(){
      return this.currency;
    }
    set currency(cur){
      this.currency += cur;
    }
    
    //-----Resources-----
    get resources(){
      return this.resources;
    }
    set resources(res){
      this.resources += res;
    }
    
    //-----Happiness-----
    get happiness(){
      return this.happiness;
    }
    set happiness(hap){
      this.happiness += hap;
    }
    
    //-----Actions-----
    get actions(){
      return this.actions;
    }
    set actions(act){
      this.actions += act;
    }
  };
  
  govt.population = 10000;
  govt.currency = 1000;
  govt.resources = 5000;
  govt.happiness = 1;
  govt.actions = 3;
  
  console.log(population);
  console.log(currency);
  console.log(resources);
  console.log(happiness);
  console.log(actions);
  