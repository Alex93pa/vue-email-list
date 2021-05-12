new Vue({
    el: '#app',
    data: {
        randomEmail: null,
        mailList: [],
        loading: false,
    },
    methods: {
        getRandomEmail() {
            this.mailList = [];
            const ajaxMail = [];
            const totalMail = 10

            this.loading = true

            for (let i = 0; i < totalMail; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    
                    this.randomEmail = resp.data.response

                    ajaxMail.push(resp.data.response);


                    if (ajaxMail.length === totalMail) {
                        this.mailList.push(...ajaxMail)
                        this.loading = false

                    }
                    
                })
                
            }
        }
    }






})