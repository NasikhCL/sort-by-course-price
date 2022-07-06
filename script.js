const courses =[

  {
    name : "react",
    price : "2.5",
  },
  {
    name : "anngular",
    price : "2.1",
  },
  {
    name : "html",
    price : "1.3",
  },
  {
    name : "node",
    price : "1.5",
  },


];


function generateList(){
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
 courses.forEach((courses) => {
    
 

  // for(let i=0;i<courses.length;i++){
  //   courses[i]=document..createElement("li");
    const li =document.createElement("li");
    li.classList.add("list-group-item");
    
    const name = document.createTextNode(courses.name);
    li.appendChild(name)

    const span = document.createElement("span");
    span.classList.add("float-right");
    
    const price=document.createTextNode("$ "+ courses.price)
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
    

  });


  

}

// generateList();

window.addEventListener("load", generateList);


 const button1 = document.getElementsByClassName("sort-btn")[0];
// const button = document.querySelector(".sort-btn");
 button1.addEventListener('click', () =>{

   courses.sort((a, b) =>  a.price - b.price);
  

  generateList();
 } );


 const button2 = document.getElementsByClassName("sort-high-btn")[0];
 // const button = document.querySelector(".sort-btn");
  button2.addEventListener('click', () =>{
 
    courses.sort((a, b) =>   b.price - a.price );
   
 
   generateList();
  } );
 
 















/*
const courses = [
  {
    name: "Complete ReactJS course",
    price: "2.3",
  },
  {
    name: "Complete Angular course",
    price: "2.1",
  },
  {
    name: "Complete MERN course",
    price: "2.7",
  },
  {
    name: "Complete C++ course",
    price: "2.8",
  },
  {
    name: "Django Course",
    price: "7.4",
  },
];



function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

// generateLIST();

window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateLIST();
});

*/