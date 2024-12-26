window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.item');

    elements.forEach(element => {
       
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; 

        if (elementPosition < screenPosition) {
            element.classList.add('active'); 
        } else {
            element.classList.remove('active'); 
        }
    });
});


const apiKey = "d362c4f3bb3a40f2979f2f4fa3e32096"; 
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const recipeTitle = document.getElementById('recipe-title');
const recipeDescription = document.getElementById('recipe-description');

const searchUrl = "https://api.spoonacular.com/recipes/complexSearch";
const infoUrl = "https://api.spoonacular.com/recipes/";

searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (query) {
        try {
            
            const searchResponse = await fetch(`${searchUrl}?query=${query}&apiKey=${apiKey}`);
            const searchData = await searchResponse.json();
            
            if (searchData.results.length > 0) {
                const recipe = searchData.results[0];  
                const recipeId = recipe.id; 

                
                const infoResponse = await fetch(`${infoUrl}${recipeId}/information?apiKey=${apiKey}`);
                const recipeInfo = await infoResponse.json();
                recipeTitle.textContent = recipeInfo.title;

                const instructions = recipeInfo.instructions || "Resept haqqında məlumat yoxdur";
                const cleanInstructions = instructions.replace(/<ol>|<\/ol>|<li>|<\/li>/g, '').trim();
                const steps = cleanInstructions.split(/[.!?](?=\s*[A-Z]|\s*$)/).filter(step => step.trim());

               
                recipeDescription.innerHTML = steps.map(step => `<li>${step}</li>`).join('');
            } else {
                recipeTitle.textContent = "Yemək tapılmadı";
                recipeDescription.innerHTML = "<p>Axtardığınız yeməyi tapa bilmədik.</p>";
            }
        } catch (error) {
            console.error("Xəta baş verdi:", error);
            recipeTitle.textContent = "Xəta";
            recipeDescription.innerHTML = "<p>API ilə əlaqə qurularkən xəta baş verdi.</p>";
        }
    }
});


function animateButton() {
    const button = document.querySelector('.triangle-button');
    button.classList.add('animate');
    
    setTimeout(() => {
        button.classList.remove('animate');
    }, 600);  
  }

  

  document.querySelectorAll(".neon-buttons button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.animation = "shake 0.5s";
    });
  
    button.addEventListener("mouseleave", () => {
        button.style.animation = "";
    });
  });
  
  
  setInterval(() => {
    const buttons = document.querySelectorAll(".neon-buttons button");
    buttons.forEach((button, i) => {
        button.style.boxShadow = `0 0 20px rgba(0, 0, 255, 0.4), 0 0 50px rgba(${255 - i * 50}, ${i * 50}, 255, 0.7)`;
    });
  }, 200);
  


