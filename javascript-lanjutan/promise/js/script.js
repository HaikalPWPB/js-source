const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1');
const getAuthor = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id);

getPost()
.then(postData => postData.json())
.then(postData => getAuthor(postData.userId)
	.then(authorData => authorData.json())
	.then(authorData => { return {postData, authorData} })
	)
.then(result => {
	console.log(result.postData);
	console.log(result.authorData);
})
.catch(err => { throw err });







// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err));

