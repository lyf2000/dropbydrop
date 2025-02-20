const template =
    `
    
    `

// language=HTML
const blogTemplate =
        `
    <div id="home-page">
        <b-card @click="router.push({ name: 'blog', params: { id: blog.id } })" class="mt-3" v-for="blog in blogList" :key="blog.id" :title="blog.title">
        </b-card>
    </div>
`

var Home = {
    template: blogTemplate,
    data: function () {
        return {
            blogList: [],
            items: [
                {message: 'Foo'},
                {message: 'Bar'}
            ]
        }
    },
    methods: {
        loadBlogList() {
            const self = this
            axios.get('/blogs')
                .then(response => {
                    self.blogList = response.data
                })
        }
    },
    created: function () {
        const self = this;
        self.loadBlogList();
    },

};