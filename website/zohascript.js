window.addEventListener('scroll', header_func);

function header_func(){
  var y_offset = window.scrollY;
  var header = document.getElementById("stick_header");
  var height = screen.height;

  if (y_offset/height > .5){
    header.style.top = "0";
  } else {
    header.style.top = "";
  }
}

function user_input(button){
  var spot_1 = document.getElementById("spot_1");
  var button_1 = document.getElementById("about");
  var button_2 = document.getElementById("experience");
  var button_3 = document.getElementById("projects");
  var button_4 = document.getElementById("contact");

  if (button == 'about'){
    if (spot_1.innerHTML == "experience" || spot_1.innerHTML == "projects" || spot_1.innerHTML == "contact" || spot_1.innerHTML == ""){
      spot_1.innerHTML = "about";
      setActive(button_1, button_2, button_3, button_4, 1, spot_1);
    } else {
      resetStyle(button_1, button_2, button_3, button_4, spot_1);
    }
  } else if (button == 'experience'){
    if (spot_1.innerHTML == "about" || spot_1.innerHTML == "projects" || spot_1.innerHTML == "contact" || spot_1.innerHTML == ""){
      spot_1.innerHTML = "experience";
      setActive(button_1, button_2, button_3, button_4, 2, spot_1);
    } else {
      resetStyle(button_1, button_2, button_3, button_4, spot_1);
    }
  } else if (button == 'projects'){
    if (spot_1.innerHTML == "experience" || spot_1.innerHTML == "about" || spot_1.innerHTML == "contact" || spot_1.innerHTML == ""){
      spot_1.innerHTML = "projects";
      setActive(button_1, button_2, button_3, button_4, 3, spot_1);
    } else {
      resetStyle(button_1, button_2, button_3, button_4, spot_1);
    }
  } else {
    if (spot_1.innerHTML == "experience" || spot_1.innerHTML == "projects" || spot_1.innerHTML == "about" || spot_1.innerHTML == ""){
      spot_1.innerHTML = "contact";
      setActive(button_1, button_2, button_3, button_4, 4, spot_1);
    } else {
      resetStyle(button_1, button_2, button_3, button_4, spot_1);
    }
  }
}

function setActive(button_1, button_2, button_3, button_4, num, spot_1){
  spot_1.style.marginTop = "2%";

  if (num == 1) {
    button_1.style.backgroundColor = "black";
    button_1.style.color = "#F0EAD6";

    button_2.style.backgroundColor = "";
    button_2.style.color = "";
    button_3.style.backgroundColor = "";
    button_3.style.color = "";
    button_4.style.backgroundColor = "";
    button_4.style.color = "";

  } else if (num == 2){
    button_2.style.backgroundColor = "black";
    button_2.style.color = "#F0EAD6";

    button_1.style.backgroundColor = "";
    button_1.style.color = "";
    button_3.style.backgroundColor = "";
    button_3.style.color = "";
    button_4.style.backgroundColor = "";
    button_4.style.color = "";

  } else if (num == 3){
    button_3.style.backgroundColor = "black";
    button_3.style.color = "#F0EAD6";

    button_2.style.backgroundColor = "";
    button_2.style.color = "";
    button_1.style.backgroundColor = "";
    button_1.style.color = "";
    button_4.style.backgroundColor = "";
    button_4.style.color = "";

  } else {
    button_4.style.backgroundColor = "black";
    button_4.style.color = "#F0EAD6";

    button_2.style.backgroundColor = "";
    button_2.style.color = "";
    button_3.style.backgroundColor = "";
    button_3.style.color = "";
    button_1.style.backgroundColor = "";
    button_1.style.color = "";

  }
}

function resetStyle(button_1, button_2, button_3, button_4){
  button_1.style.backgroundColor = "";
  button_2.style.backgroundColor = "";
  button_3.style.backgroundColor = "";
  button_4.style.backgroundColor = "";

  button_1.style.color = "";
  button_2.style.color = "";
  button_3.style.color = "";
  button_4.style.color = "";

  spot_1.innerHTML = "";
  spot_1.style.marginTop = "";
}
