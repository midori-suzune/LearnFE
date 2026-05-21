
window.addEventListener("load", () => {
    const link = [...document.querySelectorAll("menu")];
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);
    link.forEach((item) => {
        item.addEventListener("mouseenter", (event) => {
            const x = event.currentTarget.querySelector('a') || event.currentTarget ;
            // destructuring assignment and get size of element 
            const { left, top, width, height } = x.getBoundingClientRect(); 
            // console.log({left, top , width, height});
            // draw line-effect 
            line.style.left = left + 'px';
            line.style.width = width + 'px';
            // draw bottom of element 
            line.style.top = (top + height) + 'px'; 

        });
    });
   
});
