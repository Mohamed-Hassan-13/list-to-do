let inp = document.getElementById("inp");
let bottom = document.getElementById("bottom");
let butt =document.querySelector("button")

let arr;

if (localStorage.getItem("list") != null) {
  arr = JSON.parse(localStorage.getItem("list"));
} else {
  arr = [];
}

function save() {
  if (inp.value && butt.innerHTML==="Add") {
    let obj = {
      text: inp.value,
      completed: false,
    };

    arr.push(obj);

    console.log(arr);
    localStorage.setItem("list", JSON.stringify(arr));
    window.location.reload();
  }
}

let lock = JSON.parse(localStorage.getItem("list"));
lock.forEach((element) => {
  let div = document.createElement("div");
  div.classList.add("list");
  bottom.append(div);
  let left = document.createElement("div");
  left.classList.add("left");
  div.append(left);
  let check = document.createElement("div");
  left.append(check);
  check.id = "check";
  let checkcolor = document.createElement("div");
  check.append(checkcolor);
  checkcolor.classList.add("checkcolor");
  let p = document.createElement("p");
  left.append(p);
  p.innerHTML = element.text;
  let right = document.createElement("div");
  div.append(right);
  right.classList.add("right");
  let span = document.createElement("span");
  span.innerHTML = "delete";
  span.classList.add("del");
  right.append(span);
  let edit = document.createElement("span");
  edit.innerHTML = "Edit";
  right.append(edit);
  edit.classList.add("ed");

  span.addEventListener("click", () => {
    del(element, span);
  });

  edit.addEventListener("click", () => {
    editlist(element);
  });

  check.addEventListener("click", () => {
    p.classList.toggle("active");
    div.classList.toggle("active2");
    checkcolor.classList.toggle("active3");
    if (element.completed == false) {
      element.completed = true;
    } else {
      element.completed = false;
    }
    localStorage.setItem("list", JSON.stringify(lock));
  });

  if (element.completed == true) {
    p.classList.add("active");
    div.classList.add("active2");
    checkcolor.classList.add("active3");
  } else {
    p.classList.remove("active");
    div.classList.remove("active2");
    checkcolor.classList.remove("active3");
  }

});



// function Delete 
function del(el, span) {
  span.parentElement.parentElement.remove();
  lock.splice(lock.indexOf(el), 1);
  localStorage.setItem("list", JSON.stringify(lock));
  window.location.reload();
}

// function edid 
function editlist(element) {
  inp.value = element.text;
  editor(element)
  inp.focus()
}

function editor(el){
let but =document.querySelector("button")
but.innerHTML="Save"
but.style.backgroundColor="green"
but.addEventListener("click",(e)=>{
  if(but.innerHTML==="Save"){
    el.text=inp.value;
  localStorage.setItem("list", JSON.stringify(lock));
  window.location.reload();
  }
})
}