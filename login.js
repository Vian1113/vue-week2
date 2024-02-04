import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

// createApp({
//   data() {
//     return {
//       user: {
//         username: '',
//         password: '',
//       },
//     }
//   },
//   methods: {
//     login() {
//       const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
//       axios.post(api, this.user).then((response) => {
//         const { token, expired } = response.data;
//         // 寫入 cookie token
//         // expires 設置有效時間
//         document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
//         window.location = 'products.html';
//       }).catch((err) => {
//         alert(err.response.data.message);
//       });
//     },
//   },
// }).mount('#app');


// login.js
const app = {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const apiUrl = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios
        .post(apiUrl, this.user)
        .then((res) => {
          const { token, expired } = res.data;
           
          //使用document.cookie 將token存入網站cookie中，再使用expired 設置過期時間
            document.cookie = `vivianhuang=${token}; expires=${new Date(expired)}; path=/`;
            window.location = 'index.html';
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    },
  },
};

createApp(app).mount("#app");





