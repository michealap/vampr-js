class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    let currentVampr = this;
    while (currentVampr.creator) {
      currentVampr = currentVampr.creator;
      count++;
    }
    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  
  closestCommonAncestor(vampire) {
    let X = this.lineage;
    let Y = vampire.lineage;

    if (X.length !== 0 && Y.length !== 0) {
      for (let ancestor of X) {
        for (let candidate of Y) {
          if (ancestor === candidate) return ancestor;
        }
      }
    } else {
      return (X.length === 0) ? this : vampire;
    }
  }

  // helper function to get current vampire's line of creators to the root node
  // returns array of vampires, including the vampire itself
  get lineage() {
    let currentVamp = this;
    let ancestors = [];
    while (currentVamp !== null) {
      ancestors.push(currentVamp);
      currentVamp = currentVamp.creator;
    }
    return ancestors;
  }
}
module.exports = Vampire;

