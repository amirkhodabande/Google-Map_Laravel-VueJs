require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
    load: {
        key: ''
    }
})


const app = new Vue({
    el: '#app',

    data() {
        return {
            restaurants: [],

            infoWindowOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }

            },
            activeRestaurant: {},
            infoWindowOpened: false,
        }
    },

    computed: {
        mapCenter() {
            if (!this.restaurants.length) {
                return {
                    lat: 10,
                    lng: 10,
                }
            }

            return {
                lat: parseFloat(this.restaurants[0].latitude),
                lng: parseFloat(this.restaurants[0].longitude),
            }
        },
        infoWindowPosition() {
            return {
                lat: parseFloat(this.activeRestaurant.latitude),
                lng: parseFloat(this.activeRestaurant.longitude),
            };
        },
    },

    created() {
        axios.get('/api/restaurants')
            .then((response) => {
                this.restaurants = response.data
            })
            .catch((error) => {
                console.error(error)
            });
    },

    methods: {
        getPosition(r) {
            return {
                lat: parseFloat(r.latitude),
                lng: parseFloat(r.longitude),
            }
        },
        handleMarkerClicked(r) {
            this.activeRestaurant = r;
            this.infoWindowOpened = true;
        },
        handleInfoWindowClose() {
            this.activeRestaurant = {};
            this.infoWindowOpened = false;
        },
        handleMapClick(e) {
            //This will add marker where user clicked, you can also save these data in database...
            this.restaurants.push({
                name: "Placeholder",
                hours: "00:00am-00:00pm",
                city: "Test city",
                state: "Test state",
                latitude: e.latLng.lat(),
                longitude: e.latLng.lng(),
            })
        }
    }
});
