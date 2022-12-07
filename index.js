const eventTarget = document.getElementsByClassName('dropdown')

function showDropdown(){
    eventTarget.style.display = 'block'
}

eventTarget.onclick = showDropdown