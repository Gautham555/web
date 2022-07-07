

function calculte(){
    
    let v=document.getElementById("height").value;
    let g=document.getElementById("weight").value;
    const bmi=(g/(v*v));
    
    document.getElementById("output").innerText=bmi;
}