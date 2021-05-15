import axios from 'axios'
export default () => {
    return axios.create({
        baseURL: 'http://localhost:3000/'
        
    })
}
////axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')