import { Module, Action, getModule, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { Post } from '@/store/models/posts/posts.d.ts'


@Module({
    namespaced: true,
    name: 'posts',
    store,
    dynamic: true
})
class PostsModule extends VuexModule {
    _postList: Post[] = []
    _post: Post | null = null


    @Mutation
    setPostList(postList: Post[]) {
        this._postList = postList
    }

    @Action({commit: 'setPostList'})
    storePostList(postList: Post[] = []) {
        
        return postList

        // const data = await loadBlogList(params)
        // const { next, previous } = data
        
        // this.changeNext(next)
        // this.changePrevious(previous)
        
        // return data.results  || [] as (EventItem)[]
    }

    @Mutation
    setPost(post: Post | null) {
        this._post = post
    }

    @Action({commit: 'setPost'})
    storePost(post: Post | null = null) {
        return post
    }


    get postList() {
        return this._postList
    }


    get post() {
        return this._post
    }
}

export default getModule(PostsModule)