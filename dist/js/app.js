var out=document.getElementById("dom"),dom=document.getElementsByClassName("content")[0],inner=document.getElementsByClassName("inner")[0],x=function(e){var e=e||window.event;console.log(this,"---------")};out.addEventListener("click",x),dom.addEventListener("click",x),inner.addEventListener("click",x);