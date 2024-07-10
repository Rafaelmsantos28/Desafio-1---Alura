function criptografar() {
    let texto = document.getElementById('input-text').value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('output-text').innerText = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById('input-text').value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('output-text').innerText = textoDescriptografado;
}

function copiarTexto() {
    let texto = document.getElementById('output-text').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.log('Algo deu errado', err);
    });
}
