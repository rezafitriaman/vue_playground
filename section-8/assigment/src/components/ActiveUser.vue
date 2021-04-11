<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>User name: {{this.username}}</h2>
        <h3>Age: {{this.age}} years</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    props: {
        username: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        }
    }
};
</script>