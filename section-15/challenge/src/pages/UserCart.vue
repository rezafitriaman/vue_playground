<template>
    <section>
        <h2>Your Cart</h2>
      <h3>Totaal Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge></h3>
        <ul>
            <!--TODO write <user-cart>-->
            <li>yess we gonna sell thisss</li>
        </ul>
    </section>
</template>

<script>

export default {
  inject: ['cart'],
  components: {

  },
  computed: {
    cartTotal() {
      return this.cart.total.toFixed(2);
    }
  }
}
</script>

<style scoped>
section {
    margin: 2rem auto;
    max-width: 40rem;
}

h2 {
    color: #292929;
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 1rem;
}

h3 {
    text-align: center;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>