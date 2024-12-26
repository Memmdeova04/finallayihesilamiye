 
 document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const feedbackText = document.getElementById('feedbackText').value.trim();
    if (feedbackText === '') return;
  
    const feedbackContainer = document.getElementById('feedbackContainer');
    const newFeedback = document.createElement('li');
    newFeedback.textContent = feedbackText;
    
    feedbackContainer.appendChild(newFeedback);
    document.getElementById('feedbackText').value = '';
  });