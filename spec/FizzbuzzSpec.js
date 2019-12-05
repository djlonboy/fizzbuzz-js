describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  it("should return 100 items", function() {
    output = fizzbuzz.run();
    expect(output.split(" ").length).toEqual(100)
  });

  it("item 3 should be fizz", function() {
    output =fizzbuzz.run();
    expect(output.split(" ")[2]).toEqual("fizz")
  });

  it("item 5 should be buzz", function() {
    output = fizzbuzz.run();
    expect(output.split(" ")[4]).toEqual("buzz")
  });

  it("item 15 should be fizzbuzz", function() {
    output = fizzbuzz.run();
    expect(output.split(" ")[14]).toEqual("fizzbuzz")
  });

  it("item 100 should be buzz", function() {
    output = fizzbuzz.run();
    expect(output.split(" ")[99]).toEqual("buzz")
  });

  it("item 99 should be fizz", function() {
    output = fizzbuzz.run();
    expect(output.split(" ")[98]).toEqual("fizz")
  });

  it("item 90 should be fizzbuzz", function() {
    output = fizzbuzz.run();
    expect(output.split(" ")[89]).toEqual("fizzbuzz")
  });

});
