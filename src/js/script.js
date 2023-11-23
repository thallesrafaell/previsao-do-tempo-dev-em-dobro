const apiKey = "798202be42d84101bfc231144232211";
const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value;

  const dados = await buscaDadosDaCidade(cidade);

  preencherDados(dados);
});

async function buscaDadosDaCidade(cidade) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&aqi=no&lang=pt`;
  console.log(apiUrl);

  const reposta = await fetch(apiUrl);

  const dados = reposta.json();

  return dados;
}

function preencherDados(dados) {
  const cidade = dados.location.name;
  const temperatura = dados.current.temp_c;
  const condicao = dados.current.condition.text;
  const humidade = dados.current.humidity;
  const velociadeVento = dados.current.wind_kph;
  const inconeCondicao = dados.current.condition.icon;

  document.getElementById("cidade").textContent = cidade;

  document.getElementById("temperatura").textContent = `${temperatura}°C`;

  document.getElementById("condicao").textContent = condicao;

  document.getElementById("humidade").textContent = `${humidade}%`;

  document.getElementById(
    "velocidade-vento"
  ).textContent = `${velociadeVento}km/h`;

  document.getElementById("icone-condicao").setAttribute("src", inconeCondicao);
}
