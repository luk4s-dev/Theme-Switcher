const checkbox = document.querySelector('.switch > input');
const body = document.querySelector('body')

function isChecked() {
    if(checkbox.checked == true) {
        body.style.backgroundColor = "#292C35"
        console.log("Black Theme")
    } else {
        body.style.backgroundColor = "#F1F1F1"
        console.log("White Theme")
    }
}

checkbox.addEventListener('click', isChecked)