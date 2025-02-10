/*const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      console.log("Doing stuff!");
      this.property = 'New Value!';
    }
};

console.log(myObject.otherProperty);
myObject["obnoxious property"]();
console.log(myObject.property);*/

/*const playerTwo = "Loki";
const playerOneHealth = 100;
const playerTwoHealth = 100;


const playerOne = {
  name: "Odin",
};*/

//object constructors
function Player(name, health){
  this.name = name;
  this.health = health;
  console.log(this.name);
  console.log(this.health);
}

let player1 = new Player("Mark", 100);

return(player1.name);