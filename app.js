let getDiv = document.getElementById("get-div");
let inputText = document.getElementById("inputtxt");
const getnews = () => {
  fetch(`https://newsapi.org/v2/everything?q=${inputText.value}&from=2024-04-03&sortBy=publishedAt&apiKey=b0ba4158f61946d8bc073cda40fdca1a
`)
    .then((data) => data.json())
    .then((data) => {
      for (let i = 0; i <= data.articles.length; i++) {
        console.log(data.articles[i]);
        getDiv.innerHTML += `<div
      class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-card my-3 text-center"
    >
      <div class="card bg-dark text-light" style="width: 18rem">
        <img src="${
          data.articles[i].urlToImage
        }" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${data.articles[i].title.slice(0, 20)}</h5>
          <p class="card-text">
           ${data.articles[i].description.slice(0, 200)}
          </p>
          <a href="#" class="btn btn-warning">Go somewhere</a>
        </div>
      </div>
    </div>`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
