// Your code goes here

// add event mouseover
const allImages = document.querySelectorAll('img');
console.log(allImages);

allImages.forEach(images => {
	images.addEventListener('mouseover', (event) => {
        event.target.style.transform = 'scale(1.2)';
        event.target.style.transition = 'all 0.3s';
	});
});

// add event mouseout
allImages.forEach(images => {
	images.addEventListener('mouseout', (event) => {
        event.target.style.transform = 'scale(1)';
	});
});

// add event double click
const title = document.querySelector('h1');
console.log(title);

title.addEventListener('dblclick', () => {
    title.style.color = '#17A2B8';
  });

// 
