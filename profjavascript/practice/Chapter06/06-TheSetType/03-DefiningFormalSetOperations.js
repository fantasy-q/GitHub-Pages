class XSet extends Set {
  union(...sets) {
    return XSet.union(this, ...sets)
  }

  intersection(...sets) {
    return XSet.intersection(this, ...sets);
  }

  difference(set) {
    return XSet.difference(this, set);
  }

  symmetricDifference(set) {
    return XSet.symmetricDifference(this, set);
  }

  cartesianProduct(set) {
    return XSet.cartesianProduct(this, set);
  }

  powerSet() {
    return XSet.powerSet(this);
  }

  // Returns union of two or more sets.
  static union(a, ...bSets) {
    const unionSet = new XSet(a);
    for (const b of bSets) {
      for (const bValue of b) {
        unionSet.add(bValue);
      }
    }
    return unionSet;
  }

  // Returns intersection of two or more sets.
  static intersection(a, ...bSets) {
    const intersectionSet = new XSet(a);
    for (const aValue of intersectionSet) {
      for (const b of bSets) {
        if (!b.has(aValue)) {
          intersectionSet.delete(aValue);
        }
      }
    }
    return intersectionSet;
  }

  // Returns difference of exactly two sets.
  static difference(a, b) {
    const differenceSet = new XSet(a);
    for (const bValue of b) {
      if (a.has(bValue)) {
        differenceSet.delete(bValue);
      }
    }
    return differenceSet;
  }


  // Returns symmetric difference of exactly two sets.
  static symmetricDifference(a, b) {
    // By definition, the symmetric difference can be expressed as
    // (a union b) – (a intersection b)
    return a.union(b).difference(a.intersection(b));
  }

  // Returns cartesian product (as array pairs) of exactly two sets.
  // Must return set of arrays since cartesian product may contain
  // pairs of identical values.
  static cartesianProduct(a, b) {
    b = b ? b : a;
    const cartesianProductSet = new XSet();
    for (const aValue of a) {
      for (const bValue of b) {
        cartesianProductSet.add([aValue, bValue]);
      }
    }
    return cartesianProductSet;
  }

  // Returns power set of exactly one set.
  static powerSet(a) {
    const powerSet = new XSet().add(new XSet());
    for (const aValue of a) {
      for (const set of new XSet(powerSet)) {
        powerSet.add(new XSet(set).add(aValue));
      }
    }
    return powerSet;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  /** 
   * Declaring static constants in ES6 classes?
   * https://stackoverflow.com/a/50270816
   */
  static get EmptySet() { return new XSet() };

  // Returns the number of elements of set A
  static cardinality(S) {
    return S.size;
  }
  // Returns true if sets have the same members
  /**
  * comparing ECMA6 sets for equality
  * https://stackoverflow.com/a/44827922
  */
  equals(S) {
    return XSet.equality(this.S);
  }

  static equality(A, B) {
    return A.size === B.size &&
      [...A].every(aValue => B.has(aValue));
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#implementing_basic_set_operations
  complement(U) {
    if (this.isSubset(U)) {
      return XSet.complement(U, this)
    }
    throw new Error('Mathmatically Undefined');
  }
  static complement(U, S) {
    if (S.isSubset(U)) {
      const cUs = new XSet(U);
      for (const SValue of S) {
        cUs.delete(SValue);
      }
      return cUs;
    }
    return;
  }

  // Returns true if A is a superset of B
  isSuperset(subset) {
    return XSet.isSuperset(this, subset);
  }
  static isSuperset(set, subset) {
    // for (const val of subset) {
    //   if (!set.has(val)) {
    //     return false
    //   }
    // }
    // return true
    return [...subset].every(subsetValue => set.has(subsetValue));
  }
  // Returns true if A is a proper superset of B
  isProperSuperset(subset) {
    return XSet.isProperSuperset(this, subset);
  }
  static isProperSuperset(set, subset) {
    return !XSet.equality(set, subset) && XSet.isSuperset(set, subset);
  }

  // Returns true if A is a subset of B
  isSubset(superset) {
    return XSet.isSubset(this, superset);
  }
  static isSubset(set, superset) {
    return [...set].every(setValue => superset.has(setValue));
  }

  // Returns true if A is a proper subset of B
  isProperSubset(superset) {
    return XSet.isProperSubset(this, superset);
  }
  static isProperSubset(set, superset) {
    return !XSet.equality(set, superset) && XSet.isSubset(set, superset);
  }
}

class XNumberSet extends XSet {
  sort() {
    return XNumberSet.sort(this);
  }

  static sort(S) {
    const sortedS = new XNumberSet([...S].sort());
    return sortedS;
  }
}

module.exports = { XSet, XNumberSet };