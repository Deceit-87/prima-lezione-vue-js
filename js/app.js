// inizializzazione vue

const app = new Vue({         
    el: '#app',
    data: {
        message: 'porca vacca',
        numeri: [1,3,6,7,5],
        className:'text-green bkg-black',
        imgUrl:'',

    },
    methods:{
        saluta: function() {
             alert('ciao');
        }
    }
    
});
