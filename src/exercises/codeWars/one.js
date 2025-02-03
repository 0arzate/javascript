function spinWords(string = ""){
  const EMPTY_STRING = "";
  const SPACE = " ";
  const MINIMUN_LETTERS_TO_TWIST = 5;

  const words = string.split(SPACE);

  const haveFiveOrMoreLetters = (word) => word.length >= MINIMUN_LETTERS_TO_TWIST;

  const twistWords = words.map((word = EMPTY_STRING) => {
    if(haveFiveOrMoreLetters(word)){
      const letters = word.split(EMPTY_STRING);
      const twistedLetters = letters.reverse();
      const twistedWord = twistedLetters.join(EMPTY_STRING);

      return twistedWord;
    }

    return word;
  })

  const newString = twistWords.join(" ");

  return newString
}

spinWords("Hey fellow warriors");