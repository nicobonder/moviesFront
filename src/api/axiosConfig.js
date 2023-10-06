// import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
//     headers: {"ngrok-skip-browser-warning": "true"}
// });

import axios from 'axios';

export default axios.create({
baseURL: 'http://localhost:8081',
headers: {"skip-browser-warning": "true"}
}); 