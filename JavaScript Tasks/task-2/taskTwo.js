function displayFunction() {
    let input = document.getElementById("text");
    let show = document.getElementById("display");
    //textBox input value is displayed in div element
    show.innerHTML = input.value;
}