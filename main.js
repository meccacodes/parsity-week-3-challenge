import './style.css';

// console.log("testing");
// Scenario:
// The code for a Star Wars Character Management System has been written, but it’s full of bugs! Your mission is to debug the code so each function works correctly.

// Instructions:

// 	1.	Read through each function and identify the bugs.
// 	2.	Fix the bugs so that the characters can perform their actions as expected.
// Shared prototype for all Star Wars characters
const characterPrototype = {
  attack() {
    console.log(`${this.name} attacks with ${this.weapon}.`); // BUG: had to add the this keyword
  },

  travel() {
    console.log(`${this.name} travels through space.`); // BUG? or correct? - correct!
  },
  
  // BUG: Needed triple equals, strict equals for if statement
  forcePower() {
    if ((this.side === "Jedi") || (this.side === "Sith")) {
      console.log(`${this.name} uses the Force!`);
    } else {
      console.log(`${this.name} does not possess the Force.`);
    }
  }
};

// Create specific characters linked to characterPrototype
const luke = Object.create(characterPrototype);
luke.name = "Luke Skywalker";
luke.weapon = "lightsaber";
luke.side = "Jedi";

const vader = Object.create(characterPrototype);
vader.name = "Darth Vader";
vader.weapon = "red lightsaber";
vader.side = "Sith";

const han = Object.create(characterPrototype);
han.name = "Han Solo";
han.weapon = "blaster";
han.side = "Smuggler";

// Test each function to see where the bugs are
luke.attack();    // Expected: "Luke Skywalker attacks with lightsaber."
vader.attack();   // Expected: "Darth Vader attacks with red lightsaber."
han.attack();     // Expected: "Han Solo attacks with blaster."

luke.travel();    // Expected: "Luke Skywalker travels through space."
vader.travel();   // Expected: "Darth Vader travels through space."

luke.forcePower(); // Expected: "Luke Skywalker uses the Force!"
vader.forcePower();// Expected: "Darth Vader uses the Force!"
han.forcePower();  // Expected: "Han Solo does not possess the Force."