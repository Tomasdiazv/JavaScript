function calcular(){
   let nombre = document.getElementById('nombre').value;
   let email = document.getElementById('inputEmail4').value;
   let celular = document.getElementById('celular').value;
   let monto = document.getElementById('monto').value;
   let cuotas = document.getElementById('cuotas').value;
   let interes = document.getElementById('interes').value;
   let renta = document.getElementById('renta').value;
   const calcularCredito = calcularInteres(monto, interes, cuotas);
   console.table(calcularCredito)
   optionList(renta, calcularCredito); 
}
function calcularInteres(monto, interes, cuotas){
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ]; 
    let valorCuotas = (parseInt(monto) *  parseFloat(interes)) / parseInt(cuotas); 
    let totalCredito = (parseInt(monto) *  parseFloat(interes)); 
    let credito = {
        'valorCuota': valorCuotas,
        'totalCredito': totalCredito
    };
    for(i =0; i<parseInt(cuotas);i++){
        document.write(`mes: ${meses[i]}\n valor: ${Math.round(valorCuotas)}<br>`)
        }
   /*  let findMes = meses.find((x)=> x=='Marzo');
    console.log('posicion: ', findMes) */
    return credito;
}

function evaluacionComercial(renta, montoCredito){
    const rentaMinima = parseInt(montoCredito) * 0.5;
    if(parseInt(renta) > parseInt(rentaMinima)){
        alert('Usted puede optar al credito')
    }else{
        alert('Usted no puede optar al credito') 
    }
    
}

const optionList = (renta, calcularCredito) => {
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

