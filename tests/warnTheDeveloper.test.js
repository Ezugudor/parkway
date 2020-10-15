const { test, expect } = require("@jest/globals");
const warnTheDeveloper = require("../warnTheDeveloper");

//case 1
test("should return the dev's chair no to be warned case 1", () => {
  let n = 4;
  let m = 6;
  let s = 2;

  expect(warnTheDeveloper(n, m, s)).toBe(3);
});

//case 3
test("should return the dev's chair no to be warned case 3", () => {
  let n = 5;
  let m = 2;
  let s = 2;

  expect(warnTheDeveloper(n, m, s)).toBe(3);
});

//case 4
test("should return the dev's chair no to be warned case 4", () => {
  let n = 7;
  let m = 19;
  let s = 2;

  expect(warnTheDeveloper(n, m, s)).toBe(6);
});
