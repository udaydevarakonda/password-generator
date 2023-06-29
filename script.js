const uc=document.getElementById("capitalCase");
const low=document.getElementById("smallCase");
const num=document.getElementById("numbers");
const sp=document.getElementById("specialCharacters");
const v=document.getElementById("input");
const len=document.getElementById("bar");
const btn=document.getElementById("btn");
const tl=document.getElementById("len");
const c=document.getElementById("copy");
tl.textContent=8;
len.value=8;
btn.addEventListener("click",clicked);
len.addEventListener("input",change);
c.addEventListener("click",copy);
function copy(){
    if(v.value!=""|| v.value.length>=1){
    navigator.clipboard.writeText(v.value);
    c.innerHTML="check";
    c.title="Password copied";
    }
    setTimeout(()=>{
    c.innerHTML="content_copy";}
    ,3000);
}
function change(){
    tl.textContent=len.value;
}

const up="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lo="abcdefghijklmnopqrstuvwxyz";
const n="1234567890";
const s="!@#$%^&*()_+";
function clicked (){
    let arr=[];
    if(uc.checked===true){
        arr+=up;
        console.log("upppercase is checked");
    }
    if(low.checked===true){
        arr+=lo;
        console.log("lowercase is checked");
    }
    if(num.checked===true){
        arr+=n;
        console.log("numbers is checked");
    }
    if(sp.checked===true){
        arr+=s;
        console.log("special is checked");
    }
    const ll=arr.length;
    var l=len.value;


    console.log("The length of the password is : ");
    console.log(l);
    console.log(arr);
    console.log("\n");
    var ans=[];
    while(l--){
        ans+=arr[Math.floor(Math.random()*ll)];
        
    }
    v.value=ans;
    
    if(arr.length<1){
        v.value="";
    }
    

};