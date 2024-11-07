const URL = "https://plcaait2.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22parceiro%22%5D%7B%0A++title%2C%0A++image%2C%0A++address%2C%0A++phone%0A%7D%0A";

window.addEventListener("load", async function() {
    const resultado = await fetch(URL, {
        method: "GET",
    });

    const json = await resultado.json();
    const target = document.querySelector(".parceiro-row");

    json.result.forEach(parceiro => {
        const parceiroDiv = document.createElement("div");
        parceiroDiv.classList.add("parceiro");

        const img = document.createElement("img");
        // Construindo a URL da imagem do Sanity
        const imageUrl = `https://cdn.sanity.io/images/plcaait2/production/${parceiro.image.asset._ref
            .replace('image-', '')
            .replace('-jpg', '.jpg')
            .replace('-png', '.png')
            .replace('-webp', '.webp')}`;
            
        img.setAttribute("src", imageUrl);
        img.setAttribute("alt", parceiro.title);

        const endereco = document.createElement("p");
        endereco.innerHTML = `${parceiro.address}<br>${parceiro.phone}`;

        parceiroDiv.appendChild(img);
        parceiroDiv.appendChild(endereco);

        target.appendChild(parceiroDiv);
    });
});