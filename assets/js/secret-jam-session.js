var p=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],c=0,k=function(e){if(0>p.indexOf(e.key)||e.key!==p[c]){c=0;return}if(c++,p.length===c){c=0;let v=document.createElement("video");v.setAttribute("autoplay",!0);let s=document.createElement("source");s.setAttribute("src","https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"),s.setAttribute("type","video/mp4"),v.appendChild(s),document.body.appendChild(v),v.style.position="fixed",v.style.top="50%",v.style.left="50%",v.style.transform="translate(-50%, -50%)",v.style.width="100%"}};document.addEventListener("keydown",k,!1);
