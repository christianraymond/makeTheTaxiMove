var taxi = new Taxi()
var body = document.querySelector('body');
body.onkeydown = function(e) {
  if (e.keyCode === 39) {
    var robot = taxi.closestTrafficLight();
    if (robot.currentColor() !== 'red') {
      taxi.forward()
    } else{
      displayMessage("The robot is red you cannot move!");
    }
  }
  if (e.keyCode === 37) {
    var robot = taxi.closestTrafficLight();
    if (robot.currentColor() !== 'red' || robot.currentColor() !== 'orange') {
      taxi.reverse();
    }
  } else if (e.keyCode === 38) {
    var robot = taxi.closestTrafficLight();
    if (robot.currentColor() == 'red') {
        robot.makeGreen();
    } else if (robot.currentColor() == 'orange') {
      robot.makeRed();
    } else {
      robot.makeOrange()
      displayMessage('Drive carefully!')
    }
  }

  if (e.keyCode == 40) {
      var robot = taxi.closestTrafficLight();
      if (robot.currentColor() == 'red') {
         robot.makeOrange()
         displayMessage("Drive carefully!")
      }
      else if(robot.currentColor() == 'orange'){
        robot.makeGreen()
      } else {
        robot.makeGreen()
        displayMessage('Display light to move')
      }
  }
}
