 var containerWidth = 500;
 var containerHeight = 500;
 var stage = new Kinetic.Stage({
        container: 'container',
        width: containerWidth,
        height: containerHeight
      });

var model = [["", "", ""],
             ["", "", ""],
             ["", "", ""]];

var move = "X"; //true for Xs, false for Os

function checkBoard(move)
{

  //horizonal
  if(model[0][0] == move && model[0][1] == move && model[0][2] == move) //top row
    return true;

  else if(model[1][0] == move && model[1][1] == move && model[1][2] == move) //middle row
    return true;

  else if(model[2][0] == move && model[2][1] == move && model[2][2] == move) //bottom row
    return true;

  else if(model[0][2] == move && model[1][1] == move && model[2][0] == move) //cell 3 diagonal
    return true;

  else if(model[0][2] == move && model[1][2] == move && model[2][2] == move) //collum 3
    return true;

  else if(model[0][1] == move && model[1][1] == move && model[2][1] == move)//collum 2
    return true;

  else if(model[0][0] == move && model[1][0] == move && model[2][0] == move)//collum 1
    return true;

  else if(model[0][0] == move && model[1][1] == move && model[2][2] == move)//cell 1 diagonal
    return true;

  else
    return false;
}

function boardFull()
{
  var spacesFilled = 0;
  for(var x = 0; x < model.length; x++){
    for(var y = 0; y < model.length; y++){
      if(model[x][y] != "")
        spacesFilled++;
    }
  }
  console.log(Math.pow(model.length, 2));
  if(spacesFilled == Math.pow(model.length, 2))
    return true;
  else
    return false;
}

function getWinner()
{
  if(checkBoard("X"))
    console.log("Xs Win");
  else if(checkBoard("O"))
    console.log("Os Win");
  else if(boardFull())
    console.log("Stalemate");
}

var layer = new Kinetic.Layer();

var scale = 5.0;

var gridLineV1 = new Kinetic.Line({
  points: [25*scale, 1*scale, 25*scale, 100*scale],
  stroke: 'white',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
});

var gridLineV2 = new Kinetic.Line({
  points: [75*scale, 1*scale, 75*scale, 100*scale],
  stroke: 'white',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
});

var gridLineH1 = new Kinetic.Line({
  points: [1*scale, 25*scale, 100*scale, 25*scale],
  stroke: 'white',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
});

var gridLineH2 = new Kinetic.Line({
  points: [1*scale, 75*scale, 100*scale, 75*scale],
  stroke: 'white',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
});

var board = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: containerWidth,
  height: containerHeight
});
layer.add(board);
board.on('mouseover mousedown', function (event) {
  console.log('x: ' + event.pageX + ' y: ' + event.pageY);
});

var sqr1 = new Kinetic.Rect({
  x: 0,
  y: 0,
  width: 116,
  height: 117,
  fill: 'blue',
});

var sqr1Text = new Kinetic.Text({
  x: sqr1.x,
  y: sqr1.y,
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});


sqr1.on('click', function (evt) {
  if(model[0][0] == ""){
    sqr1Text.setText(move);    
    model[0][0] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
  getWinner();
});

// add the shape to the layer
layer.add(sqr1);
layer.add(sqr1Text);

var sqr2 = new Kinetic.Rect({
  x: 133,
  y: 0,
  width: 233,
  height: 117,
  fill: 'blue',
});

var sqr2Text = new Kinetic.Text({
  x: sqr2.getX(),
  y: sqr2.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});

sqr2.on('click', function (evt) {
  if(model[0][1] == ""){
    sqr2Text.setText(move);
    model[0][1] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
  getWinner();
});


layer.add(sqr2);
layer.add(sqr2Text);

var sqr3 = new Kinetic.Rect({
  x: 384,
  y: 0,
  width: 116,
  height: 117,
  fill: 'blue',
});

var sqr3Text = new Kinetic.Text({
  x: sqr3.getX(),
  y: sqr3.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});

sqr3.on('click', function (evt) {
  if(model[0][2] == ""){
    sqr3Text.setText(move);
    model[0][2] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
  getWinner();
});

// add the shape to the layer
layer.add(sqr3);
layer.add(sqr3Text);


var sqr4 = new Kinetic.Rect({
  x: 0,
  y: 133,
  width: 116,
  height: 233,
  fill: 'blue',
});

var sqr4Text = new Kinetic.Text({
  x: sqr4.getX(),
  y: sqr4.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});


sqr4.on('click', function (evt) {
  if(model[1][0] == ""){
     sqr4Text.setText(move);
    model[1][0] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
    getWinner();
});

// add the shape to the layer
layer.add(sqr4);
layer.add(sqr4Text);


var sqr5 = new Kinetic.Rect({
  x: 133,
  y: 133,
  width: 233,
  height: 233,
  fill: 'blue',
});

var sqr5Text = new Kinetic.Text({
  x: sqr5.getX(),
  y: sqr5.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});

sqr5.on('click', function (evt) {
  if(model[1][1] == ""){
    sqr5Text.setText(move);
    model[1][1] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
    getWinner();
});

// add the shape to the layer
layer.add(sqr5);
layer.add(sqr5Text);


var sqr6 = new Kinetic.Rect({
  x: 384,
  y: 133,
  width: 116,
  height: 233,
  fill: 'blue',
});

var sqr6Text = new Kinetic.Text({
  x: sqr6.getX(),
  y: sqr6.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});

sqr6.on('click', function (evt) {
  if(model[1][2] == ""){
    sqr6Text.setText(move);
    model[1][2] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
    getWinner();
});

// add the shape to the layer
layer.add(sqr6);
layer.add(sqr6Text);


var sqr7 = new Kinetic.Rect({
  x: 0,
  y: 384,
  width: 116,
  height: 117,
  fill: 'blue',
});

var sqr7Text = new Kinetic.Text({
  x: sqr7.getX(),
  y: sqr7.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});

sqr7.on('click', function (evt) {
  if(model[2][0] == ""){
    sqr7Text.setText(move);
    model[2][0] = move;
    if(move == "x")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
    getWinner();
});

// add the shape to the layer
layer.add(sqr7);
layer.add(sqr7Text);


var sqr8 = new Kinetic.Rect({
  x: 133,
  y: 384,
  width: 233,
  height: 117,
  fill: 'blue',
});

var sqr8Text = new Kinetic.Text({
  x: sqr8.getX(),
  y: sqr8.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});

sqr8.on('click', function (evt) {
  if(model[2][1] == ""){
    sqr8Text.setText(move);    
    model[2][1] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
    getWinner();
});

// add the shape to the layer
layer.add(sqr8);
layer.add(sqr8Text);


var sqr9 = new Kinetic.Rect({
  x: 384,
  y: 384,
  width: 116,
  height: 117,
  fill: 'blue',
});

var sqr9Text = new Kinetic.Text({
  x: sqr9.getX(),
  y: sqr9.getY(),
  text: '',
  fontFamily: 'Arial',
  fontSize: 124,
  fill: 'white' 
});

sqr9.on('click', function (evt) {
  sqr9Text.setText(move);
  if(model[2][2] == ""){
    sqr9Text.setText(move);
    model[2][2] = move;
    if(move == "X")
      move = "O";
    else
      move = "X";
  }
  layer.draw();
  console.log("model: " + model);
    getWinner();
});

// add the shape to the layer
layer.add(sqr9);
layer.add(sqr9Text);


// add the shape to the layer
layer.add(gridLineV1);
layer.add(gridLineV2);
// add the shape to the layer
layer.add(gridLineH1);
layer.add(gridLineH2);

// add the layer to the stage
stage.add(layer);