var interruptor = document.querySelector(".interruptor");
var encendido = false;

interruptor.addEventListener("click", () => {
    
    interruptor.classList.toggle("encendido");
    /*
        //apagar
        //interruptor.className = "interruptor";
        interruptor.classList.remove("encendido")
    }else{
        //encender
        //interruptor.className = "interruptor encendido";
        interruptor.classList.add("encendido")
    }
    //encendido = !encendido;
    
   /*
   interruptor.className = `interruptor ${ !encendido ? "encendido" : "" }`;
   encendido = !encendido; 
   */
});