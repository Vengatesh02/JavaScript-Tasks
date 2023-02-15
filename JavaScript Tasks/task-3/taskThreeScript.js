window.onload = function () {
    let element = document.querySelector("#submit");
    element.addEventListener('click', function () {
        // Value of input text is set to inpuValue when sumbit is clicked
        let inputValue = document.querySelector('#input').value;
        // Value is displayed in div
        document.querySelector('#display').innerHTML = inputValue;
        // alert will display after 50 milliseconds so value is displayed before alert
        setTimeout(function () { alert(inputValue) }, 50);
    })
}


