new Vue({
    el:'#app',
    data:{
        kongLife : 100,
        godzillaLife : 100,
        running : false
    },
    computed:{
        hasResult() {
            return this.kongLife == 0 || this.godzillaLife == 0
        }
    },
    methods:{
        startGame() {
            this.running = true
            this.kongLife = 100
            this.godzillaLife = 100

        }

    },
    watch:{

    }
})