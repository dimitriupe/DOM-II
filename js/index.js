// Your code goes here

const allImages = document.querySelectorAll('img');
console.log(allImages);

// add event mouseover
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
