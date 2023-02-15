window.onload = function () {
  var displayedText = [];
  let elements = document.querySelectorAll('.btn');
  elements.forEach(element => {
    // check click event for all the element in elements
    element.addEventListener('click', function () {
      let content = this.textContent;
      // content in clicked button is pushed into displayeTest array
      displayedText.push(content);
      alert(displayedText.join('\n'))
    });
  });
}

