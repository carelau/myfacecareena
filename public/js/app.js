document.addEventListener('DOMContentLoaded', function () {
    // Add your JavaScript here.
    const button = document.getElementById("button-colorchange");
    button.addEventListener("click", function () {
        const posts = document.getElementsByClassName("posts");
        for (let i = 0; i < posts.length; i++) {
            const eachpost = posts[i];
            eachpost.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        }
    })
    let menubutton = document.getElementById("PopMenuButton");
   

    menubutton.addEventListener("click", function () {
        let popupmenu = document.getElementById("NavSideBar");
        if (popupmenu.style.display === "flex") {
            popupmenu.style.display = "none";
          } else {
            popupmenu.style.display = "flex";
          } 
        });
    })