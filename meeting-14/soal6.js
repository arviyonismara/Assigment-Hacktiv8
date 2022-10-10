function fpb(angka1, angka2) {
  angka1 = Math.abs(angka1);
  angka2 = Math.abs(angka2);
  while(angka2) {
    let temporary = angka2;
    console.log(temporary, 'temp', angka2,'angka2', angka1, 'angka1');
    angka2 = angka1 % angka2;
    angka1 = temporary;
  }
  return angka1;
}

console.log(fpb(2, 10));
console.log(fpb(20, 10));
console.log(fpb(23, 21));
console.log(fpb(42, 21));