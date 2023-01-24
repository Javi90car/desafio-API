const formulario = document.querySelector("form");
const monto = document.querySelector("#monto");
const moneda = document.querySelector("#moneda");
const result = document.querySelector(".result");
const buscar = document.querySelector("button");



buscar.addEventListener("click", async (e) => {
  e.preventDefault();
  const montoIngresado = monto.value;
  const monedaIngresada = moneda.value;
  try{
  const res = await fetch("https://mindicador.cl/api");
  const data = await res.json();
  
  console.log(monedaIngresada)

  let resultadoConvertir = montoIngresado / data[monedaIngresada].valor;
  result.innerHTML = `<h3>Resultado: ${resultadoConvertir}</h3>`;

  function getAndCreateDataToChart(data) {
    const tipoGrafica = "line";
    const nombreMoneda = data.map((dat) => dat.codigo);
    const titulo = "Monedas";
    const colorLinea = "red";
    const valores = data.map((dat) => {
      const valor = dat.valor();
      return Number(dat);
    });
    const config = {
      type: tipoGrafica,
      data: {
      labels: nombreMoneda,
      datasets: [
        {
        label: titulo,
        backgroundColor: colorLinea,
        data: valores
        }
        ]
        }
        };
        return config;
        
    }
    
  } catch(e){
      alert(e.message);
    }

  
})1