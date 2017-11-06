var taxi = new Taxi()
var body = document.querySelector('body');
body.onkeydown = function(e) {
  if (e.keyCode === 39) {
    var robot = taxi.closestTrafficLight();
    if (robot.currentColor() == 'green') {
      taxi.forward();
      displayMessage('Ready to Go!');
    } else if (robot.currentColor() == 'orange') {
      taxi.forward();
      displayMessage('The robot is orange, drive carefully!')
    } else {
      displayMessage("The robot is red you cannot move!");
    }
  }
  if (e.keyCode === 37) {
    var robot = taxi.closestTrafficLight();
    if (robot.currentColor() == 'green') {
      taxi.reverse();
      displayMessage('Ready to reverse!');
    } else if (robot.currentColor() == 'orange') {
      taxi.reverse();
      displayMessage('The robot is orange, drive carefully!')
    } else {
      displayMessage("The robot is red you cannot reverse!");
    }
  } else if (e.keyCode === 38) {
    var robot = taxi.closestTrafficLight();
    if (robot.currentColor() == 'red') {
      robot.makeGreen();
    } else if (robot.currentColor() == 'orange') {
      robot.makeRed();
    } else {
      robot.makeOrange()
    }
  }

  if (e.keyCode == 40) {
    var robot = taxi.closestTrafficLight();
    if (robot.currentColor() == 'red') {
      robot.makeOrange()
      displayMessage('The robot is orange, drive carefully!')
    } else if (robot.currentColor() == 'orange') {
      robot.makeGreen()
    } else {
      robot.makeGreen()
      displayMessage('Display light to move')
    }
  }
}
