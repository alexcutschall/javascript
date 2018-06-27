class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(quantity) {
    if (typeof quantity === 'number'){
      this._numberOfStudents = quantity;
    }
    else {
        console.log("This is the wrong type of data!");
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`)
  }

  pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(Math.random() * substituteTeachers.length);

    let randomTeacher =
        substituteTeachers[randomNumber];
    console.log(randomTeacher);
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, "high", numberOfStudents);
    this._sportsTeam = sportsTeam;
  }

  get sportsTeam() {
    return this._sportsTeam;
  }
}

let lorraineHansbury = new Primary("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

console.log(lorraineHansbury.level);
console.log(lorraineHansbury.quickFacts());
lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
