<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      isLoggedIn: false,
      products: [
        {
          id: 'p1',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description: 'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
                  'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
                  'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      cart: {
        item: [], 
        total: 0,
        qty: 0 
      }
    }
  },
  methods: {
    addProductToCart(productData) {
      const productInCartIndex = this.cart.item.findIndex(
              (cartItem) => cartItem.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.cart.item[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        this.cart.item.push(newItem);
      }
      this.cart.qty++;
      this.cart.total += productData.price;
    },
    removeProductFromCart(prodId) {
      const productInCartIndex = this.cart.item.findIndex(
              (cartItem) => cartItem.productId === prodId
      );
      const prodData = this.cart.item[productInCartIndex];
      this.cart.item.splice(productInCartIndex, 1);
      this.cart.qty -= prodData.qty;
      this.cart.total -= prodData.price * prodData.qty;
    },
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    }
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      products: this.products,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
