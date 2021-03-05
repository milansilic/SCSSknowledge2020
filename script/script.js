let myMenu = document.querySelector("#aside3 nav");
function showMenu(){
    myMenu.classList.toggle("disBl");
}

let listItems = document.querySelectorAll("#aside3 nav a");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", ()=>{
        myMenu.classList.remove("disBl");
    });
}

let lg1 = document.querySelector("#lg1 a img");
window.addEventListener("scroll", ()=>{    
    if(window.pageYOffset < 10){
        lg1.style.marginTop = "0px";
        lg1.style.opacity = "1";
        lg1.style.width = "60px";        
    } else if (window.innerWidth >= 768 && window.pageYOffset >= 10){
        lg1.style.marginTop = "48px";
        lg1.style.opacity = ".48";
        lg1.style.width = "50px";
    }
});

let upBut1 = document.querySelector("#upBut1 a");
window.addEventListener("scroll", ()=>{
        if (window.pageYOffset > 1062){
            upBut1.style.left = "50%";
            upBut1.style.opacity = "1";
        }  
        else if (window.pageYOffset <= 1062){
            upBut1.style.left = "100%";
            upBut1.style.opacity = "0";
        }
});

let upBtn = document.getElementById("upBtn");
window.addEventListener("scroll", ()=>{
    if (window.pageYOffset <= 1125){
        upBtn.style.bottom = "-20px";
        upBtn.style.opacity = "0";
    } 
    else if (window.pageYOffset > 1125){
        upBtn.style.bottom = "27px";
        upBtn.style.opacity = "1";
    } 
});

document.getElementById('sel1').addEventListener('change', function() {
    if(this.value == "en"){window.location.href = "index.html";} 
    else if (this.value == "sr"){window.location.href = "indexSr.html";}   
});

document.getElementById('sel2').addEventListener('change', function() {
    if(this.value == "en"){window.location.href = "index.html";} 
    else if (this.value == "sr"){window.location.href = "indexSr.html";}   
});


