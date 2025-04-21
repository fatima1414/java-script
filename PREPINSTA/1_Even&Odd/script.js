function checkData(){
    let inputNum =parseInt(document.getElementById("input-num").value);
    let  result = document.getElementById("answer");
    if (inputNum % 2 == 0)
        result.innerText = "Even Number!";
    else
    result.innerText= "Odd Number!";  
}
   