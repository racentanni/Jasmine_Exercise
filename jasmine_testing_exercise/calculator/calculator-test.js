
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 30000, years: 20, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('189.79')
});



it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 25000, years: 20, rate: 10};
  expect(calculateMonthlyPayment(values)).toEqual('241.26')
});

/// etc
it("should calculate the monthly rate with high interest", function() {
  const values = {amount: 50000, years :10, rate: 98}
  expect(calculateMonthlyPayment(values)).toEqual("4083.66")
})

it("shoudl calculate the monthly rate with small term", function() {
const values = {amount: 10000, years: 1, rate: 25}
expect(calculateMonthlyPayment(values)).toEqual("950.44")
})