const randomNumber = function(min, max) {
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
        gatherEnergyForSpecialAttack: 3,
        battleLogs: [],
    },
    computed: { 
        canUseSpecialAttack: function() {
            return this.specialAttackEnable
        },
        gameOver: function() {
            return this.playerHealth <= 0|| this.monsterHealth <= 0 
        },
        monsterWon: function() {
            return this.playerHealth <= 0 && this.monsterHealth > 0
        },
        draw: function() { 
            return this.playerHealth <= 0 && this.monsterHealth <= 0   
        }
        
    },
    watch: {
        specialAttackWaitCounter: function(value) {
            if(value === this.gatherEnergyForSpecialAttack) {
                this.specialAttackEnable = true 
            }
        } 
    },
    methods: {
        logs: function(who, whatHappen, howMuch) {
            this.battleLogs.unshift({
                who: who,
                whatHappen: whatHappen,
                howMuch: howMuch
            })
        },
        playAgain: function() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.round = 0,
            this.specialAttackEnable = true,
            this.specialAttackWaitCounter = 0
        },
        surrender: function() {

            this.playerHealth = 0
        },
        healPlayer: function() {
            const healPower = randomNumber(12, 20);
            
            if(this.playerHealth + healPower >= 100) {
                this.playerHealth = 100
            }else {
                this.playerHealth = this.playerHealth + healPower
            } 

            this.attackPlayer()
            this.round = this.round + 1
            this.specialAttackWaitCounter = this.specialAttackWaitCounter + 1 

            this.logs('Player', 'heals', healPower)
        },
        attackMonster: function() {
            const damageDealt = randomNumber(5, 12)

            if(this.monsterHealth - damageDealt < 0) {
                this.monsterHealth = 0
            }else {
                this.monsterHealth = this.monsterHealth - damageDealt
            }

            this.attackPlayer()
            this.round = this.round + 1
            this.specialAttackWaitCounter = this.specialAttackWaitCounter + 1
            this.logs('Player', 'attack', damageDealt)

        },
        attackPlayer: function() {
            const damageDealt = randomNumber(8, 18)

            if(this.monsterHealth > 0) {
                if(this.playerHealth - damageDealt < 0){ 
                    this.playerHealth = 0
                }else {
                    this.playerHealth = this.playerHealth - damageDealt
                }
                
                this.logs('Monster', 'attack', damageDealt)
            }
        },
        specialAttackMonster: function() {
            const damageDealt = randomNumber(12, 24)

            if(this.monsterHealth - damageDealt < 0) {
                this.monsterHealth = 0
            }else {
                this.monsterHealth = this.monsterHealth - damageDealt
            }

            this.attackPlayer()
            this.round = this.round + 1
            this.specialAttackWaitCounter = 0
            this.specialAttackEnable = false
            this.logs('Player', 'special-attack', damageDealt)
        }
    }
});