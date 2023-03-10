function strictEquals(valueA, valueB) {
  if (isNaN(valueA) && isNaN(valueB)) {
    return false;
  } else if (Number(!valueA) && Number(!valueB)) {
    return true;
  } else {
    return Object.is(valueA, valueB);
  }
}

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("Water", "oil"));
