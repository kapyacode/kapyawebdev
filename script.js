function updateTime() {
  // Create a new Date object
  const now = new Date();

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes().toString();
  let seconds = now.getSeconds().toString();

  // Convert to 12-hour format and determine AM/PM
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  // Add leading zeros to minutes and seconds
  minutes = minutes.length < 2 ? "0" + minutes : minutes;
  seconds = seconds.length < 2 ? "0" + seconds : seconds;

  // Format the time string (choose one format)
  const time24 = `${hours}:${minutes}:${seconds}`;
  const time12 = `${hours}:${minutes}:${seconds} ${amPm}`;

  // Display the time (choose which format to show)
  const currentTimeElement = document.getElementById("currentTime");
  if (currentTimeElement) {
    currentTimeElement.textContent = time12;
  }
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
