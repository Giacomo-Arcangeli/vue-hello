// Estrapolo il metodo createApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    data() {
        return {
            title: 'Vue JS',
            pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
        }
    }
});

// La monto nell'elemento HTML "root"
app.mount('#root');
