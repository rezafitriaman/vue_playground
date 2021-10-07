export default {
    addCoach(context, data) {
        const coachData = {
            id: 'c3',
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        // commit this to mutations
        context.commit('registerCoach', coachData);
    }
};