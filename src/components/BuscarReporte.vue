<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Buscar mi Reporte</h1>       
      </v-col> 
    </v-row>
    <v-row>
    <v-col>
         <form v-on:submit.prevent="buscarReporte()">
             <h2>Ingresa tu ID</h2>    
            <v-text-field v-model="reporte.Dataid"
                    label="ID"
                    outlined
                    required   
            ></v-text-field>
                <v-card-actions>
                    <v-btn :to="{name:'Reporte', params:{Dataid:reporte.Dataid}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <!--<v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      -->
                </v-card-actions>
        </form>
    </v-col>
    </v-row>

    </v-container>
</template>
<script>
//import axios from 'axios';
export default {
    name:'buscarReporte',
    data(){
        return{
            reporte:{
                Dataid:''
            }
        };
    },
    methods:{
        /*
        buscarReporte(){
            var router = this.$router;
           //var correo = this.reporte.correo;
           axios.get('https://app-c935da0b-c862-426e-8b68-2dfdad35a3bd.cleverapps.io/?id=',this.reporte.Dataid)
           .then(()=>{
               router.push('/Reporte/:Dataid');
           })
           .catch(function(error){
        console.log(error);
            });
        }*/
    }
}
</script>