let inputText = document.getElementById("inputText")
let encode = document.getElementById("encode")
let result = document.getElementById("result")
let Schluessel = 3

function encodeDecode() {
    if (inputText.value == "") {
        result.innerHTML = "ERROR"
        return
    }
    let arrayText = []
    let arrayResult = []
    for (let elt of inputText.value) {
        arrayText.push(elt)
    }
    if (encode.checked == true) {
        for (let i = 0; i < arrayText.length; i++) {
            arrayResult.push(String.fromCharCode(arrayText[i].charCodeAt() + Schluessel))
        }
        result.innerHTML = `Result: ${arrayResult.join("").toUpperCase()}`
    } else {
        for (let i = 0; i < arrayText.length; i++) {
            arrayResult.push(String.fromCharCode(arrayText[i].charCodeAt() - Schluessel))
        }
        result.innerHTML = `Result: ${arrayResult.join("").toLowerCase()}`
    }
}