Function.prototype.myDebounce = function (interval) {
  let timeout;
  return (...args) => {
    const fcnCall = () => {
      timeout = null;
      this(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(fcnCall, interval);
  }
}

// Testing it out

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}
const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

queryForHelloWorld();

searchBar.search = searchBar.search.myDebounce(500);