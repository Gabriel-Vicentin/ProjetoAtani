const link = "https://plcaait2.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22premiacoes%22%5D%7B%0A++%22imagem1%22%3A+imagem1.asset-%3Eurl%2C%0A++%22imagem2%22%3A+imagem2.asset-%3Eurl%2C%0A++titulo%0A%7D%0A"

window.addEventListener("load", async function(){
    const result = await fetch(link, {
        method: "GET",
    })
    const json = await result.json();

    const target = document.querySelector("main");
        
        for (let i = 0; i < json.result.length; i++){

            const titulo = document.createElement('p');
            titulo.innerText = json.result[i].titulo;

            const imagem1 = document.createElement('img');
            imagem1.setAttribute("src", json.result[i].imagem1);
            imagem1.classList.add("img");

            const imagem2 = document.createElement('img');
            imagem2.setAttribute("src", json.result[i].imagem2);
            imagem2.classList.add("img");

            const teste = document.createElement("article");
            teste.classList.add("queijos");

            const div = document.createElement('div');
            div.classList.add("alinhar");
            div.append(imagem1, imagem2);


            teste.appendChild(titulo);
            /*teste.appendChild(imagem1);
            teste.appendChild(imagem2);*/
            teste.appendChild(div);
                
            target.appendChild(teste);
    
    }
       
})

