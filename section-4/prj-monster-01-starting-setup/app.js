const attackDealt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min )
}

const app = new Vue({
    el:'#game',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        round: 0,
        specialAttackEnable: true,
        specialAttackWaitCounter: 0,
        gatherEnergyForSpecialAttack: 3
    },
    computed: {
        canUseSpecialAttack: function() {
            console.log('canUseSpecialAttack:', this.specialAttackEnable)
            return this.specialAttackEnable

        }
    },
    watch: {
        specialAttackWaitCounter: function(value) {
            console.log(value)

            if(value === this.gatherEnergyForSpecialAttack) {
                console.log('specialAttackEnable', true)
                this.specialAttackEnable = true
            }else {
                console.log('specialAttackEnable', false)
            }
        }
    },
    methods: {
        attackMonster: function() {
            const damageDealt = attackDealt(5, 12)

            if(this.monsterHealth - damageDealt < 0){
                this.monsterHealth = 0
            }else {
                this.monsterHealth = this.monsterHealth - damageDealt
            }

            this.attackPlayer()
            this.round = this.round + 1
            this.specialAttackWaitCounter = this.specialAttackWaitCounter + 1
          
        },
        attackPlayer: function() {
            const damageDealt = attackDealt(8, 18)

            if(this.playerHealth - damageDealt < 0){ 
                this.playerHealth = 0
            }else {
                this.playerHealth = this.playerHealth - damageDealt
            }
        },
        specialAttackMonster: function() {
            const damageDealt = attackDealt(12, 24)

            if(this.monsterHealth - damageDealt < 0){
                this.monsterHealth = 0
            }else {
                this.monsterHealth = this.monsterHealth - damageDealt
            }

            this.attackPlayer()
            this.round = this.round + 1
            this.specialAttackWaitCounter = 0
            this.specialAttackEnable = false
        }
    }
});