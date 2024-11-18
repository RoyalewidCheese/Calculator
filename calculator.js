function displayContent(content){
    result.value += content
}

function calcClear(){
    result.value = ""
}

function calcOutput(){
    result.value = eval(result.value)
}

function calcBackspace(){
    result.value = result.value.slice(0,-1)
}