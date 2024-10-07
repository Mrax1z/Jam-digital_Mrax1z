function updateClock() {
  var date = new Date();

  // Offset WITA (UTC+8)
  var witaOffset = 8 * 60; // 8 hours in minutes
  var localOffset = date.getTimezoneOffset();
  var witaTime = new Date(date.getTime() + (localOffset + witaOffset) * 60000);

  // Get time components
  var hours = witaTime.getHours();
  var minutes = witaTime.getMinutes();
  var seconds = witaTime.getSeconds();

  // Format time
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Display time
  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerHTML = timeString;

  // Display date
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').innerHTML = witaTime.toLocaleDateString('id-ID', options);
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();