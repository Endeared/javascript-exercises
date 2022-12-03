const caesar = function(string, shift) {

	let lowerAlph = "abcdefghijklmnopqrstuvwxyz"
  let upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let i = 0;

  let letters = string.split("");
  let cipher = [];
  let laterIndex = 0;
  let newLetter = "";
  let ind = 0;
  let sum = 0;

  for (i = 0; i < letters.length; i++) {
  	let currentLetter = letters[i];
    if (lowerAlph.includes(currentLetter)) {
    	ind = lowerAlph.indexOf(currentLetter)
      sum = ind + shift;
      console.log(ind)
      if (sum > 77) {
      	laterIndex = (sum - 78);
        newLetter = lowerAlph[laterIndex];
        cipher.push(newLetter);
      } else if (sum > 51) {
      	laterIndex = (sum - 52);
        newLetter = lowerAlph[laterIndex];
        cipher.push(newLetter);
      } else if (sum > 25) {
      	laterIndex = (sum - 26);
        newLetter = lowerAlph[laterIndex];
        cipher.push(newLetter);
      } else {
      	laterIndex = (ind + shift);
        newLetter = lowerAlph[laterIndex];
        cipher.push(newLetter);
      }
    } else if (upperAlph.includes(currentLetter)) {
    		ind = upperAlph.indexOf(currentLetter)
      	sum = ind + shift;
        console.log(ind)
        if (sum > 77) {
          laterIndex = (sum - 78);
          newLetter = upperAlph[laterIndex];
          cipher.push(newLetter);
        } else if (sum > 51) {
          laterIndex = (sum - 52);
          newLetter = upperAlph[laterIndex];
          cipher.push(newLetter);
        } else if (sum > 25) {
          laterIndex = (sum - 26);
          newLetter = upperAlph[laterIndex];
          cipher.push(newLetter);
        } else {
          laterIndex = (ind + shift);
          newLetter = upperAlph[laterIndex];
          cipher.push(newLetter);
        }
    } else {
    		cipher.push(currentLetter);
    }
  }

  let result = cipher.join("");
  return result;

};

// Do not edit below this line
module.exports = caesar;
