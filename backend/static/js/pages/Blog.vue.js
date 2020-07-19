const postListTemplate =
	`
	
	`

var Blog = {
	template: postListTemplate,
	data: function () {
		return {
			posList: []
		}
	},
	methods: {
		//TODO just send urls
		loadPostList() {
			axios.get('http://127.0.0.1:8000/blogs/1')
				.then(response => {
					console.log(response.data)
				})
		}
	}
};