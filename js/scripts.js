 var stage = new Kinetic.Stage({
        container: 'container',
        width: window.innerWidth,
        height: window.innerHeight
      });

      var layer = new Kinetic.Layer();

      var circle = new Kinetic.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      });

      // add the shape to the layer
      layer.add(circle);

      // add the layer to the stage
      stage.add(layer);