let post = JSON.stringify({
	title: 'Post title',
	body: 'Post body',
	userId: 1,
});

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json; charset=UTF-8 ',
	},
	body: post,
})
	.then((response) => response.json())
	.then((json) => console.log(json))
	.catch((error) => console.log(error));
