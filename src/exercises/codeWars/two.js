function isIsogram(str){
  const isEmptyString = str === '';

  if (isEmptyString) {
    return true;
  }

  const strLength = str.length;
  const uniqueLetters = new Set(str.toLowerCase())
  const hasUniqieLetters = uniqueLetters.size === strLength;

  return hasUniqieLetters;
}