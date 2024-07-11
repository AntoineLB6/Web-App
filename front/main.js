Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/fiches',
        component: require('./components/ListeFiches.vue'),
        name: 'fichelist',
        children: [{
            path: 'create',
            component: require('./components/CreateFiche.vue'),
            name: 'fiches.create'
        }]
    }, {
        path: '/wiki',
        component: require('./components/Wiki.vue'),
        name: 'wiki'
    }]
    });

const app = new Vue({
    el: '#app',
    router,
    render: h => h(require('./App.vue')),
    data: {
      errors: [],
      infoFiche: {
        userID: null,
        name: null,
        age: null,
        sexe: null,
        orientation: null,
        race: null,
        familia: null,
        classe: null,
        niveau: null,
        caractere: null,
        histoire: null,
        apparence: null,
        imageperso: null,
        imagefond: null
      }
    },
    methods: {
      checkForm: function (e) {
        this.errors = [];
  
        if (!this.name) {
          this.errors.push("Name required.");
        }
  
        if (!this.errors.length) {
          return true;
        }
  
        e.preventDefault();
      },
      submitForm: function () {
        console.log('e');
        axios.post("http://localhost:5000/api/fiche/create", this.infoFiche )
        .then(function (response) {
          document.location.href="http://localhost:8000/fiches.html"
        })
        .catch(function (error) {
          alert (error);
        });
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  });