let apikey = process.env.API_KEY;
let country = 'in';
//90a9793c69b546d480937f0179970745
console.log("welcome to news api");
//https://newsapi.org/v2/top-headlines?country=in&apiKey=90a9793c69b546d480937f0179970745

//GET REQUEST
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`,true);
xhr.onload = function () {
    if(this.status === 200){

        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";
        articles.forEach(function(element){
            
                    let news=`
                   
                    <div class="card col-sm-2"  style="width: 25rem; margin:11px; padding: 1px; border:2px solid black; box-shadow: 2px; ">
                    <img src=" ${element["urlToImage"]}" class="card-img-top" alt="loading...">
                    <div class="card-body">
                    <h5 class="card-title"> ${element["title"]}</h5>
                    <p class="card-text">  ${element["description"]}   </p>
                    <a href=" ${element["url"]}" class="btn btn-primary" target="_blank"> Read More </a>
                    </div>
                   
                    </div>`;
                    newsHtml+= news;
                 });

        newsContentt.innerHTML = newsHtml;
    }

    else{
        console.log("Some error occured")
    }
}

xhr.send();



