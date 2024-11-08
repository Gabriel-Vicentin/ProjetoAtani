
const link = "https://plcaait2.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22avaliacoes%22%5D%7B%0A++nome%2C%0A++nota%2C%0A++desc%2C%0A++stars%0A%7D";

window.addEventListener("load", async function() {
    const result = await fetch (link,{
        method: "GET",
    })
    const json = await result.json();

    const target = this.document.querySelector("div.reviews");

        for (let i = 0; i < json.result.length; i++){

            const username = this.document.createElement("h3");
                username.innerText = json.result[i].nome;
                username.classList.add("user-details");

            const grade = this.document.createElement("p");
                grade.innerText = json.result[i].nota;
                grade.classList.add("user-details");

            const stars = this.document.createElement("p");
                stars.innerText = json.result[i].stars;
                stars.classList.add("stars");

            const div = this.document.createElement("div");
                div.classList.add("users-stars");
                div.append(grade, stars);

            const reviewtext = this.document.createElement("p");
                reviewtext.innerText = json.result[i].desc;
                reviewtext.classList.add("review-text");

            const card = this.document.createElement("div");
                card.classList.add("review-card");

                card.appendChild(username);
                card.appendChild(div);
                card.appendChild(reviewtext);

                target.appendChild(card);
        }

});
//review-card
//user-details
//review-text
//stars