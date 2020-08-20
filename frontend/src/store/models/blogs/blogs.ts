import { Module, Action, getModule, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { Blog } from '@/store/models/blogs/blogs.d.ts'
import { loadBlogList } from '@/store/api/blogs'


@Module({
    namespaced: true,
    name: 'blogs',
    store,
    dynamic: true
})
class BlogsModule extends VuexModule {
    _blogList: Blog[] = []


    @Mutation
    setEventList(blogList: Blog[]) {
        this._blogList = blogList
    }

    @Action({commit: 'setEventList'})
    storeBlogList(blogList: Blog[] = []) {
        
        return blogList

        // const data = await loadBlogList(params)
        // const { next, previous } = data
        
        // this.changeNext(next)
        // this.changePrevious(previous)
        
        // return data.results  || [] as (EventItem)[]
    }
}

export default getModule(BlogsModule)