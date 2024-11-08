async function carregarProdutos() {
    const url = "https://plcaait2.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22AdicionarProdutos%22%5D%7B%0A++NomeProduto%2C%0A++++Descricao%2C%0A++++Leite%2C%0A++++Classificacao%2C%0A++++Origem%2C%0A++++Produtor%2C%0A++++Tecnologia%2C%0A+++%22ImagemQueijo%22%3A+ImagemQueijo.asset-%3Eurl%0A%7D";

    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error(`Erro HTTP! Status: ${resposta.status}`);

        const dados = await resposta.json();
        exibirProdutos(dados.result);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

function exibirProdutos(produtos) {
    const secao = document.querySelector('main');
    secao.innerHTML = "";

    const categoria = document.createElement('div');
    categoria.classList.add("Categorias");
    secao.appendChild(categoria);

    const containerPequeno = document.createElement('div');
    containerPequeno.classList.add("small-container");
    categoria.appendChild(containerPequeno);

    const linha = document.createElement('div');
    linha.classList.add("fileira");
    containerPequeno.appendChild(linha);
    for (let i = 0; i < 4 && i < produtos.length; i++) {
        const produto = produtos[i];

        const coluna = document.createElement('div');
        coluna.classList.add("col-3");
        linha.appendChild(coluna);

        const paragrafo = document.createElement('p');
        paragrafo.innerText = produto.NomeProduto;

        const divImagem = document.createElement('div');
        divImagem.className = "img-queijos";

        const imagem = document.createElement('img');
        imagem.src = produto.ImagemQueijo;
        imagem.alt = produto.NomeProduto;
        divImagem.appendChild(imagem);

        const link = document.createElement('a');
        link.href = `#${produto.NomeProduto.replace(/\s/g, '')}`;
        link.className = "btn-saiba-mais";
        link.innerText = "Saiba Mais";

        coluna.appendChild(paragrafo);
        coluna.appendChild(divImagem);
        coluna.appendChild(link);
    }
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        
        const artigo = document.createElement('article');
        artigo.id = produto.NomeProduto.replace(/\s/g, '');

        const divSobre = document.createElement('div');
        divSobre.className = "sobre";

        const linhaHorizontal = document.createElement('hr');
        linhaHorizontal.style.color = '#E9AC34';

        const container = document.createElement('div');
        container.className = "small-container";

        const linhaInterna = document.createElement('div');
        linhaInterna.className = "fileira";

        const colunaImagem = document.createElement('div');
        colunaImagem.className = "col-1";

        const imagem = document.createElement('img');
        imagem.src = produto.ImagemQueijo;
        imagem.alt = produto.NomeProduto;
        imagem.id = "queijo-img";
        colunaImagem.appendChild(imagem);

        const colunaInfo = document.createElement('div');
        colunaInfo.className = "col-1";

        const titulo = document.createElement('h1');
        titulo.innerText = produto.NomeProduto;

        const descricao = document.createElement('small');
        descricao.innerText = produto.Descricao;

        const lista = document.createElement('ul');

        const itemLeite = document.createElement('li');
        itemLeite.innerText = "Leite: ${produto.Leite}";

        const itemClassificacao = document.createElement('li');
        itemClassificacao.innerText = "Classificação: ${produto.Classificacao}";

        const itemOrigem = document.createElement('li');
        itemOrigem.innerText = "Origem: ${produto.Origem}";

        const itemProdutor = document.createElement('li');
        itemProdutor.innerText = "Produtor: ${produto.Produtor}";

        const itemTecnologia = document.createElement('li');
        itemTecnologia.innerText = "Tecnologia: ${produto.Tecnologia}";

        lista.appendChild(itemLeite);
        lista.appendChild(itemClassificacao);
        lista.appendChild(itemOrigem);
        lista.appendChild(itemProdutor);
        lista.appendChild(itemTecnologia);

        colunaInfo.appendChild(titulo);
        colunaInfo.appendChild(descricao);
        colunaInfo.appendChild(lista);

        linhaInterna.appendChild(colunaImagem);
        linhaInterna.appendChild(colunaInfo);
        container.appendChild(linhaInterna);

        divSobre.appendChild(linhaHorizontal);
        divSobre.appendChild(container);
        artigo.appendChild(divSobre);

        secao.appendChild(artigo);
    }
}
carregarProdutos();
