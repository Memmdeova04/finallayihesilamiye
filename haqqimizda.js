document.addEventListener('DOMContentLoaded', function() {
    const expandButton = document.getElementById('expandButton');  
    const description = document.getElementById('description');   
    const aboutSection = document.getElementById('aboutSection'); 
    
    const additionalText = `
        Bizim komandamız, qida sənayesində uzun illər təcrübəyə malik bir qrup mütəxəssisdən ibarətdir. 
        Bizim əsas məqsədimiz həm dadlı, həm də sağlam yeməklər təqdim etməkdir. Bu veb sayt vasitəsilə siz 
        ən sevdiyiniz yeməkləri daha asan hazırlamağı öyrənə bilərsiniz. Biz hər zaman daha yaxşısını təqdim etməyə çalışırıq!
    `;  
    expandButton.addEventListener('click', function() {
        if (!aboutSection.classList.contains('expanded')) {
            description.innerHTML += `<p>${additionalText}</p>`; 
            aboutSection.classList.add('expanded'); 
            expandButton.innerHTML = 'Daha az məlumat'; 
        } else {
            description.innerHTML = description.innerHTML.split('<p>')[0]; 
            aboutSection.classList.remove('expanded'); 
            expandButton.innerHTML = 'Daha çox məlumat';  
        }
    });
});
