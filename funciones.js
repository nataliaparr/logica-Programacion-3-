function factorial(){
    const ingreso = parseFloat(document.getElementById("fact").value);
    let resultado=1;

    if (isNaN (ingreso)){
        document.getElementById("resultado").textContent="Ingrese un número válido"
        //alert("Tiene que ingresar un número");
    } else{
        for (let i=1; i<=ingreso; i++){
            resultado = resultado * i;
        }
        document.getElementById("resultado").textContent="El facotiral del número es: "+resultado;
    }

}
