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
        },
        attack(special) {
            this.hurt('kongLife',7, 12, false)
            this.hurt('godzillaLife',5, 10, special)
        },
        hurt(atr, min, max, special) {
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
        },
        getRandom(min, max) {
            const value = Math.random() * ( max - min ) + min

            return Math.round(value)
        }

    },
    watch:{
        hasResult(value) {
            if (value) this.running = false
        }
    }
})