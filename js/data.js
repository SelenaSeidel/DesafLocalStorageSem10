document.addEventListener("DOMContentLoaded", function (){
    const data = document.getElementById("data");
    if (localStorage.getItem("dato")!=null) {
        const texto=localStorage.getItem("dato")
        data.innerHTML=texto
    }    
});
