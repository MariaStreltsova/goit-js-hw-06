const refs = {
    input: document.querySelector('#name-input'),
    spanText: document.querySelector('#name-output')
}
refs.input.addEventListener('input', onInputChange)
function onInputChange(event) {
    refs.spanText.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
       return refs.spanText.textContent = "Anonymous!"
    }
}