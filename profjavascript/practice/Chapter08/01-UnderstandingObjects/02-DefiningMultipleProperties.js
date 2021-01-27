let book = {};
Object.defineProperties(book, {
  year_: {
    value: 2017,
    writable: true,
  },

  edition: {
    value: 1,
    writable: true,
  },

  year: {
    get() {
      return this.year_;
    },

    set(newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    }
  }
});

console.log(book);
console.log(book.year);
console.log(book.edition);
book.year = new Date().getFullYear();
console.log(book.year);
console.log(book.edition);

/**
 * When you are using Object.defineProperty(), the values for configurable, enumerable,
 * and writable default to false unless otherwise specified.
 */