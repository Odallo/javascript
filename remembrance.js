const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      console.log("Doing stuff!");
      this.property = 'New Value!';
    }
};

console.log(myObject.otherProperty);
myObject["obnoxious property"]();
console.log(myObject.property);