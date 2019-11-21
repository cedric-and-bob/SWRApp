var idX = document.getElementById("weatherBody");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    idX.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const x = parseFloat(position.coords.latitude).toFixed(0);
  const y = parseFloat(position.coords.longitude).toFixed(0);
  console.log(x, y);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      idX.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      idX.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      idX.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      idX.innerHTML = "An unknown error occurred.";
      break;
  }
}

export default getLocation;
