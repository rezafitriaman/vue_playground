<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition>
      <p v-if="paraIsVisible">This is only sometime visible</p>
    </transition>
    <button @click="toggleParagraph">Toggle paragraph</button>
  </div>

  <div class="container">
    <transition name="button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers" v-else-if="usersAreVisible">Hide users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <h4>Lets Go!</h4>
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import BaseModal from './components/BaseModal.vue'


export default {
  name: 'App',
  components: {
    BaseModal,
  },
  data() {
    return {
      paraIsVisible: false,
      animatedBlock: false,
      dialogIsVisible: false,
      usersAreVisible: false,
    }
  },
  methods: {
    showUsers() {
      this.usersAreVisible = true
    },
    hideUsers() {
      this.usersAreVisible = false
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
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

*{
  box-sizing: border-box;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
  color: white;
  cursor: pointer;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform .5s ease-out ; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.4s ease-in-out forwards;
}

.v-enter-from {/* 
  opacity: 0;
  transform: translateY(-30px);
 */}

.v-enter-active {
  /* transition: all .4s ease-in; */
  animation: slide-fade 0.4s ease-in-out;
}

.v-enter-to {/* 
  opacity: 1;
  transform: translateY(0);
 */}

.v-leave-from {
  opacity: 1;
  transform: translateX(-150px);
}

.v-leave-active {
  transition: all .4s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(0);
}

p {
  transform: translateX(-150px);
}

.modal-enter-from {/* 
  opacity: 0;
  transform: translateY(-30px);
 */}

.modal-enter-active {
  /* transition: all .4s ease-in; */
  animation: modal 0.4s ease-in-out;
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
}

.button-enter-active {
  transition: opacity .4s ease-out;

}

.button-leave-active {
  transition: opacity .4s ease-in;

}

.button-enter-to,
.button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.5);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}

</style>
