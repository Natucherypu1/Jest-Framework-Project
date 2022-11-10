const {
  sum,
  fromDollarToYen,
  fromEuroToDollar,
  fromYanToPound,
} = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", () => {
  const dollars = fromEuroToDollar(3.5);

  const expected = 3.5 * 1.2;

  expect(dollars).toBe(expected);
});

test("One dollar should be 106.58333 yen", () => {
  const yen = fromDollarToYen(3.5);

  const expected = 3.5/1.2*127.9;

  expect(yen).toBe(expected);
});

test("One yan should be 0.006 pounds", () => {
  const pound = fromYanToPound(3.5);

  const expected = 3.5/127.9*0.8;

  expect(pound).toBe(expected);
});
