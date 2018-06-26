let menu = {
   get courses() {
    return {
      appetizers: this._courses._appetizers,
      mains: this._courses._mains,
      desserts: this._courses._desserts
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {name: dishName, price: dishPrice}
    if (courseName === 'appetizer') {
      this._courses._appetizers.push(dish);
    } else if (courseName === 'main') {
      this._courses._mains.push(dish);
    } else if (courseName === 'dessert') {
      this._courses._desserts.push(dish);
    } else {
      console.log("I don't know that course type");
    }
	},

  getRandomDishFromCourse(courseName){

    if (courseName === 'appetizer') {
      let appetizers = this._courses._appetizers;
      var randomNumberIndex = Math.floor(Math.random() * appetizers.length);
      return appetizers[randomNumberIndex];

    } else if (courseName === 'main') {
      let mains = this._courses._mains;
      var randomNumberIndex = Math.floor(Math.random() * mains.length);
      return mains[randomNumberIndex];

    } else if (courseName === 'dessert') {
      let desserts = this._courses._desserts;
      var randomNumberIndex = Math.floor(Math.random() * desserts.length);
      return desserts[randomNumberIndex];

    } else {
      console.log("Unknown Course Type")
    }
  },

  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizer');
    let main = this.getRandomDishFromCourse('main');
    let dessert = this.getRandomDishFromCourse('dessert');
    let totalPrice = appetizer.price + main.price + dessert.price;
    console.log(`Your appetizer is ${appetizer.name}. Your main course is ${main.name}. Your dessert is ${dessert.name}. The total price is ${totalPrice}.`)
  },

  _courses: {
  	_appetizers: [],
  	_mains: [],
  	_desserts: [],
    get appetizers() {
     return this._appetizers;
    },
    set appetizers(newAppetizer) {
      this._appetizers.push(newAppetizer);
    },
    get mains() {
      return this._mains;
    },
    set mains(newMain) {
      this._mains.push(newMain);
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(newDessert) {
      this._desserts.push(newDessert);
    }
  }

};

menu.addDishToCourse('appetizer', 'salad', 12)
menu.addDishToCourse('appetizer', 'fries', 8)
menu.addDishToCourse('appetizer', 'onion rings', 20)
menu.addDishToCourse('appetizer', 'seitan wings', 25)
menu.addDishToCourse('main', 'burger', 30)
menu.addDishToCourse('main', 'tacos', 32)
menu.addDishToCourse('main', 'fried chicken', 28)
menu.addDishToCourse('main', 'pancakes', 26)
menu.addDishToCourse('dessert', 'ice cream', 10)
menu.addDishToCourse('dessert', 'cake', 12)

let meal = menu.generateRandomMeal();
console.log(meal);
