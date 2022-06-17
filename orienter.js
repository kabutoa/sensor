const onHandleOrienter = (e) => {
  if(e) {
    const appOrienterEl = document.querySelector(".app-orienter")
    const {alpha, beta, gamma} = e
    if (typeof alpha === 'number' && typeof beta === 'number' && typeof gamma === 'number') {
      appOrienterEl.innerHTML = `
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
  onHandleOrienter()
  window.addEventListener('deviceorientation', onHandleOrienter)
} else {
  alert('Your device does not support deviceorientation')
}