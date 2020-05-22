import { Router } from  'https://deno.land/x/oak/mod.ts';
import { getPosts, getPost, addPost, updatePost, deletePost } from './controller/posts.ts';

const router = new Router();

router.get('/api/posts', getPosts)
    .get('/api/posts/:id', getPost)
    .post('/api/posts', addPost)
    .put('/api/posts/:id', updatePost)
    .delete('/api/posts/:id', deletePost);

export default router;