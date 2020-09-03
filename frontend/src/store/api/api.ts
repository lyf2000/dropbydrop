import axios from 'axios'
console.log(process.env.VUE_APP_BACKEND_HOST || 'http://localhost:8000', 'hhh');

const axs = axios.create({
    baseURL:  process.env.VUE_APP_BACKEND_HOST || 'http://localhost:8000',
	headers: {
		'Content-Type': 'application/json',
        'Accept': 'application/json',
	}
})

export default axs