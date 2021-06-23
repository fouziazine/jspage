var header=document.getElementById("header");
var icon=document.getElementById("icon");
var user=navigator.userAgent.toLowerCase();
var sign=document.getElementById("sign");
if(user.includes("android")){
    setTimeout(()=>{
        header.style.display="flex";
    },6*1000)
  
 sign.addEventListener("click",()=>{
     window.open("https://fouziazine.github.io/app/login.html")
 })
}else{
    header.style.display="none";
}
icon.addEventListener("click",()=>{
    header.style.display="none";
})
class Slider{
    constructor(){
    this.images=[];
    this.images[0]="img/food1.jpg";
    this.images[1]="img/food2.jpg";
    this.images[2]="img/food3.jpg";
    this.images[3]="img/food4.jpg";
    this.images[4]="img/food5.jpg";
    this.links=[];
    this.links[0]="https://fouziazine.github.io/naima/";
    this.links[1]="https://fouziazine.github.io/naima/";
    this.links[2]="https://fouziazine.github.io/naima/";
    this.links[3]="https://fouziazine.github.io/naima/";
    this.links[4]="https://fouziazine.github.io/naima/";
    this.i=0;
    this.metoslider();
    setInterval(()=>{
        this.metoslider();
    },3*1000);
    }
    metoslider(){
        if(this.i<this.images.length -1){
       this.i++;
        }else{
            this.i=0;
        }
    document.slidershow.src=this.images[this.i];
    document.slidershow.setAttribute("width","100%");
    document.slidershow.setAttribute("height","450px");
    

    document.getElementById("links").href=this.links[this.i];
    }
}
onload=new Slider();
var arabic=document.getElementById("arabic");
var english=document.getElementById("english");
var title=document.getElementById("title");
var welcome=document.getElementById("welcome");
var about=document.getElementById("about");
var contact=document.getElementById("contact");
var text=document.getElementById("text");
var home=document.getElementById("home");
var login=document.getElementById("login");

arabic.onclick=()=>{
   getlang("arabic");
   localStorage.setItem("lang","arabic");
}
english.onclick=()=>{
getlang("english");
localStorage.setItem("lang","english");
}
onload=()=>{
    getlang(localStorage.getItem("lang"));
}
function getlang(language){
if(language==="arabic"){
 title.innerHTML="ياسمينا البحري";
 welcome.innerHTML="اهلا بكم في مطبخ ياسمينا";
 about.innerHTML="من نحن";
 contact.innerHTML="تواصل معنا";
 text.innerHTML="مطبخ ياسمينا";
 login.innerHTML="تسجيل الدخول";
 home.innerHTML="الصفحة الرئيسية";
 document.title="مطبخ ياسمينا";
}else if(language==="english"){
    title.innerHTML="yasmina elbahri";
    welcome.innerHTML=" Welcome to Yasmina Kitchen";
    about.innerHTML=" About us";
 contact.innerHTML="Contact us";
 text.innerHTML="Yasmina Kitchen";
 login.innerHTML="Login";
 home.innerHTML="Home";
 document.title="Yasmina Kitchen";
}
}
function keyup(event){
  alert(event.key);
}
function beforeprint(){
    alert("The printer is opened");
}