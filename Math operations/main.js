const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addbtn");
const resultEle = document.getElementById("result");

addButton.onclick = function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const sum = num1 + num2;
        resultEle.innerHTML = `Result: ${sum}`;
    }
    else{
        resultEle.innerHTML = "Please Enter valid number";
    }
}
