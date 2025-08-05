class LunchBox {
  constructor(name) {
    this.name = name;
    this.inventory = [];
  }
  addItem(item) {
    this.inventory.push(item);
    console.log(`added ${item} to ${this.name}'s lunchbox`);
  }
  removeItem(item) {
    console.log(`${item} has been removed from ${this.name}'s inventory`);
    this.inventory.splice(this.inventory.indexOf(item), 1);
  }
  listItem() {
    console.log(`${this.name}'s inventory`);
    for (let i = 0; i <= this.inventory.length; i++) {
      console.log(`- ${this.inventory[i]}`);
    }
  }
}

let myLunchbox = new LunchBox("Alex's");
myLunchbox.addItem("burger");
myLunchbox.removeItem("fries"); 
myLunchbox.listItem(); 
