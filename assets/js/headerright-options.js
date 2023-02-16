function changeTheme() {
    document.body.classList.toggle("dark-edition")
    document.querySelectorAll(".selectPeriodoPrint").forEach(evt=>{
        // evt.classList.toggle("selectbg")
    })


    document.querySelectorAll(".modal-content").forEach(evt=>{
        evt.classList.toggle("dark-edition")
        console.log("log modal");
    })

    document.getElementById("sidebardk").toggleAttribute("data-background-color")

    sidebardk=document.getElementById("sidebardk")
    
    if(sidebardk.hasAttribute("data-background-color")){
        if(sidebardk.getAttribute("data-background-color")=="black"){
             console.log("changin atriu");
        }
    }
    // document.getElementById("sidebardk").toggleAttribute("black")
}
 

function fullscrren() {
    // e.preventDefault();
    document.body.classList.toggle("fullscreen-enable"), document.fullscreenElement || document
        .mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document
        .cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document
        .webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ?
        document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document
        .documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document
        .documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    console.log("pantalla completa");
}


// para cambiar tema los modas agregar el mismo toggle como al


window.addEventListener("load",event=>{
    // saveThemeInLS()

    document.querySelector("#completeScreen").addEventListener("click", evt => {
        fullscrren();
    })
    
    document.querySelector("#changeTheme").addEventListener("click", (evt) => {
        changeTheme()
    })
});


// guardar en LS el estado del theme
activeTheme = ""
boxContainerTheme = document.body

function saveThemeInLS() {
 
    if (!localStorage.getItem("activeTheme")) {
        if (boxContainerTheme.classList.contains("dark-edition")) {
            activeTheme = "dark-edition"
        } else {
            activeTheme = "light-edition"
        }
        localStorage.setItem("activeTheme", activeTheme)
        console.log("no existe");
    } else {
        console.log("si existe");
        activeTheme = localStorage.getItem("activeTheme")
        boxContainerTheme.classList=""
        boxContainerTheme.classList.add(activeTheme)
    }

    
}

