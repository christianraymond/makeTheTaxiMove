var taxi = new Taxi()
var body = document.querySelector('body');
body.onkeydown = function(e) {
    if (e.keyCode === 39){
        var robot = taxi.closestTrafficLight();
        if (robot.currentColor() !== 'red' || robot.currentColor() !== 'orange') {
          taxi.forward()
        } else if (robot.currentColor() !== 'orange' || robot.currentColor() !== 'green') {
          taxi.forward();
        }
      }
      if (e.keyCode === 37) {
        var robot = taxi.closestTrafficLight()
        if (robot.currentColor() !== 'red' || robot.currentColor() !== 'orange') {
          taxi.reverse();
        }
      }
    }
