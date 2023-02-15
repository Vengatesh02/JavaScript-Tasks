window.onload = function () {
    let myList = document.querySelector('#name');
    // store all 'li' element as NodeList in listItem
    let listItem = myList.querySelectorAll("li")
    listItem.forEach(function (item, index) {
        item.addEventListener('click', function (element) {
            // check if the index is divisible by 2 
            // index starts from 0, So color set to red if divisible by 2 that is odd order
            if (index % 2 === 0) {
                element.target.style.color = 'red';
            } else {
                element.target.style.color = 'green'
            }
        })
    })
}