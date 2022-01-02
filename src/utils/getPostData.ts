type Post = {
    title: string,
    file: URL,
    content: { source: string }
  }
  
  export default function getPostData(post: Post) {
    return {
      slug: post.file.pathname.split('/').pop().split('.').shift(),
    }
  }