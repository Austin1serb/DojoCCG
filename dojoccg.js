class Unit {
    constructor(name, cost, power, resilience) {
      this.name = name;
      this.cost = cost;
      this.power = power;
      this.resilience = resilience;
    }
  
    attack(target) {
      if (target instanceof Unit) {
        target.resilience -= this.power;
      } else {
        throw new Error("Target must be a unit!");
      }
    }
  }
  
  class Effect {
    constructor(name, cost, text, stat, magnitude) {
      this.name = name;
      this.cost = cost;
      this.text = text;
      this.stat = stat;
      this.magnitude = magnitude;
    }
  
    play(target) {
      if (target instanceof Unit) {
        if (this.stat === "resilience") {
          target.resilience += this.magnitude;
        } else if (this.stat === "power") {
          target.power += this.magnitude;
        }
      } else {
        throw new Error("Target must be a unit!");
      }
    }
  }
  
  // Create the units and effects
  const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
  const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
  
  const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
  const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
  const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
  
  // Function to update the HTML elements with the current card data
  function updateCardElements() {
    document.getElementById('red-belt-ninja-power').textContent = redBeltNinja.power;
    document.getElementById('red-belt-ninja-resilience').textContent = redBeltNinja.resilience;
  
    document.getElementById('black-belt-ninja-power').textContent = blackBeltNinja.power;
    document.getElementById('black-belt-ninja-resilience').textContent = blackBeltNinja.resilience;
  }
  
  // Function to add an action to the actions list in the HTML
  function addActionToLog(action) {
    const actionsDiv = document.getElementById('actions');
    const actionElement = document.createElement('p');
    actionElement.textContent = action;
    actionsDiv.appendChild(actionElement);
  }
  
  // Function to play Hard Algorithm
  function playHardAlgorithm() {
    addActionToLog("Playing Hard Algorithm on Red Belt Ninja...");
    hardAlgorithm.play(redBeltNinja);
    updateCardElements();
  }
  
  // Function to play Unhandled Promise Rejection
  function playUnhandledPromiseRejection() {
    addActionToLog("Playing Unhandled Promise Rejection on Red Belt Ninja...");
    unhandledPromiseRejection.play(redBeltNinja);
    updateCardElements();
  }
  
  // Function to play Pair Programming
  function playPairProgramming() {
    addActionToLog("Playing Pair Programming on Red Belt Ninja...");
    pairProgramming.play(redBeltNinja);
    updateCardElements();
  }
  
  // Function to attack Black Belt Ninja
  function attack() {
    addActionToLog("Red Belt Ninja attacks Black Belt Ninja...");
    redBeltNinja.attack(blackBeltNinja);
    updateCardElements();
  }
  