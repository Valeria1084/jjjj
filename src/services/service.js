import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})
const getTodos = () => axiosInstance('/todos').then(value => value.data)
const getAlbums = () => axiosInstance('/albums').then(value => value.data)
const getComment = () => axiosInstance('/comments').then(value => value.data)
const getPost = (id) => axiosInstance('/posts/'+id).then(value => value.data)

export {
    getTodos,getAlbums,getPost,getComment
}