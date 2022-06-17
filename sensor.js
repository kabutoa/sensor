const onHandleSensor = (e) => {
  if(e) {
    const appSensorEl = document.querySelector(".app-sensor")
    const {acceleration, accelerationIncludingGravity, rotationRate, interval} = e
    appSensorEl.innerHTML = `
      acceleration: ${acceleration}; 
      accelerationIncludingGravity: ${accelerationIncludingGravity}; 
      rotationRate: ${rotationRate};
      interval: ${interval}
    `
  }
}


if (window.DeviceMotionEvent) {
  onHandleSensor()
  window.addEventListener('devicemotion', onHandleSensor)
} else {
  alert('Your device does not support devicemotion')
}