import React, { Component } from 'react';
class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

  getMyStorage = () => {
    var myCookieData = document.cookie.replace(/(?:(?:^|.*;\s*)Year\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var myLocalStorageData = localStorage.getItem("Paragon");
    var mySessionStorageData = sessionStorage.getItem("frontend");
    const arr = [];
    arr.push(myCookieData,myLocalStorageData,mySessionStorageData);
    return arr;
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setMyStorage()}>Click me</button>
        <button onClick={() => this.getMyStorage()}>Another</button>
      </div>
    )
  }
}
export default App;

