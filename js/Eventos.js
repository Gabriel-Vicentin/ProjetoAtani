const EVENTOS_URL = "https://plcaait2.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == 'evento']{titulo, descricao, imagem}";

window.addEventListener("load", async function() {
    const resultado = await fetch(EVENTOS_URL, {
        method: "GET",
    });

    const json = await resultado.json();
    const target = document.querySelector(".eventos-container");

    json.result.forEach(evento => {
        const eventoDiv = document.createElement("div");
        eventoDiv.classList.add("evento");

        const img = document.createElement("img");
        // Construindo a URL da imagem do Sanity
        const imageUrl = `https://cdn.sanity.io/images/plcaait2/production/${evento.imagem.asset._ref
            .replace('image-', '')
            .replace('-jpg', '.jpg')
            .replace('-png', '.png')
            .replace('-webp', '.webp')}`;
        img.setAttribute("src", imageUrl);
        img.setAttribute("alt", evento.titulo);

        const titulo = document.createElement("h2");
        titulo.textContent = evento.titulo;

        const descricao = document.createElement("p");
        descricao.textContent = evento.descricao;

        eventoDiv.appendChild(img);
        eventoDiv.appendChild(titulo);
        eventoDiv.appendChild(descricao);

        target.appendChild(eventoDiv);
    });
});
