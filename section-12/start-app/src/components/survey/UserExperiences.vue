<template>
    <section>
        <base-card>
            <h2>Submitted Experience</h2>
            <div>
                <base-button @click="loadExperiences">Load Submitted Experience</base-button>
            </div>
            <p v-if="isLoading">is loading...</p>
            <p v-else-if="!isLoading && error">
                {{ error }}
            </p>
            <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some survey resukts first.</p>
            <ul v-else>
                <survey-result
                v-for="result in results"
                :key="result.id"
                :name="result.userName"
                :rating="result.rating"
                ></survey-result>
            </ul>
        </base-card>
    </section>
</template>

<script>
import SurveyResult from './SurveyResult'
export default {
    components: {
        SurveyResult,
    },
    data() {
        return {
            results : [],
            isLoading : false,
            error: null
        }
    },
    methods: {
        loadExperiences() {
            this.isLoading = true;
            this.error = null;
            fetch('https://vue-http-demo-5651f-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
            .then((response) => {
                if(response.ok) {
                    return response.json();
                }
            }).then((data) => {
                this.isLoading = false;
                console.log('data', data)
                const results = [];

                for(const id in data) {
                    console.log('id', id)
                    results.push({   
                        id: id,
                        userName: data[id].userName,    
                        rating: data[id].rating,    
                    });
                }
                console.log('results', results)
                this.results = results;
            })
            .catch((error)=> {
                console.log(error);
                this.isLoading = false;
                this.error = 'Failed to fetch data - please tyr again later.';
            });
        }
    },
    mounted() {
        this.loadExperiences();
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>