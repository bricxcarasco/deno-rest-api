import { Post } from '../interface/post.ts';

let posts = [
    {
        id: 1,
        title: "Post One",
        body: "This is product one",
        author: "Author One"
    },
    {
        id: 2,
        title: "Post Two",
        body: "This is product two",
        author: "Author Two"
    },
    {
        id: 3,
        title: "Post Three",
        body: "This is product three",
        author: "Author Three"
    },
    {
        id: 4,
        title: "Post Four",
        body: "This is product four",
        author: "Author Four"
    }
];

// GET api/posts
const getPosts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        posts
    }
}

// GET api/posts/:id
const getPost = ({ params, response }: { params: { id: number }, response: any }) => {
    let responseBody;
    let status;
    const post: Post | undefined = posts.find(post => post.id == params.id);
    if (post) {
        status = 200;
        responseBody = {
            success: true,
            post
        }
    } else {
        status = 404;
        responseBody = {
            message: 'Post not found'
        }
    }
    response.status = status;
    response.body = responseBody;
}

// POST api/posts
const addPost = async ({ request, response }: { request: any, response: any }) => {
    let status;
    let responseBody;
    let lastId = posts.reduce(
        (max, post) => (post.id > max ? post.id : max), posts[0].id
    );
    const requestBody = await request.body();
    if (!request.hasBody) {
        status = 400;
        responseBody = {
            message: 'Please add request body!'
        }
    } else {
        const post: Post = requestBody.value;
        post.id = lastId+1;
        posts.push(post);
        status = 201;
        responseBody = {
            success: true,
            message: 'Post has been added!',
            post
        }
    }
    response.status = status;
    response.body = responseBody;
}

// PUT api/posts/:id
const updatePost = async ({ params, request, response }: { params: { id: number }, request: any, response: any }) => {
    let status;
    let responseBody;
    const post: Post | undefined = posts.find(post => post.id == params.id);
    if (post) {
        const requestBody = await request.body();
        if (!request.hasBody) {
            status = 400;
            responseBody = {
                message: 'Please add request body!'
            }
        } else {
            const postUpdate: { title?: string, body?: string, author?: string } = requestBody.value;
            posts = posts.map(post => post.id == params.id ? {...post, ...postUpdate} : post);
            status = 200;
            responseBody = {
                success: true,
                posts 
            }
        }
    } else {
        status = 404;
        responseBody = {
            message: 'Post not found'
        }
    }
    response.status = status;
    response.body = responseBody;
}

// DELETE api/posts/:id
const deletePost = ({ params, response }: { params: { id: number }, response: any }) => {
    let status;
    let responseBody;
    const post: Post | undefined = posts.find(post => post.id == params.id);
    if (post) {
        posts = posts.filter(post => post.id != params.id);
        status = 200;
        responseBody = {
            success: true,
            message: 'Post has been deleted!',
            posts
        }
    } else {
        status = 404;
        responseBody = {
            message: 'Post not found!'
        }
    }
    response.status = status;
    response.body = responseBody;
}

export { getPosts, getPost, addPost, updatePost, deletePost };