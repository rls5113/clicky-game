import React, {Component} from 'react';
import Wrapper from "./components/Wrapper";
import MyNavbar from "./components/MyNavbar";
import ImageCard from "./components/ImageCard";
import imgs from "./images.json";
import './App.css';

class App extends Component {

  state = {
  balls: [],
  score: 0,
  best: 0,
  guessed: []
};

componentDidMount() {
  this.shuffle();
}

shuffle = () => {
  const numImages = 12;
  let reshuffle = [];
  for(let i=0;i<numImages;i++) {
    let randomIdx = Math.floor(Math.random() * imgs.length);
    // console.log("random: "+randomIdx);
    reshuffle.push(imgs[randomIdx]);
  }
  // console.log(reshuffle);
  this.setState({balls:reshuffle});
};
reset = () => {
  this.setState({
    guessed:[],
    score: 0
    })
}
checkStatus = (id) => {
  console.log("checkStatus: ");
  if(this.state.guessed.includes(id)){
    console.log(id);
    console.log(this.state);
    console.log("Game Over!");
    //reset
    this.reset();
    //shuffle
    this.shuffle();
  } else {
    console.log(id);
    //shuffle
    this.shuffle();
   //add to guessed
   this.state.guessed.push(id);
     //increment
     console.log(this.state);
    this.setState({
      score: this.state.score + 1
    }); 
    
  }
    //if score is > best, reset best
    if(this.state.score > this.state.best){
      this.setState({
        best: this.state.score
      });
    }

    //if score = 16, declare the winner
    if(this.state.score === 16){
      //declare winner
      console.log("Winner!");
      this.reset();
      this.shuffle();
    }

}

  render() {
  return (
   <Wrapper>
   <MyNavbar score={this.state.score} best={this.state.best}/>  
   {this.state.balls.map((img,i) => (
        <ImageCard
          id={img.id}
          key={i}
          name={img.name}
          image={img.image}
          checkStatus={this.checkStatus}

        />
      ))}
   </Wrapper>
  )};
}

export default App;
