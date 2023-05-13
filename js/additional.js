function getRandomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getRandomFrom(...args) {
  const index = Math.floor(Math.random() * args.length);
  return args[index];
}

function isUnderPoint(point, element) {
  const {left, top, width, height} = element.getBoundingClientRect();
  const {x, y} = point;

  return left <= x && x<= left + width && top <= y && y <= top + height;
}
function addEventListener (el, ...args) {
  el.addEventListener(...args);
  return () => el.removeEventListener(...args);
}
function getSeveralRandom(arr = [], size = 1) {
  arr = arr.slice();
  if (size > arr.length) {
    size = arr.length;
  }
  const  result = [];
  const indexs = Array(arr.length).fill().map((_,i) => i);

  while (result.length < size) {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr.splice(index, 1)[0];
    result.push(item);
  }
  return result;
}
