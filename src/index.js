const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let res = '';
  let k = 0;
  let arr = '';
  let result = [];
  for (let i = 0; i <= expr.length / 10; i++) {
    res = expr.slice(k, 10 + k);
    k = k + 10;
    let c = 0;
    for (let ind = 0; ind <= res.length / 2; ind++) {
      if (res.slice(c, c + 2) === '10') {
        arr = arr + '.';
      } else if (res.slice(c, c + 2) === '11') {
        arr = arr + '-';
      }
      c = c + 2;
    }
    result.push(arr);
    arr = '';
  }
  let string = '';

  result.forEach((el) => {
    if (!el) {
      string = string + ' ';
    }
    for (const key in MORSE_TABLE) {
      if (el === key) {
        string = string + MORSE_TABLE[key];
      }
    }
  });
  return string.trim();
}

module.exports = {
  decode,
};
