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