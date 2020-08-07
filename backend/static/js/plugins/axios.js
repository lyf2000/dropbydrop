console.log('env', process.env);

const AXIOS = axios.create({
    baseURL: 'https://domain.com/foo/bar',
    /* other custom settings */
  })

