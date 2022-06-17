const onHandleSensor = (e) => {
  if(e) {
    const appEl = document.getElementById("app")
    const {alpha, beta, gamma} = e
    if (typeof alpha === 'number' && typeof beta === 'number' && typeof gamma === 'number') {
      appEl.innerHTML = `
        alpha: 沿Z轴${alpha > 0 ? '逆时针' : '顺时针'}倾斜${alpha}; 
        beta: 沿Y轴${beta > 0 ? '逆时针' : '顺时针'}倾斜${beta}; 
        gamma: 沿X轴${gamma > 0 ? '顺时针' : '逆时针'}${gamma}
      `
    } else {
      alert('No data')
    }
  }
}


if (window.DeviceOrientationEvent) {
  onHandleSensor()
  window.addEventListener('deviceorientation', onHandleSensor)
} else {
  alert('Your device does not support deviceorientation')
}