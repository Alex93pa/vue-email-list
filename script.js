new Vue({
    el: '#app',
    data: {
        randomEmail: null,
        mailList: [],
        loading: false,
    },
    methods: {
        getRandomEmail() {

            const ajaxMail = [];

            this.loading = true

            for (let i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    
                    this.randomEmail = resp.data.response

                    ajaxMail.push(resp.data.response);


                    if (ajaxMail.length === 10) {
                        this.mailList.push(...ajaxMail)
                        this.loading = false

                    }
                    
                })
                
            }
        }
    }






})