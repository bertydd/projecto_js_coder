console.log("corriendo js ")
//inscripcion a cursado en el caso de estar inscripto no se acepta la solicitud, eleccion de pago y consulta de los mismos por cada curso

function obtnerInscripcionCursoBudismo(){
    let dni = prompt("INGRESE dni")
    let tipoDePago = prompt("INGRESE EL TIPO DE PAGO debito o credito")

    console.log("tipo de pago ingresado: "+tipoDePago)

    const inscripcionesList = consultarInscripciones(dni);
    let nombreAdd;
    for(const ins of inscripcionesList)
    {
        if(ins.dni == dni && ins.curso == "budismo"){
        alert("Ya estas inscripto a este curso elije otro")}
        else if (ins.dni==dni){
            nombreAdd == ins.nombre;
        }
        
    }

    let inscripcionNueva = new Inscripcion(nombreAdd,"budismo",dni,tipoDePago);
    inscripcionesList.push(inscripcionNueva)
    
    console.log("inscripcion satisfactoria!!!!")
    localStorage.setItem("budismo","true")

    getFormularioPago(inscripcionNueva.nombre,inscripcionNueva.dni,inscripcionNueva.tipoDePago,inscripcionNueva.precio);
    console.log(inscripcionNueva.nombre)
    if(inscripcionNueva.tipoDePago != null){
    Swal.fire({
        title: 'INCRIPTO AL CURSO DE BUDISMO',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000
      })
      
      setTimeout("location.href = './CursosMágicos.html';",1500);
    }
      

}


function obtenerPrecioDeCurso(tipo){
    let precio
    const costoDebito = 45000
    let interes = 0.35
   
    if(tipo == "debito"){
        precio = costoDebito
        
    }
    else if(tipo == 'credito'){

        precio = costoDebito + (costoDebito*interes)
       
    }
    else{
        alert("TIPO DE PAGO INCORRECTO")
        obtnerInscripcionCursoBudismo()
    }
    return precio

}



function consultarInscripciones(){
    let inscripcionesList = [new Inscripcion('Luciano',"otro",34989301,"credito"),new Inscripcion('Luciano',"otro",34989301,"debito"),new Inscripcion('Luciano',"otro",34989301,"credito")]
    return inscripcionesList;

}

function getFormularioPago(nombre,dni,tipo,precio){
    let cuotas;
    let nroTarjeta = prompt("INGRESE NRO DE TARJETA")
    console.log(tipo)
    tipo == "credito" ? cuotas = prompt("INGRESE CANT DE CUOTAS") :cuotas = 0;

    let cel = prompt("INGRESE cel")
    let segCod = prompt("cod de seguridad")
    let pagoNuevo = new Pago(nombre,nroTarjeta,cel,dni,tipo,segCod,precio,cuotas)
    console.log(pagoNuevo.cuotas)
    alert("Pago aceptado")


};

class Inscripcion { 
    
    constructor(nombre, curso, dni,tipoDePago){
    this.nombre= nombre;
    this.curso = curso;
    this.dni= dni;
    this.tipoDePago= tipoDePago.toLocaleLowerCase();
    this.precio = obtenerPrecioDeCurso(tipoDePago);}
}

class Pago{ 
    
    constructor(nombre,nroTarjeta,cel,dni,tipo,segCod,precio,cuotas){
    this.nombre= nombre;
    this.curso = nroTarjeta;
    this.cel= cel;
    this.dni= dni;
    this.tipo=tipo;
    this.segCod=segCod;
    this.precio=precio;
    this.cuotas = getCalculoCuotas(cuotas,precio);}
    
}
 function getCalculoCuotas(cuotas,precio){
    let precioXCuota;
    if(cuotas != 0 || cuotas != undefined ){
        return precioXCuota= precio/cuotas;
    }
    else{
        return precio;
    }
    
 }

