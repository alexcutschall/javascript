class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }

  getAverageRating() {
    let ratingsLength = this._ratings.length;
		    let ratingTotal = this._ratings.reduce(function(total, rating) {
      return total + rating;
    });
    return ratingTotal / ratingsLength;
  };

  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

let harryPotter = new Book("Harry Potter", "JK Rowling", 300);

let pirates = new Movie("Pirates of the Caribean", "some dude", 320);

let cd = new CD("Lost and Found", "Will Smith")
