var arabic=document.getElementById("arabic");
var english=document.getElementById("english");
var title=document.getElementById("title");
var welcome=document.getElementById("welcome");
var home=document.getElementById("home");
var login=document.getElementById("login");
var divemail=document.getElementById("divemail");
var divname=document.getElementById("divname");
var submit=document.getElementById("submit");
var gender=document.getElementById("gender");
var female=document.getElementById("female");
var male=document.getElementById("male");
var about=document.getElementById("about");
var contact=document.getElementById("contact");
var text=document.getElementById("text");
document.getElementById("mail").focus();
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
         login.innerHTML="تسجيل الدخول";
         home.innerHTML="الصفحة الرئيسية";
         divemail.innerHTML=":البريد الالكتروني";
         divname.innerHTML=":الاسم الكامل";
         submit.innerHTML="ارسال";
         gender.innerHTML="الجنس";
         female.innerHTML="انثى";
         male.innerHTML="دكر";
         document.title="مطبخ ياسمينا";
         about.innerHTML="من نحن";
         contact.innerHTML="تواصل معنا";
         text.innerHTML="مطبخ ياسمينا";
        }else if(language==="english"){
            title.innerHTML="yasmina elbahri";
            welcome.innerHTML=" Welcome to Yasmina Kitchen";
            login.innerHTML="Login";
            home.innerHTML="Home";
            divemail.innerHTML="Email address:";
            divname.innerHTML="Your name:";
            submit.innerHTML="send";
            gender.innerHTML="gender";
            female.innerHTML="female";
            male.innerHTML="male";
            document.title="Yasmina Kitchen";
            about.innerHTML=" About us";
            contact.innerHTML="Contact us";
            text.innerHTML="Yasmina Kitchen";
        }
        }
        
        var forms=document.getElementById("forms");
        var email=document.getElementById("mail");
        forms.addEventListener("submit",(error)=>{
            if(email.value.indexOf("gmail")!=-1){
             return true;
            }else{
                email.style.borderColor="red";
                error.preventDefault();
            }
        })
        email.addEventListener("invalid",()=>{
            if(email.validity.valueMissing){
                email.setCustomValidity("You did not enter the data");
                
               }else if(email.validity.typeMismatch){
                   email.setCustomValidity("Invalid data");
                   
               }else{
                   email.setCustomValidity(" ");
                   return true;
               }
        })
        function keyup(event){
            alert(event.key);
          }
          function beforeprint(){
              alert("The printer is opened");
          }
        
        