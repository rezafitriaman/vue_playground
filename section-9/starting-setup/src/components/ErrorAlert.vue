<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
dialog {
    position: fixed;
    display: block;
    top: 20vh;
    left: 30%;
    width: 40%;
    height: 20%;
    background-color: hotpink;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0;
}
</style>