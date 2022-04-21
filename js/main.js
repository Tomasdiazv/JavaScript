function calcular(){
   var nombre = document.getElementById('nombre').value;
   var email = document.getElementById('inputEmail4').value;
   var celular = document.getElementById('celular').value;
   var monto = document.getElementById('monto').value;
   var cuotas = document.getElementById('cuotas').value;
   var interes = document.getElementById('interes').value;
   var renta = document.getElementById('renta').value;
   const calcularCredito = calcularInteres(monto, interes, cuotas);
   console.table(calcularCredito)
   
   let metodoPago = 0;
    while(metodoPago != 3){
        metodoPago = parseInt(prompt("1= Ver resultados de simulacion; \n2= puedo optar? \n3= Salir"));
        switch(metodoPago){
        case 1:
            console.table(calcularCredito)
            break
        case 2:
            evaluacionComercial(renta, calcularCredito['totalCredito'])
            break
        }
    }
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

function evaluacionComercial(renta, montoCredito){
    const rentaMinima = parseInt(montoCredito) / 0.25;
    if(parseInt(renta) > parseInt(montoCredito)){
        alert('Usted puede optar al credito')
    }else{
        alert('Usted no puede optar al credito') 
    }
    
}

