new Vue({
    el:'#app',
    data:{
        kongLife : 100,
        godzillaLife : 100,
        running : false,
        logs:[]
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
            this.logs = []
        },
        attack(special) {
            this.hurt('kongLife',7, 12, false, 'Godzilla', 'Kong', 'kong')
            
            if(this.godzillaLife > 0) {
                this.hurt('godzillaLife',5, 10, special, 'Kong', 'Godzilla' , 'kong')
            }
        },
        hurt(atr, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
        },
        healAndHurt(){
            this.heal(10, 15)
            this.hurt('kongLife', 7, 12, false, 'Godzilla', 'Kong', 'godzilla')
        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.kongLife = Math.min(this.kongLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}.`, 'kong')
        },
        getRandom(min, max) {
            const value = Math.random() * ( max - min ) + min

            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }

    },
    watch:{
        hasResult(value) {
            if (value) this.running = false
        }
    }
})