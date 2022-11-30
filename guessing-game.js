function guessingGame() {
  const rand = Math.floor(Math.random() * 101);
  let counter = 0;
  let play = true;
  
  return function game(num){
    if(!play) return "The game is over, you already won!";
    while(play){
      counter ++
      if(num>rand){
        return `${num} is too high!`};
      if(num<rand) {
        return `${num} is too low!`};
      if(num===rand){
        play = false;
        return `You win! You found ${num} in ${counter} guesses.`
      }
    }
  }

}


module.exports = { guessingGame };
