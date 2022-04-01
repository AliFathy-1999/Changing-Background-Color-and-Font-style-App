let mySelectff = document.getElementById("FF");
let mySelectfs = document.getElementById("FS");
let mySelectfc = document.getElementById("FC");
let mySelectbg = document.getElementById("BGC");
let myDiv = document.querySelector(".thirdPart");




mySelectff.onchange = ()=>{
    document.body.style.fontFamily= mySelectff.value;
    let mySelectffValue = window.localStorage.setItem("FontFamily",mySelectff.value);
   //document.querySelector(`[value='${localStorage.FontFamily}']`).selected = "FF"; 
}

mySelectfs.onchange = ()=>{
        myDiv.style.fontSize = mySelectfs.value;
        let mySelectfsValue = window.localStorage.setItem("FontSize",mySelectfs.value);
    }
    //document.querySelector(`[value='${localStorage.FontSize}']`).selected = "FS";  
mySelectfc.onchange = ()=>{
    myDiv.style.color = mySelectfc.value;
    let mySelectfcValue = window.localStorage.setItem("FontColor",mySelectfc.value);
}
//document.querySelector(`[value='${localStorage.FontColor}']`).selected = "FC";  
mySelectbg.onchange = ()=>{
    document.body.style.backgroundColor = mySelectbg.value;
    let mySelectbgValue = window.localStorage.setItem("BackgroundColor",mySelectbg.value);
}
//document.querySelector(`[value='${localStorage.BackgroundColor}']`).selected = "BGC";

document.body.style.fontFamily = window.localStorage.getItem("FontFamily");
myDiv.style.fontSize = window.localStorage.getItem("FontSize");
myDiv.style.color = window.localStorage.getItem("FontColor");
document.body.style.backgroundColor = window.localStorage.getItem("BackgroundColor");


document.querySelector("button").onclick=()=>{
    window.localStorage.clear();
    location.reload();
}