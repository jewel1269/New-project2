async function logMovies() {
    const response = await fetch("https://openapi.programming-hero.com/api/ai/tools");
    const data = await response.json();
    const news = data.data.tools;
    // console.log(news)
    allNews(news)
   
} 
    const allNews = news =>{
        // console.log(news)

    const findOut = document.getElementById('main-container');



        

    
        news.forEach(news => {
            // console.log(news)
       
            const newDiv = document.createElement('div');
            newDiv.classList = `card w-96 glass `;
            newDiv.innerHTML = `
             
            <figure><img class="p-5 rounded-2xl" src="${news.image}" alt="car!"/></figure>
            <div class="card-body">
                <h2><strong>${news.name}</strong></h2>
                <p>${news.description}</p>
            </div>
            <hr class="w-[80%] bg-red-300 divide-dotted">
            <h2 class="ml-8"><strong>ChatGPT</strong></h2>
            <div class="flex ml-8">
                <img src="" alt="">
                <h4>${news.published_in}</h4>
            </div>
            <button onclick="showPhone()" id="btn-primary" class="btn border-t-pink-300 bg-orange-300 text-black ml-[40%] btn-xs rounded-xl mb-2 mt-2 h-6 w-24">See DEtails </button>

            `
            
            findOut.appendChild(newDiv);
          });
    }


    const handleShowDetails = async (id) =>{
        // console.log('ami asi', id)
        // phone data
        const res = await fetch(`
        https://openapi.programming-hero.com/api/ai/tool/01`)
        const info = await res.json();
        const showDetails = info.data
        console.log(showDetails)
       
        }
        const showPhone = (info) =>{
            
          const find = document.getElementById('show-detail-container')
          find.innerHTML =`
          
          `
           
            
        }
        


  logMovies() 
  handleShowDetails()