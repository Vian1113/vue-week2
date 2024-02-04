import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'vivianhuang',
      products: [],
      tempProduct: {},
    }
  },
  methods: {
    checkAdmin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios.post(url)
        .then(() => {
          this.getData();
        })
        .catch((err) => {
          alert(err.response.data.message)
          window.location = 'login.html';
        })
    },
    getData() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios.get(url)
        .then((response) => {
          this.products = response.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    },
    openProduct(item) {
      this.tempProduct = item;
    }
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)vivianhuang\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;

    this.checkAdmin()
  }
}).mount('#app');


// index.js
// const app = {
//   data() {
//     return {
//       apiUrl: 'https://vue3-course-api.hexschool.io/v2',
//       apiPath: 'vivianhuang',
//       products: [],
//       tempProduct: {},
//     };
//   },
//   methods: {
//     checkAdmin() {
//       const url = `${this.apiUrl}/api/user/check`;
//       axios
//         .post(url)
//         .then(() => {
//           console.log('驗證成功！'); 
//           this.getProducts();
//         })
//         .catch((err) => {
//           alert(err.response.data.message)
//           window.location = 'login.html';
//         })
//     },
//     getProducts() {
//       const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
//       axios.get(url)
//         .then((res) => {
//           this.products = res.data.products;
//         })
//         .catch((err) => {
//           alert(err.res.data.message);
//         })
//     },
//     openProduct(item) {
//       this.tempProduct = item;
//     }
//   },
//   mounted() {
//     // 取出 Token
//     const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
//     axios.defaults.headers.common.Authorization = token;

//     this.checkAdmin()
//   }
// }

// createApp(app).mount("#app");