window.onload = function () {
  // vowels are stored in a variable
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  let friendList = document.querySelector("#friend");
  friendList.addEventListener('click', function (event) {
    // The clicked elements first letter is targeted
    let letter = event.target.textContent.toLowerCase()[0];
    // checking is the firstLetter present in vowel array
    if (vowels.includes(letter)) {
      // changing the background color
      event.target.style.backgroundColor = 'red';
    } else {
      event.target.style.backgroundColor = 'green';
    }
  });
}

