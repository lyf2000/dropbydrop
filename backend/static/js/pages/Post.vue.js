const postTemplate =
    `
 

      <!-- Post Content Column -->
      <div id="post-page">

        <!-- Title -->
        <h1 class="my-4">{{ post.title }}</h1>

        <hr>


        <!-- Post Content -->
        <div id="post-text" class="mt-5"></div>  
        
        <hr>

        <p class="text-right h6 font-weight-light font-italic mb-5">created {{ post.created }}</p>


<!--        <hr>-->

        <!-- Comments Form -->
<!--        <div class="card my-4">-->
<!--          <h5 class="card-header">Leave a Comment:</h5>-->
<!--          <div class="card-body">-->
<!--            <form>-->
<!--              <div class="form-group">-->
<!--                <textarea class="form-control" rows="3"></textarea>-->
<!--              </div>-->
<!--              <button type="submit" class="btn btn-primary">Submit</button>-->
<!--            </form>-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Single Comment &ndash;&gt;-->
<!--        <div class="media mb-4">-->
<!--          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">-->
<!--          <div class="media-body">-->
<!--            <h5 class="mt-0">Commenter Name</h5>-->
<!--            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.-->
<!--          </div>-->
<!--        </div>-->

<!--        &lt;!&ndash; Comment with nested comments &ndash;&gt;-->
<!--        <div class="media mb-4">-->
<!--          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">-->
<!--          <div class="media-body">-->
<!--            <h5 class="mt-0">Commenter Name</h5>-->
<!--            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.-->

<!--            <div class="media mt-4">-->
<!--              <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">-->
<!--              <div class="media-body">-->
<!--                <h5 class="mt-0">Commenter Name</h5>-->
<!--                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="media mt-4">-->
<!--              <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">-->
<!--              <div class="media-body">-->
<!--                <h5 class="mt-0">Commenter Name</h5>-->
<!--                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->


</div>
	`

var Post = {
    template: postTemplate,
    data: function () {
        return {
            post: {}
        }
    },

    methods: {
        markText(text) {
            document.getElementById('post-text').innerHTML = text
        },

        //TODO just send urls
        loadPost() {
            const self = this
            const id = this.$route.params.id
            axios.get(`/posts/${id}`)
                .then(response => {
                    self.post = response.data
                    self.markText(self.post.text)
                })
        }
    },
    created: function () {
        const self = this
        self.loadPost()
    }
};