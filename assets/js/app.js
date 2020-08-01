var app = new Vue ({
    el: '#app',
    data: {
            nombreTarea:'',
            tareas:[],
    },
    methods:{
        guardarTareas(){
            this.tareas.push(this.nombreTarea);
            this.nombreTarea = null;
        },
        eliminarTarea(index){
          this.tareas.splice(index, 1);           
        }
    },
})