const template =
    `
    
    `

// language=HTML
const blogTemplate =
        `
    <div id="blogList">
        <b-card class="mt-3" v-for="blog in blogList" :key="blog.id" :title="blog.title">
            
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
            axios.get('http://127.0.0.1:8000/blogs')
                .then(response => {
                    self.blogList = response.data
                })
        }
    },
    created: function () {
        const self = this;
        self.loadBlogList()
    },

};