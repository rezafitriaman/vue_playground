<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="handleClick">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavo">
      {{ isFavorite ? "delete" : "make" }} Favo
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">delete</button>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  /* props: [ 
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite' 
  ], */
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      /* validator: function(value) {
        return value === '1' || value === '0'
      } */
    },
  },
  emits: ['toggle-favorite', 'delete'],
/*   emits: {
    'toggle-favorite': function(id) {
      if(id) {
        return true;
      } else {
        console.warn('id is misseing!!');
        return false
      }
    },
    'delete': function(id) {
      if(id) {
        return true;
      } else {
        console.warn('id is misseing!!');
        return false
      }
    }
  }, */
  data() {
    return { 
      detailsAreVisible: false,
    }
  },
    methods: {
      handleClick: function () {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavo: function () {
        this.$emit('toggle-favorite', this.id);
      },
      deleteFriend() {
        this.$emit('delete', this.id);
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
