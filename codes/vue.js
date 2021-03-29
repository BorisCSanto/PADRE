
const accueil = {
    template: '#accueil',
    name: 'Accueil',
    data: () => {
        return {
            cles,
            texte
        }
    },
    methods: {
        scrolle () {
				const scrollable = document.documentElement.scrollHeight - window.innerHeight; // 568
                console.log(scrollable)
				const niveau = window.scrollY; // 420 pour serie 0.73
				
				if ( niveau/scrollable > 0.2) {
					const e = document.getElementById("bio");
					e.style.opacity = '1';
					e.style.transition = "opacity 2s ease";
				}
				else if ( niveau/scrollable < 0.2) {
					const e = document.getElementById("bio");
					e.style.opacity = '0';
					e.style.transition = "opacity 1s ease";
				}

				if ( niveau/scrollable > 0.5) {
					const e = document.getElementById("conteneur_series");
					e.style.opacity = '1';
					e.style.transition = "opacity 2s ease";
				}
				else if ( niveau/scrollable < 0.5) {
					const e = document.getElementById("conteneur_series");
					e.style.opacity = '0';
					e.style.transition = "opacity 1s ease";
				}
				if ( niveau/scrollable > 0.7) {
					const e = document.getElementById("deco");
					e.style.opacity = '1';
					e.style.transition = "opacity 2s ease";
				}
				else if ( niveau/scrollable < 0.7) {
					const e = document.getElementById("deco");
					e.style.opacity = '0';
					e.style.transition = "opacity 1s ease";
				}
        }
    },
    mounted () {
        document.addEventListener('scroll', this.scrolle)
    },
    destroyed () {
        document.removeEventListener('scroll', this.scrolle)
    }
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
            let cle = cles[parseInt(this.$route.params.serie)].nom
            this.setActu()
            return series[cle]
            
        },
        imageactuelle () {
            return this.serieaprendre[this.actu]
        },
        imagedefond () {
            return cles[parseInt(this.$route.params.serie)].img
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
        },
        setActu () {
            this.actu = 0
        }
    },
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