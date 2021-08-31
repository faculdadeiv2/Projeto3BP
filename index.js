/* Nome e idade do usuário: */
function alertarDadosUsuario() {
  let nome = document.getElementById('nomeUsuario').value;
  let idade = document.getElementById('idade').value;

  let idadeMeses = idade * 12;
  let idadeDias = idade * 365;
  let idadeHoras = idade * 8760;
  alert('Olá, ' + nome + '... \n' + 
        'Você tem ' + idadeMeses + ' meses, ' + 
        idadeDias + ' dias ou ' + 
        idadeHoras + ' horas');
}

/* Adicionar a função no clique do botão: */
const btn = document.getElementById('btnAlertar');
btn.addEventListener('click', alertarDadosUsuario)

const numerosDecimais = 2;

/* Cálculos circunferência: */
function calcularCircunferencia(){
  // Cirfunferência:
  let raio = document.getElementById('raio').value;
  let circunferencia = 2 * Math.PI * raio;

  // Área:
  let areaCircunferencia = Math.PI * raio;

  let circunferenciaValor = document.getElementById('circunferencia'); 
  circunferenciaValor.innerText = circunferencia.toFixed(numerosDecimais);

  let areaCircunferenciaValor = document.getElementById('areaCircunferencia'); 
  areaCircunferenciaValor.innerText = areaCircunferencia.toFixed(numerosDecimais);
}

/* Cálculos cubo: */
function calcularCubo() {
  let baseCubo = document.getElementById('baseCubo').value;

  let areaCubo = Math.pow(baseCubo, 2);
  let volume = Math.pow(baseCubo, 3);
  let areaTotal = baseCubo * 6;
  let areaLateral = 4 * Math.pow(baseCubo, 2)

  let areaCuboValor = document.getElementById('areaCubo'); 
  areaCuboValor.innerText = areaCubo.toFixed(numerosDecimais);

  let volumeValor = document.getElementById('volume'); 
  volumeValor.innerText = volume.toFixed(numerosDecimais);

  let areaTotalValor = document.getElementById('areaTotal'); 
  areaTotalValor.innerText = areaTotal.toFixed(numerosDecimais);

  let areaLateralValor = document.getElementById('areaLateral'); 
  areaLateralValor.innerText = areaLateral.toFixed(numerosDecimais);
}

/* Cálculos Trapézio: */
function calcularTrapezio() {
  let baseMaior = document.getElementById('baseMaior').value;
  let baseMenor = document.getElementById('baseMenor').value;
  let altura = document.getElementById('altura').value;

  let areaTrapezio = (altura * (baseMaior * 1 + baseMenor * 1)) / 2;

  let areaTrapezioValor = document.getElementById('areaTrapezio'); 
  areaTrapezioValor.innerText = areaTrapezio.toFixed(numerosDecimais);
}

function calculos() {
  calcularCircunferencia();
  calcularCubo();
  calcularTrapezio();
}

const btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', calculos);

/* Número aleatório: */
function numeroAleatorio() {
  let numero = Math.floor(Math.random() * 11);

  alert('O número é: ' + numero);
}

const btnAleatorio = document.getElementById('btnAleatorio');
btnAleatorio.addEventListener('click', numeroAleatorio);