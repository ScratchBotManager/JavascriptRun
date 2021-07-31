function dice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var Random = Math.floor(Math.random() * (max - min) + min);
  return alert(Random)
}
