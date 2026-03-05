let tests = [
  { a: 0, b: "", sa: "0", sb: '""' },
  { a: 0, b: "0", sa: "0", sb: '"0"' },
  { a: 0, b: false, sa: "0", sb: "false" },
  { a: "", b: false, sa: '""', sb: "false" },
  { a: null, b: undefined, sa: "null", sb: "undefined" },
  { a: null, b: false, sa: "null", sb: "false" },
  { a: NaN, b: NaN, sa: "NaN", sb: "NaN" },
  { a: 1, b: "1", sa: "1", sb: '"1"' },
  { a: " \t\n ", b: 0, sa: '" \\t\\n "', sb: "0" },
];

let count = 0;

for (let i = 0; i < tests.length; i++) {
  let a = tests[i].a;
  let b = tests[i].b;

  let loose = a == b;
  let strict = a === b;

  console.log(
    tests[i].sa +
      " == " +
      tests[i].sb +
      " -> " +
      loose +
      " | " +
      tests[i].sa +
      " === " +
      tests[i].sb +
      " -> " +
      strict
  );

  if (loose === true && strict === false) {
    count++;
  }
}

console.log("---");
console.log(count + " paire(s) où == et === donnent des résultats différents");