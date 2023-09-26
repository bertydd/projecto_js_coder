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
    
    alert("te has inscripto con el dni"+ inscripcionNueva.dni+"el curso: "+inscripcionNueva.curso);
    console.log("inscripcion satisfactoria!!!!")

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

class Inscripcion { 
    
    constructor(nombre, curso, dni,tipoDePago,precio){
    this.nombre= nombre;
    this.curso = curso;
    this.dni= dni;
    this.tipoDePago= tipoDePago.toLocaleLowerCase;
    this.precio = obtenerPrecioDeCurso(tipoDePago);}
}