var app = new Vue({
    el: '#app',

    data: {
        emailCasuale: []
    },

    mounted() {

        for (let i=0; i<10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                
            this.emailCasuale.push(response.data.response);
            })
        }
    }

}