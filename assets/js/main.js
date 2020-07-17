let inputText = document.getElementById("inputText")
let encode = document.getElementById("encode")
let result = document.getElementById("result")
let Schluessel = document.getElementById("key")
let charSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function encodeDecode() {
    if (inputText.value == "" || Schluessel.value == "") {
        result.innerHTML = "ERROR"
        return
    }
    let arrayText = []
    let arrayResult = []
    let text = inputText.value.toLowerCase()
    for (let elt of text) {
        arrayText.push(elt)
    }
    if (encode.checked == true) {
        for (let i = 0; i < arrayText.length; i++) {
            for (let j = 0; j < charSet.length; j++){
                if (arrayText[i] == charSet[j]) {
                    let m = (j + Number(Schluessel.value)) % 26
                    arrayResult.push(charSet[m])
                }
            }
        }
        result.innerHTML = `Result: ${arrayResult.join("").toUpperCase()}`
    } else {
        for (let i = 0; i < arrayText.length; i++) {
            for (let j = 0; j < charSet.length; j++){
                if (arrayText[i] == charSet[j]) {
                    let m = (j - Number(Schluessel.value) % 26 + 26) % 26
                    arrayResult.push(charSet[m])
                }
            }
        }
        result.innerHTML = `Result: ${arrayResult.join("").toLowerCase()}`
    }
}