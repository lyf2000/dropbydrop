const postListTemplate =
    `
	    <div class="text-left"  id="blogDetail">
	    <b-card @click="router.push({ name: 'post', params: { id: post.id } })" v-for="post in postList" class="mt-3" :key="post.id" :title="post.title" :sub-title="post.created">

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
            axios.get(`/blogs/${id}`)
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