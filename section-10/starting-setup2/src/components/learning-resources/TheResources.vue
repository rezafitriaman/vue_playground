<template>
    <base-card>
        <base-button 
        @click="setSelectedTab('stored-resources')" 
        :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button 
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component> 
    </keep-alive>
</template>

<script>

import StoredResources from "./StoredResources";
import AddResource from "./AddResource";
export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedReources: [
                {
                    id: "official-guide",
                    title: "Official Guide",
                    description: "The official vue.js documention",
                    link: "http://vuejs.org",
                },
                {
                    id: "google",
                    title: "Google",
                    description: "Lear to google....",
                    link: "http://google.org",
                },
            ],
        }
    },
    provide() {
        return {
            resources: this.storedReources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.storedReources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId) {
            const resIndex = this.storedReources.findIndex((res) => { return res.id === resId})
            console.log(resIndex);   
            console.log(this.storedReources);   
            this.storedReources.splice(resIndex, 1);

        }
    }

}
</script>