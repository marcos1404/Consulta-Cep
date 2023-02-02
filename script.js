async function ConsultarCep(cep){
    try {
        const buscaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let buscaCepConvertido = await buscaCep.json();
        if(buscaCepConvertido.erro){
            alert('Cep não encontrado');
            return;
        }
        let complemento = document.getElementById('complemento');
        let bairro = document.getElementById('bairro');
        let uf = document.getElementById('uf');
        let cidade = document.getElementById('cidade');

        complemento.value = buscaCepConvertido.complemento;
        bairro.value = buscaCepConvertido.bairro;
        uf.value = buscaCepConvertido.uf;
        cidade.value = buscaCepConvertido.localidade;
    }
    catch (e) {
        
        alert('Cep invalido');
        console.log(e);
    }
}

function enviarDados() {
    document.getElementById('cep').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('cidade').value = '';
}

let input_cep = document.getElementById('cep');
input_cep.addEventListener('focusout',() =>ConsultarCep(input_cep.value));

let button = document.getElementById('button');
button.addEventListener('click',() => enviarDados());