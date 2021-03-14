// Create a Vue application
const app = Vue.createApp({})

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{friend.name}} {{detailsAreVisible}}</h2> 
    <button @click="handleClick">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>  
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li> 
    `,
    data: function () {
        return {
            name: 'friend-contact',
            friend: {
                id: 'Manuel',
                name: 'Manuel Lorenz', 
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'  
            },
            detailsAreVisible: false
        }
    },
    methods: {
        handleClick: function() { 
            this.detailsAreVisible = !this.detailsAreVisible
          }
    },
  })

app.mount('#app')

console.log('vue')