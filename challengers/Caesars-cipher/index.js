function rot13 (str) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const words = str.split('');
  let result = '';

  console.log(words);
  for (let a = 0; a < words.length; a++) {

    if (alphabet.includes(words[a])) {
      let indic = alphabet.indexOf(words[a]);
      let indicLetraDescodificada = indic - 13;

      while (indicLetraDescodificada < 0) {
        indicLetraDescodificada =
                        alphabet.length - (indicLetraDescodificada * -1);
      }

      result += alphabet[indicLetraDescodificada];
    }
    else {
      result += words[a];
    }

  }

  console.log(result);
  return result;
}

rot13('Hello world!');