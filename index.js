//higher order function
let disPlay=(something)=>{
    console.log(something)
}

let HigherOrderFunction=(Name,Class,CallBack)=>{
 const Details=` My Name is ${Name}  And I read in 
 ${Class}`;
 CallBack(Details);
}
HigherOrderFunction("Rifat","Msc",disPlay);

//error Handling
//try
//catch
//trow
//finally


 try{
    console.log(number);
    console.log("hello Rifat");
    console.log("hello I am working as a swe engineer");
    let age=18;
    if(age>18){
        throw "You are able to cast vote"
    }else{
        throw "You are not able to cast vote "
    }
 }catch(err){
    console.log(err.message);
    console.log("here is a error Please  Check")
 }finally{
    console.log("Finally Data has printed");
 };


 //using Promise
 const promise_1=new Promise((resolve,reject)=>{
    let age=18;
    if(age>18){
        resolve("You are able to get vote");
    }else{
        reject('You are not able to give vote');
    }
 }).then((result)=>{
    console.log("Hi",result)
 }).catch((err)=>{
    console.log(err);
 })
 console.log(promise_1);

 const promise=new Promise((resolve,reject)=>{
    let isMessage=true;
    if(isMessage){
        resolve([
        {userName:"Abu Al Shahriar Rifat",SI:21009},
        {userName:"Kifayat",SI:2200}
        ])
    }else{
        reject("User is not valid");
    }

 }).then((result)=>{
    console.log("Result has succesfully displayed",result)
 }).catch((err)=>{
    console.log(new Error(err.message))
 })


 //async and await

 function getuser(userId){
    return new Promise((resolve,reject)=>{
        console.log("Get user from database");
        setTimeout(()=>{
        resolve({
         userId,
         userName:"Abu Al Shahriar"
        })
        },1000)
    })
 }

 function getService(user){
    return new Promise((resolve,reject)=>{
        console.log(`Get services of ${user.userName} from api`);
        setTimeout(()=>{
            resolve(['Email','VPN','CDN'])
        },2*1000);
    })
 }

 function getServicecost(servicess){
    return new Promise((resolve,reject)=>{
        console.log(`Calculating service cost of ${servicess}`);
        setTimeout(()=>{
         resolve(servicess.length *100);
        },3*2000);
    })
 }

 getuser(100)
 .then(getuser)
 .then(getService)
 .then(getServicecost)
 .then(console.log);


 //using asycn and wait

 function getuser(userId){
    return new Promise((resolve,reject)=>{
        console.log("Get user from database");
        setTimeout(()=>{
        resolve({
         userId,
         userName:"Abu Al Shahriar"
        })
        },1000)
    })
 }

 function getService(user){
    return new Promise((resolve,reject)=>{
        console.log(`Get services of ${user.userName} from api`);
        setTimeout(()=>{
            resolve(['Email','VPN','CDN'])
        },2*1000);
    })
 }

 function getServicecost(servicess){
    return new Promise((resolve,reject)=>{
        console.log(`Calculating service cost of ${servicess}`);
        setTimeout(()=>{
         resolve(servicess.length *100);
        },3*2000);
    })
 }

 async function LoadData(){
    let userData= await getuser(100);
    let service= await getService(userData);
    let cost= await getServicecost(service);
    console.log("Cost is",cost)
 }
 LoadData()


 //document Object Model

//  document.getElementById
    const h1=document.getElementById("h1");
    h1.innerHTML=`Abu Al Shahriar Rifat`;
    h1.style.color='aqua'
    h1.style.textAlign='center'
//  document.getElementsByClassName
    let p=document.getElementsByClassName('p')[0];
    p.textContent=`I am a software Enginner`;
    p.style.textAlign='center';
//  document.getElementsByTagName
    let h2=document.getElementsByTagName('h1')[1];
    h2.innerText="This is my second tag";
    h2.style.textAlign='center';
//  document.getElementsByName
    let nameIs=document.getElementsByName('myName')[0]
    nameIs.innerHTML="Hi";
    nameIs.style.textAlign='center'
//  document.querySelector
    let n=document.querySelector('.h11');
    n.innerHTML="I am doing my work"
    n.style.textAlign='center'
