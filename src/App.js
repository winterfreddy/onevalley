import './App.css';
import React from 'react';
import Fruit from './fruit';

function parseLink(url) {
  let arr = url.split('/');
  arr = arr[arr.length-1].split('.');
  return arr[0];
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruitArr: [],
      fruitDescriptions: new Set()
    }
  }

  fetchImages() {
    fetch('https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json')
      .then(response => response.json())
      .then(data => this.setState({fruitArr: data}))
  }
  
  fetchData() {
    for(let i = 0; i < this.state.fruitArr.length; i++) {
      let fruitName = parseLink(this.state.fruitArr[i]);
      fetch(`https://www.fruityvice.com/api/fruit/${fruitName}`)
        .then(response => response.json())
        .then(data => this.setState((prevState) => {
          let obj = {imgUrl: this.state.fruitArr[i], description: data};
          if(this.state.fruitDescriptions.size < this.state.fruitArr.length) {
            return {fruitDescriptions: new Set(prevState.fruitDescriptions).add(obj)}
          }
        }))
    }
  }

  render() {
    if(!this.state.fruitArr.length) {
      this.fetchImages();
    }
    else if(!this.state.fruitDescriptions.size) {
      this.fetchData();
    }
    
    if(this.state.fruitDescriptions) {
      return (
        <div className="fruit-layout">
          {
            Array.from(this.state.fruitDescriptions).map(fruit => (
              <Fruit
                key={fruit.description.id}
                description={fruit.description}
                imgUrl={fruit.imgUrl}
              />
            ))
          }
        </div>
      );
    }
  }
}

export default App;
