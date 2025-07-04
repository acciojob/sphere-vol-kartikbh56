function volume_sphere(e) {
  e.preventDefault(); // Prevent form from submitting

  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);

  const volumeField = document.getElementById('volume');

  if (isNaN(radius) || radius < 0) {
    volumeField.value = 'NaN';
    return false;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeField.value = volume.toFixed(4);

  return false;
}

window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
