let ldx = document.querySelector(".lbx");
let login = document.querySelector(".login");
let content = document.querySelector(".content");
let btn = document.querySelector("button");
let i = btn.querySelector("i");
let border = document.querySelector(".border-anim");
login.addEventListener("mouseenter", () => {
  expandLogin();
});
login.addEventListener("mouseleave", () => {
  collapseLogin();
});
btn.addEventListener("click",()=>{
    if(i.classList.contains("fa-toggle-on")){
        i.classList.add("fa-toggle-off");    
        i.classList.remove("fa-toggle-on");
        collapseLogin();
    }
    else{
        i.classList.remove("fa-toggle-off");    
        i.classList.add("fa-toggle-on");
        expandLogin();
    }    
});

function expandLogin() {
let border = document.querySelector(".border-anim");
login.addEventListener("mousemove", () => {
  ldx.style.height = "450px";
  content.classList.remove("collapse");
  login.classList.add("expanded");
  login.classList.add("abc");
});
}

function collapseLogin() {
login.addEventListener("mouseleave", () => {
  ldx.style.height = "90px";
  content.classList.add("collapse");
  login.classList.remove("expanded");
  login.classList.remove("abc")
});
}