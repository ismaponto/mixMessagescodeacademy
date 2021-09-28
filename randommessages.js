//JavaScript

    const firstPartMessage =() => {
        const primerMessage=["Pedro y Ana ","Mariana, Carla, y Roberto ", 'Abril y Matias ', "Todos los provincianos ","La hinchada de chicago ", "Las sailor mooon "];
        randomNum=(Math.floor(Math.random()*primerMessage.length));
        return primerMessage[randomNum]
    };

    const secondPartMessage= () => {
        const segundoMensaje=["Compranron birra y faso a mitad de precio.","importaron queso y mermelada de Francia.", 'abrieron un local de ropa en la salada.', "cosechan flores para vender arreglos florales en casamientos.",
        "escriben las mejore canciones de cancha.", "cenan en familia.","Perdieron el bondi"];
        randomNum=(Math.floor(Math.random()*segundoMensaje.length));
                return segundoMensaje[randomNum]
    };
    const thirdPartMessage= () => {
        const tercerMensaje=["Les fue como el orto, terminaron a las piñas.","Decidieron cambiar de trabajo.", 'Desde el mes que viene, venderan pintura robada.', "Revender miel de abejas era una mejor idea",
        "Por ultima vez.", "Nada que agregar."];
        randomNum=(Math.floor(Math.random()*tercerMensaje.length));
                return tercerMensaje[randomNum]
    };

    console.log(firstPartMessage()+secondPartMessage()+thirdPartMessage());
