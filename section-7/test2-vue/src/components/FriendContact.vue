<template>
  <li>
    <h2>{{ friend.name }} {{ detailsAreVisible }}</h2>
    <button @click="handleClick">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  data() {
    return {
      name: "friend-contact",
      friend: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
      detailsAreVisible: false,
    };
  },
  methods: {
    handleClick: function () {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
