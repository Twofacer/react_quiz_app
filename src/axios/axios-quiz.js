import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-c5c05.firebaseio.com/'
})