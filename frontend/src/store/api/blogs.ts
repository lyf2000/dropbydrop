import '@/store/api/api'
import axs from '@/store/api/api'

export function loadBlogList() {
    return axs.get('/blogs')
}
