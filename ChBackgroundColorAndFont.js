let mySelectff = document.getElementById("FF");
let mySelectfs = document.getElementById("FS");
let mySelectfc = document.getElementById("FC");
let mySelectbg = document.getElementById("BGC");
let myDiv = document.querySelector(".thirdPart");


mySelectff.onchange = ()=>{
    document.body.style.fontFamily= mySelectff.value;
    let mySelectffValue = window.localStorage.setItem("FontFamily",mySelectff.value);
}
mySelectfs.onchange = ()=>{
        myDiv.style.fontSize = mySelectfs.value;
        let mySelectfsValue = window.localStorage.setItem("FontSize",mySelectfs.value);
    }
mySelectfc.onchange = ()=>{
    myDiv.style.color = mySelectfc.value;
    let mySelectfcValue = window.localStorage.setItem("FontColor",mySelectfc.value);
}

mySelectbg.onchange = ()=>{
    document.body.style.backgroundColor = mySelectbg.value;
    let mySelectbgValue = window.localStorage.setItem("BackgroundColor",mySelectbg.value);
}
document.body.style.fontFamily = window.localStorage.getItem("FontFamily");
myDiv.style.fontSize = window.localStorage.getItem("FontSize");
myDiv.style.color = window.localStorage.getItem("FontColor");
document.body.style.backgroundColor = window.localStorage.getItem("BackgroundColor");


document.querySelector("button").onclick=()=>{
    window.localStorage.clear();
    location.reload();
}
