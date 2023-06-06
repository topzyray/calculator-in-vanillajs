let result = document.getElementById('display');

function calc(value){
    if (value) {
        result.value += value;
    }
}

function equals(){
    result.value = eval(result.value)
    console.log(result.value)
    }

function clr(){
    result.value = '';
}

function del() {
    result.value = result.value.slice(0,-1);
}

















// function equals(){
//     if ("%" in result.value) {
//         console.log("Yes")
//         result.value = calc(result.value) / 100
//     } else {
//         console.log("No")
//         result.value = eval(result.value)
//     }
// }
