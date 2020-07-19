const postTemplate =
    `
 <div class="row justify-content-md-center">

      <!-- Post Content Column -->
      <div class="col-lg-7">

        <!-- Title -->
        <h1 class="mt-4">{{ post.title }}</h1>

        <hr>

        <!-- Date/Time -->
        <p>Posted on {{ post.created }}</p>

        <hr>

        <img class="img-fluid rounded" src="http://placehold.it/900x300" alt="">

        <hr>

        <!-- Post Content -->
        <div id="ttt"></div>  
        
        
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
            console.log('mark')
            document.getElementById('ttt').innerHTML =
                marked(text);
        },

        //TODO just send urls
        loadPostList() {
            const self = this
            const id = this.$route.params.id
            axios.get(`http://127.0.0.1:8000/posts/${id}`)
                .then(response => {
                    self.post = response.data
                    self.markText(self.post.text)
                })
        }
    },
    created: function () {
        const self = this
        self.loadPostList()
    }
};