const postListTemplate =
    `
	    <div class="text-left"  id="blogDetail">
	    <b-card @click="router.push({ name: 'post', params: { id: 1 } })" v-for="post in postList" :key="post.id" :title="post.title" :sub-title="post.created">
    <b-card-text>{{ post.text }}</b-card-text>

  </b-card>
	`

var Blog = {
    template: postListTemplate,
    data: function () {
        return {
            postList: []
        }
    },
    methods: {
        //TODO just send urls
        loadPostList() {
            const self = this
            const id = this.$route.params.id
            axios.get(`http://127.0.0.1:8000/blogs/${id}`)
                .then(response => {
                    self.postList = response.data.posts
                })
        }
    },
    created: function () {
        const self = this
        self.loadPostList()
    }
};