import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

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
      //apiUrl 用來儲存api網址
      const apiUrl = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios
        //帶入使用者帳密
        .post(apiUrl, this.user)
        .then((res) => {
          //如果登入成功就取出token,expired的資料
          const { token, expired } = res.data;
           
          //使用document.cookie 將token存入網站cookie中，再使用expired 設置過期時間
            document.cookie = `vivianhuang=${token}; expires=${new Date(expired)}; path=/`;
            window.location = 'index.html';
        })
        .catch((err) => {
          console.log(err.response.data.message);
          alert("帳號或密碼錯誤");
        });
    },
  },
};

createApp(app).mount("#app");





