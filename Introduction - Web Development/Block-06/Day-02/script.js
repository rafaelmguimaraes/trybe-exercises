function configuraListaEstados() {
    const listaEstado = document.getElementById('estado');
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
		.then(res => res.json())
		.then(estados => {
      estados.sort(function(a, b) {
        return +(a.sigla > b.sigla) || +(a.sigla === b.sigla) - 1;
      });
            
			estados.map(estado => {
				
				const option = document.createElement('option');
		
				option.setAttribute('value', estado.sigla);
				option.textContent = estado.nome;
		
				listaEstado.appendChild(option);
			});
		})
}

function formataCPF(event){
  let inputCPF = event.target.value;
  
  //retira os caracteres indesejados...
  inputCPF = inputCPF.replace(/[^\d]/g, "");

  //realizar a formatação...
  inputCPF =  inputCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  event.target.value = inputCPF;
} 

window.onload = function () {
  
  configuraListaEstados();
  document.getElementById('cpf').addEventListener('keyup',formataCPF);
  
  var picker = new Pikaday({ 
    field: document.getElementById('data-inicio'),
    format: 'DD/MM/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`; }
  });

  validation.init("#resume-form");
  
  
}
