class LunchBox {
  constructor(name) {
    this.name = name;
    this.inventory = [];
  }

  addItem(item) {
    this.inventory.push(item);
    console.log(`${item} has been added to ${this.name}'s lunchbox.`);
  }

  removeItem(item) {
    const itemIndex = this.inventory.indexOf(item);
    if (itemIndex > -1) {
      this.inventory.splice(itemIndex, 1);
      console.log(`${item} has been removed from ${this.name}'s lunchbox.`);
    } else {
      console.log(`${item} is not in the lunchbox.`);
    }
  }

  listItem() {
    console.log(`${this.name}'s Lunchbox Inventory:`);
    for (let i = 0; i < this.inventory.length; i++) {
      console.log(`- ${this.inventory[i]}`);
    }
  }
}

let myLunchbox = new LunchBox("Maria's");
myLunchbox.addItem("sandwich");
myLunchbox.addItem("apple");
myLunchbox.addItem("cookie");
myLunchbox.addItem("carrots");

myLunchbox.listItem(); 

myLunchbox.removeItem("apple");
myLunchbox.addItem("juice box");

myLunchbox.listItem();
