function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.text("Relatório de Manutenção Preventiva", 10, 10);
    
    let y = 20;

    // Função para pegar dados de uma seção
    function adicionarSecao(titulo, prefixo) {
        doc.text(titulo, 10, y);
        y += 10;
        
        const temp = document.getElementById(prefixo + '-temp').value;
        const cpu = document.getElementById(prefixo + '-cpu').value;
        const err = document.getElementById(prefixo + '-err').value;
        const rede = document.getElementById(prefixo + '-rede').value;
        
        doc.text(`Temperatura: ${temp}`, 20, y);
        doc.text(`Uso CPU: ${cpu}`, 20, y + 10);
        doc.text(`Interfaces com err-disable: ${err}`, 20, y + 20);
        doc.text(`Pontos de rede OK (%): ${rede}`, 20, y + 30);
        y += 50; // Espaço entre as seções
    }

    // Chame a função para cada seção do seu formulário
    adicionarSecao('Switches datacenter 1', 'sw1');
    // Adicione mais chamadas para os outros switches
    // Exemplo: adicionarSecao('1º Andar - Switch 1', 's1-s1');
    
    doc.save("relatorio-manutencao.pdf");
}
