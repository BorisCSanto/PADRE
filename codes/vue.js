
const accueil = {
    template: '#accueil',
    name: 'Accueil',
}


const galerie = {
    template: '#galerie',
    name: 'Galerie',
    data: () => {
        return {
            series,
            cles,
            actu: 0,
        }
    },
    computed: {
        serieaprendre () {
            let cle = cles[parseInt(this.$route.params.serie)]
            return series[cle]
        },
        imageactuelle () {
            return this.serieaprendre[this.actu]
        }
    },
    methods: {
        passeDroite () {
            this.actu < this.serieaprendre.length-1 ? this.actu+=1 : this.actu = 0
        },
        passeGauche () {
            this.actu > 0 ? this.actu-=1 : this.actu = this.serieaprendre.length - 1
        },
        change (i) {
            this.actu = i
        }
    }
}

const contact = {
    template: '#contact',
    name: 'Contact'
}

const interieur = {
    template: '#interieur',
    name: 'Interieur'
}

// routeur

const router  = new VueRouter({
    routes: [
        { path: '/', component: accueil , name: 'Accueil' },
        { path: '/galerie/:serie', component: galerie , name: 'Galerie' },
        { path: '/contact', component: contact , name: 'Contact' },
        { path: '/interieur', component: interieur , name: 'Interieur' },
    ]
})

// vue

const vue = new Vue({
    router,
}).$mount(app);