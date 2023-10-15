function turnoff(){
    var inputField=document.getElementById('inputField')
    inputField.style.visibility="hidden"
}
function turnon(){
    var inputField=document.getElementById("inputField")
    inputField.style.visibility="visible"
}
function getvalues(num){
    var inputValue=document.getElementById("inputValue")
    inputValue.value=inputValue.value+num
}
function clearOneChar(){
    inputValue.value=inputValue.value.slice(0, -1)
}
function clearAll(){
    inputValue.value=""
}
function calculate(){
    inputValue.value=eval(inputValue.value)
}