//  document.querySelectorAll
   let h_1=document.querySelectorAll('.itmes_5')[0];
   h_1.style.backgroundColor='red'
   h_1.style.textAlign='center'

   let h_2=document.querySelectorAll('.itmes_5')[1];
   h_2.style.backgroundColor='yellow'
   h_2.style.textAlign='center'

   let h_3=document.querySelectorAll('.itmes_5')[2];
   h_3.style.backgroundColor='blue'
   h_3.style.textAlign='center'

 //traverse element
let parentDiv=document.querySelector('.ulList');
console.log("Parent-div:",parentDiv.firstChild);
console.log(parentDiv.firstElementChild.textContent);
console.log(parentDiv.lastElementChild.textContent);
console.log(parentDiv.childNodes);
console.log(parentDiv.children);

//talk about siblings element
let thirdDiv=document.getElementById('third');
console.log(thirdDiv)
console.log("NextElementSibling",thirdDiv.nextElementSibling);
console.log("PrevoisElementSibling",thirdDiv.previousElementSibling);

//manipulating elements
 const div=document.createElement('div');
 const mainDiv=document.getElementsByClassName('myDiv')[0];
 console.log(mainDiv);
 div.innerHTML=`
  <div>
  <p style="border:1px solid red;text-align:center;padding:10px">I am working as a software Enginner</p>
  </div>
 `
 mainDiv.appendChild(div);

 const div_1=document.createElement('div');
 div_1.id="myId";
 div_1.classList.add("Myclass");
 div.innerHTML=`
  <div>
   <p class="p1">I am a full stack developer</p>
  </div>
 `
 document.body.appendChild(div_1)

 const p1=document.getElementsByClassName("p1")[0];
 p1.style.color="blue"


 const ul=document.createElement("ul");
 ul.id="ulIdd";
 const li_1=document.createElement('li');
  li_1.innerHTML="List_1"

 ul.appendChild(li_1);
 const li_2=document.createElement('li');
 li_2.innerHTML="List_2"
 ul.appendChild(li_2);

 const li_3=document.createElement('li');
  li_3.innerHTML="List_3"
 ul.appendChild(li_3);

 const li_4=document.createElement('li');
 li_4.innerHTML="List_4"
ul.appendChild(li_4);

const li_5=document.createElement('li');
li_5.innerHTML="List_5"
ul.appendChild(li_5);

 document.body.appendChild(ul);


 //appendChild
 let divv=document.createElement('div');
 divv.id="menu_id";

 let p11=document.createElement("p");
 p11.textContent=` This is P tag`;
 divv.appendChild(p11);

 document.body.appendChild(divv);

//using function

let menu=document.getElementById("nameList");

function createMenuList(name){
    const li=document.createElement('li');
    li.innerText=name;
    return li;
} 
menu.appendChild(createMenuList("Rifat"));
menu.appendChild(createMenuList("Rimon"));
menu.appendChild(createMenuList("Rifa"));
menu.appendChild(createMenuList("Kifayat"));
menu.appendChild(createMenuList("Rifat"));


// let mymenu=document.getElementById('myMenu');
// let lang=[
//     'python',
//     'javascript',
//     'php',
//     'java',
//     'pyscript'
// ]
// let fragment=document.createDocumentFragment()
// lang.forEach((language)=>{
//     let li=document.createElement("li");
//     li.textContent=language;
//     fragment.appendChild('li');
    
// })

// mymenu.appendChild(fragment)

//insertBefore
let m_menu=document.getElementById("aboutLiList");
let li=document.createElement('li');
li.textContent="liii";
m_menu.insertBefore(li,m_menu.firstElementChild);

//insertAfter;

//append
let app=document.getElementById('app');
let names=['Rifat','Ruma','Rumiu'];
let domScript=names.map(()=>{
    let li=document.createElement('li');
    li.textContent="appending is ";
    return li;
})
app.append(...domScript);

//prepend
let apps=document.getElementById("apps");
let allLanguage=['Go','TS','Js','Python'];
let Details=allLanguage.map((langusge)=>{
    let li=document.createElement("li");
    li.textContent=langusge;
    return li;
})

apps.prepend(...Details);
apps.style.marginBottom="10px";

//insertAdjacentHTML
let my=document.getElementById('m_3');
my.insertAdjacentHTML("beforebegin",
"<h3>Before</h3>");
my.insertAdjacentHTML('afterbegin',"<p>My love</p>")
my.insertAdjacentHTML('afterend',"after end");
my.insertAdjacentHTML('afterbegin',"before");

//replaceChild
//clone child
//










