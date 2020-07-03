const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
const finalPosition = function (moves) {
  let goodPosition = [0,0];
  for (let move of moves) {
    switch (move) {
      case "north" : 
        goodPosition[1] = goodPosition[1] + 1 ;
        break;
      case "south" : 
        goodPosition[1] = goodPosition[1] - 1 ;
        break;
      case "east" : 
        goodPosition[0] = goodPosition[0] + 1 ;
        break;
      case "west" : 
        goodPosition[0] = goodPosition[0] - 1 ;
    }
  }
  return goodPosition;
}
console.log(finalPosition(moves));