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

const apiKey = "d362c4f3bb3a40f2979f2f4fa3e32096"; // API açarını buraya daxil edin
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const recipeTitle = document.getElementById('recipe-title');
const recipeDescription = document.getElementById('recipe-description');

// API URL
const searchUrl = "https://api.spoonacular.com/recipes/complexSearch";
const infoUrl = "https://api.spoonacular.com/recipes/";

searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (query) {
        try {
            // Axtarış edirik
            const searchResponse = await fetch(`${searchUrl}?query=${query}&apiKey=${apiKey}`);
            const searchData = await searchResponse.json();
            
            if (searchData.results.length > 0) {
                const recipe = searchData.results[0];  // İlk nəticə
                const recipeId = recipe.id;  // Yeməyin ID-sini alırıq

                // Reseptin tam məlumatlarını əldə edirik
                const infoResponse = await fetch(`${infoUrl}${recipeId}/information?apiKey=${apiKey}`);
                const recipeInfo = await infoResponse.json();

                // Reseptin başlığını göstəririk
                recipeTitle.textContent = recipeInfo.title;

                // Təlimatlar varsa göstərin
                const instructions = recipeInfo.instructions || "Resept haqqında məlumat yoxdur";
                const cleanInstructions = instructions.replace(/<ol>|<\/ol>|<li>|<\/li>/g, '').trim();
                const steps = cleanInstructions.split(/[.!?](?=\s*[A-Z]|\s*$)/).filter(step => step.trim());

                // Mərhələləri göstər
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



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedbackMessage = document.getElementById('feedback-message');

    if (name && email && message) {
        feedbackMessage.textContent = 'Mesajınız uğurla göndərildi. Təşəkkürlər!';
        feedbackMessage.style.color = '#28a745';  
    } else {
        feedbackMessage.textContent = 'Xahiş edirik bütün sahələri doldurun.';
        feedbackMessage.style.color = '#f00'; 
    }
});



function animateButton() {
    const button = document.querySelector('.triangle-button');
    button.classList.add('animate');
    
    setTimeout(() => {
        button.classList.remove('animate');
    }, 600);  // Animasiya müddəti
  }







  
  

  document.querySelectorAll(".neon-buttons button").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.animation = "shake 0.5s";
    });
  
    button.addEventListener("mouseleave", () => {
        button.style.animation = "";
    });
  });
  
  // Neon shimmer effect (optional)
  setInterval(() => {
    const buttons = document.querySelectorAll(".neon-buttons button");
    buttons.forEach((button, i) => {
        button.style.boxShadow = `0 0 20px rgba(0, 0, 255, 0.4), 0 0 50px rgba(${255 - i * 50}, ${i * 50}, 255, 0.7)`;
    });
  }, 200);
  


