import '@/store/api/api'
import axs from '@/store/api/api'

export function loadPostList(blogId: number) {
    return axs.get(`/blogs/${blogId}`)
}

export function loadPost(postId: number) {
    return axs.get(`/posts/${postId}`)
}
