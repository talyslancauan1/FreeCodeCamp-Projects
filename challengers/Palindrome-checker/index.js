function palindrome (str) {
  const arrClean = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');

  const arrInverted = [...arrClean].reverse();

  const strClean = arrClean.join('');
  const strReverse = arrInverted.join('');

  console.log(strClean);
  console.log(strReverse);

  if (strClean === strReverse) {
    console.log(true);
    return true;
  }
  else {
    console.log(false);
    return false;
  }
}

palindrome('eye');