window.onload = function() {
    getInfo();
  };


const llenarTabla = document.querySelector('#lista-tabla tbody');
const notificacion = document.getElementById('alert-error');
const usuario = localStorage.getItem("username");

Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Bienvenido ' + usuario,
    showConfirmButton: false,
    timer: 2000
  })

function calcular(){
//let nombre = document.getElementById('nombre').value;
//let email = document.getElementById('inputEmail4').value;
//let celular = document.getElementById('celular').value;
let monto = document.getElementById('monto').value;
let interes = document.getElementById('interes').value;
let renta = document.getElementById('renta').value;
let cuotas =  document.getElementById('cuotas').value;

console.log('cuotas',cuotas)

const calcularCredito = calcularInteres(monto, interes, cuotas);
showInformationCredit(cuotas,calcularCredito,renta); 
}
function calcularInteres(monto, interes, cuotas){
let valorCuotas = (parseInt(monto) *  parseFloat(interes)) / parseInt(cuotas); 
let totalCredito = (parseInt(monto) *  parseFloat(interes)); 
let credito = {
    'valorCuota': valorCuotas,
    'totalCredito': totalCredito
};
return credito;
}

function evaluacionComercial(montoCredito,renta){
let evaluacionComercial = {
    opta: false,
    mensaje: ''
};
const rentaMinima = parseInt(montoCredito) * 0.5;
if(parseInt(renta) > parseInt(rentaMinima)){
    evaluacionComercial.opta = true;
    evaluacionComercial.mensaje = 'Usted puede optar al credito';
    return evaluacionComercial;
}else{
    evaluacionComercial.opta = false;
    evaluacionComercial.mensaje = 'Usted no puede optar al credito';
    return evaluacionComercial;
}

}

const showInformationCredit = (cuotas,calcularCredito,renta) => {

    let mesActual = dayjs().add(1, 'month');

while(llenarTabla.firstChild) {
    llenarTabla.removeChild(llenarTabla.firstChild);
}

    let evComercial = evaluacionComercial(calcularCredito['totalCredito'],renta);
    notificacion.classList.remove('alert-success', 'alert-danger')
    if(evComercial.opta){
        notificacion.re
        notificacion.className += " alert-success";
        notificacion.hidden = false;
        notificacion.innerHTML = evComercial.mensaje;
        for (i =0; i<parseInt(cuotas);i++) {

            let meses = mesActual.format('DD-MM-YYYY');
            mesActual = mesActual.add(1, 'month');

            const row = document.createElement('tr');
            row.innerHTML = `   
                <td>${meses}</td>
                <td>${Math.round(calcularCredito['valorCuota'])}</td>
            `;
            llenarTabla.appendChild(row);
        }
    }else{
        notificacion.className += " alert-danger";
        notificacion.hidden = false;
        notificacion.innerHTML = evComercial.mensaje
    }
}

function getInfo(){
    let position = document.getElementById("selectBancos");
    fetch('app.json')
    .then(response => response.json())
    .then(response => { 
        for (let index = 0; index < response.length; index++) {
            position.innerHTML += "<option interes ="+ response[index].tasaInteres +" value="+ response[index].id +"> "+ response[index].nombreEntidad +" </option>"
        }
    }
    );
} 

document.querySelector("#selectBancos").addEventListener("change", function(){
    let select2 = document.getElementById("selectBancos");
    let selectedOption = this.options[select2.selectedIndex]; console.log(selectedOption.getAttribute("interes"));
    document.getElementById('interes').value = selectedOption.getAttribute("interes"); 
})