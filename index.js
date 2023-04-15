// let apikey = '';
let country = 'in';

console.log("welcome to news api");

//GET REQUEST
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://backend-latest-news.onrender.com/data`,true);
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
