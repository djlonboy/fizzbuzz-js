var fakefizzbuzz = "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz fizz 22 23 fizz buzz 26 fizz 28 29 fizzbuzz 31 32 fizz 34 buzz fizz 37 38 fizz buzz 41 fizz 43 44 fizzbuzz 46 47 fizz 49 buzz fizz 52 53 fizz buzz 56 fizz 58 59 fizzbuzz 61 62 fizz 64 buzz fizz 67 68 fizz buzz 71 fizz 73 74 fizzbuzz 76 77 fizz 79 buzz fizz 82 83 fizz buzz 86 fizz 88 89 fizzbuzz 91 92 fizz 94 buzz fizz 97 98 fizz buzz"

function Fizzbuzz() {
};

Fizzbuzz.prototype.fb = function(number) {
  let output = "";
  if (number % 3 == 0) { output = "fizz" };
  if (number % 5 == 0) { output += "buzz" };
  if (number % 3 != 0 && number % 5 != 0) { output = number };
  return output;
};

Fizzbuzz.prototype.run = function() {
  var fizzbuzz = new Fizzbuzz();
  let x = 1;
  let fboutput = [];
  do {
    fboutput += Fizzbuzz.fb(x).toString() + " "
    x += 1
  } while (x < 101);
  return fboutput.trim();
};