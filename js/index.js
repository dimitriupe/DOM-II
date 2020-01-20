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

// add event mouseenter
const links = document.querySelectorAll('a');
console.log(links);

links.forEach(link => {
	link.addEventListener('mouseenter', (event) => {
		event.target.style.color = '#17A2B8';
	});
});

// add event mouseleave
links.forEach(link => {
	link.addEventListener('mouseleave', (event) => {
		event.target.style.color = 'black';
	});
});

// add event resize
const firstImage = document.querySelectorAll('img');

window.addEventListener('resize', () => {
  firstImage[0].src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80"
})

// add event click
const subheadings = document.querySelectorAll('h2');
console.log(subheadings);

subheadings.forEach(h2s => {
	h2s.addEventListener('click', (event) => {
		event.target.style.color = '#17A2B8';
	});
});