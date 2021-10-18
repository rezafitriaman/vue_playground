export default {
    async addCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await fetch(`https://coach-demo-vue-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,{
            method: 'PUT',
            body: JSON.stringify(coachData)
        });

        const responseData = await response.json();

        if(!response.ok) {
            console.log('error')
            const error = new Error(responseData.message || 'failed to fetch!')
            throw error
        }

        // commit this to mutations
        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context) {
        const response = await fetch(`https://coach-demo-vue-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
        const responseData = await response.json();
        if(!response.ok) {
            console.log('error')
            const error = new Error(responseData.message || 'failed to fetch!')
            throw error
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
    }

};