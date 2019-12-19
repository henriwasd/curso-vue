new Vue({
    el: '#desafio',
    data: {
        nome: 'Henrique',
        idade: 23,
        image: "https://pbs.twimg.com/media/EL_2PxlXUAACrIh?format=jpg&name=900x900"
    },
    methods: {
        calculoIdade() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})
