

document.addEventListener("DOMContentLoaded", function (){
    const boton = document.getElementById("buttonText");
    boton.addEventListener("click", function(){
       const texto = document.getElementById("inputText").value
       if (localStorage.getItem("dato")!=null) {
         localStorage.removeItem("dato")
       }
       localStorage.setItem("dato", texto)
    })
});
