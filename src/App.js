import './App.css';
import React from 'react';
import Fruit from './fruit';

let fruitImageUrls = {
  apple: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apple.png",
  apricot: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apricot.png",
  banana: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/banana.png",
  blueberry: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/blueberry.png",
  cherry: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/cherry.png",
  guava: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/guava.png",
  lemon: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/lemon.png",
  mango: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/mango.png",
  orange: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/orange.png",
  pear: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pear.png",
  pineapple: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/pineapple.png",
  raspberry: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/raspberry.png",
  strawberry: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/strawberry.png",
  tomato: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/tomato.png",
  watermelon: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/watermelon.png"
}

let multipleFruitTest = [
{
  imgUrl: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apple.png",
  description: { "genus": "Malus", "name": "Apple", "id": 6, "family": "Rosaceae", "order": "Rosales", "nutritions": { "carbohydrates": 11.4, "protein": 0.3, "fat": 0.4, "calories": 52, "sugar": 10.3 } }
},
{
  imgUrl: "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/apricot.png",
  description: { "genus": "Prunus", "name": "Apricot", "id": 35, "family": "Rosaceae", "order": "Rosales", "nutritions": { "carbohydrates": 3.9, "protein": 0.5, "fat": 0.1, "calories": 15, "sugar": 3.2 } }
}
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fruitDescriptions: {}
    }
  }

  componentDidMount() {
    // fetch img urls
    fetch('https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/fruit-images.json')
      .then(response => response.json())
      .then(data => console.log(data));

    for(let key in fruitImageUrls) {
      fetch(`https://www.fruityvice.com/api/fruit/${key}`)
        .then(response => response.json())
        .then(data => console.log(data));
    }
  }

  render() {
    return (
      <div className="fruit-layout">
        {
          multipleFruitTest.map(fruit => (
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

export default App;
