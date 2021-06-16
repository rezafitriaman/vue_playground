<template>
    <li>
        <h3>{{ name }}</h3>
        <div class="team-members">{{ memberCount }} Members</div>
        <!-- <a href="#">View Members</a> -->
        <router-link :to="teamMembersLink">View Members</router-link>
    </li>
</template>

<script>
export default {
    props: ['name', 'id', 'memberCount'],
    computed: {
        teamMembersLink() {
            //return '/teams/' + this.id;
            return { 
                name: 'team-members', 
                params: { teamid: this.id}, 
                query: { sort: 'asc'} 
            }
        }
    }
}
</script>

<style scoped>
li {
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
    padding: 1rem;
}

li h3 {
    margin: 0.5rem 0;
    font-size: 1.25;
}

li .team-members {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: #8e44ad;
}

a:hover,
a:active {
    background-color: #9b59b6;
}
</style>