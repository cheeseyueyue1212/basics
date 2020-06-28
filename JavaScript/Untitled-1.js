

//防抖

function fangdou(fn, delay) {
    var timer = null;
    return () => {
      if(!timer) {
          timer = setTimeout(() => {
              fn();
              tiemr = null;
          }, delay)
          
      }
    }
}



function handle() {
    console.log(Date.now());
}

window.addEventListener('scroll', fangdou(handle, 1000))