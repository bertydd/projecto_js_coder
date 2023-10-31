let boton = document.getElementById("btInscrip");
let cursosAnotados = localStorage.getItem("budismo")
console.log(cursosAnotados)
boton.onmousemove = () => { if(cursosAnotados == 'true'){
    Swal.fire({
    title: 'YA ESTAS INSCRIPTO A ESTE CURSO',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500

  })}
}