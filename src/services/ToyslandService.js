import axios from 'axios'
 



const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001', // Indicas el puesrto en el que está levantada la API
  withCredentials: true
})

http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/login')
    }

    return Promise.reject(error)
  }
)

const login = ({ email, password }) => http.post('/login', { email, password })
const search = (search) => http.get('/search', {params: { q: search }})
const register = (data) => http.post('/register', data)
const logout = () => http.post('/logout')
const profile = (currentUser, id) => http.patch(`/users/${id}`, currentUser)
const getUser = (id) => http.get(`/users/${id}`)
const categories = () => http.get('/categories');
const product = (product) => http.post('/items/new', product)
const editProduct = (product, id) => http.patch(`/items/${id}`, product)
const getByCategory = (category) => http.get(`/categories/${category}`)
const getAll = () => http.get('/items')
const getThisProduct = (id) => http.get(`/items/${id}`)
const createLike = (id, product) => http.post(`/user/${id}/like/${product}`)
const showLikes = (id) => http.get(`/user/likes/${id}`)
const createChat = (id, idObj, product) => http.post(`/chats/user/${id}/${idObj}/${product}`)
const showChat = (product) => http.get(`/chats/${product}`)
const showAllMyChats = (id) => http.get(`/chats/all/${id}`)
const sendMessage = (id, idChat) => http.get(`/chats/${id}/${idChat}`)
const createMessage = (idChat, data) => http.post(`/messages/${idChat}`, data)
const findMessages = (id) => http.get(`/messages/${id}`)




export default {
  login,
  search,
  register,
  logout,
  getUser,
  profile,
  categories,
  product,
  editProduct,
  getByCategory,
  getAll,
  getThisProduct,
  createLike,
  showLikes,
  createChat,
  showChat,
  showAllMyChats,
  sendMessage,
  createMessage,
  findMessages
}