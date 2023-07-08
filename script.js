
// Get the necessary elements from the HTML
let inputText = document.querySelector('#input-text');
let vowelCount = document.querySelector('#vowel-count');
let countBtn = document.querySelector('#count-btn');

 

countBtn.addEventListener('click', function()  {
 
  const text = inputText.value.toLowerCase();

 
 
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const count = text.split('').filter(char => vowels.includes(char)).length;

 
 
  vowelCount.textContent = count;
});