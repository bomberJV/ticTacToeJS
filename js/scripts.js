 var containerWidth = 500;
 var containerHeight = 500;
 var stage = new Kinetic.Stage({
        container: 'container',
        width: containerWidth,
        height: containerHeight
      });

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

board.on('mouseover mousedown', function (event) {
  console.log('x: ' + event.pageX + ' y: ' + event.pageY);
});

layer.add(board);

// add the shape to the layer
layer.add(gridLineV1);
layer.add(gridLineV2);
// add the shape to the layer
layer.add(gridLineH1);
layer.add(gridLineH2);

// add the layer to the stage
stage.add(layer);