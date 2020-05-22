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

// route    GET api/posts
const getPosts = ({ response }: { response: any }) => {
    response.body = {
        success: true,
        data: posts
    }
}

// route    GET api/posts/:id
const getPost = ({ response }: { response: any }) => {
    
}

// route    POST api/posts
const addPost = ({ response }: { response: any }) => {
    
}

// route    PUT api/posts/:id
const updatePost = ({ response }: { response: any }) => {
    
}

// route    DELETE api/posts/:id
const deletePost = ({ response }: { response: any }) => {
    
}

export { getPosts, getPost, addPost, updatePost, deletePost };