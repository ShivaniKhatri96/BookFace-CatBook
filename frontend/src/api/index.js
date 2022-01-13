import axios from 'axios'

const url = "http://localhost:5000/comments/61de9db14a69b84c1ed6c5fe"

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url, newPost)