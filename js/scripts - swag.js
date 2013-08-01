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
  stroke: 'purple',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
});

var gridLineV2 = new Kinetic.Line({
  points: [75*scale, 1*scale, 75*scale, 100*scale],
  stroke: 'purple',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
});

var gridLineH1 = new Kinetic.Line({
  points: [1*scale, 25*scale, 100*scale, 25*scale],
  stroke: 'purple',
  strokeWidth: 15,
  lineCap: 'round',
  lineJoin: 'round'
});

var gridLineH2 = new Kinetic.Line({
  points: [1*scale, 75*scale, 100*scale, 75*scale],
  stroke: 'purple',
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

      {

      var sqr1 = new Kinetic.Rect({
        x: 0,
        y: 0,
        width: 116,
        height: 117,
        fill: 'blue',
      });
      sqr1.on('mousedown', function() {
        console.log("hi")
      });

      layer.add(sqr1);
      }
            
      {
      var sqr2 = new Kinetic.Rect({
        x: 133,
        y: 0,
        width: 233,
        height: 117,
        fill: 'blue',
      });
      
      layer.add(sqr2);
      }
      
            {

      var sqr3 = new Kinetic.Rect({
        x: 384,
        y: 0,
        width: 116,
        height: 117,
        fill: 'blue',
      });
      layer.add(sqr3);
      }
            {

      var sqr4 = new Kinetic.Rect({
        x: 0,
        y: 133,
        width: 116,
        height: 233,
        fill: 'blue',
      });

      // add the shape to the layer
      layer.add(sqr4);
      }
            {

      var sqr5 = new Kinetic.Rect({
        x: 133,
        y: 133,
        width: 233,
        height: 233,
        fill: 'blue',
      });

      // add the shape to the layer
      layer.add(sqr5);
      }
            {

      var sqr6 = new Kinetic.Rect({
        x: 384,
        y: 133,
        width: 116,
        height: 233,
        fill: 'blue',
      });

      // add the shape to the layer
      layer.add(sqr6);
      }
            {

      var sqr7 = new Kinetic.Rect({
        x: 0,
        y: 384,
        width: 116,
        height: 117,
        fill: 'blue',
      });

      // add the shape to the layer
      layer.add(sqr7);
      }
            {

      var sqr8 = new Kinetic.Rect({
        x: 133,
        y: 384,
        width: 233,
        height: 117,
        fill: 'blue',
      });

      // add the shape to the layer
      layer.add(sqr8);
      }
            {

      var sqr9 = new Kinetic.Rect({
        x: 384,
        y: 384,
        width: 116,
        height: 117,
        fill: 'blue',
      });

      // add the shape to the layer
      layer.add(sqr9);
      } 

layer.add(board);

// add the shape to the layer
layer.add(gridLineV1);
layer.add(gridLineV2);
// add the shape to the layer
layer.add(gridLineH1);
layer.add(gridLineH2);

// add the layer to the stage
stage.add(layer);