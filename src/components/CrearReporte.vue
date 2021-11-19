<template>
    <v-container>
     <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Formulario Crear Reporte</h1>       
      </v-col>     
    </v-row>
    <v-row>
    <v-col>
        <form v-on:submit.prevent="guardarReporte()">
        <v-text-field v-model="reporte.correo"
                label="Correo"
                outlined
                required   
        >
        </v-text-field>
         <v-text-field
                v-model="reporte.telefono"        
                label="Telefono"                
                outlined
                required        
            ></v-text-field>
            <v-text-field
                v-model="reporte.hecho"        
                label="Hecho"
                outlined
                required        
            ></v-text-field>
             <v-text-field
                v-model="reporte.descripcion"        
                label="Descripción"
                outlined
                required        
            ></v-text-field>
            <v-card-actions>
                <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>      
            </v-card-actions>
        </form>
    </v-col>
    </v-row>

    </v-container>
</template>

<script>

import axios from 'axios';
export default {
    name:'crearReportes',
    data(){
        return{
            reporte:{
                correo:'',
                telefono:'',
                hecho:'',
                descripcion:''
            }
        };
    },
    methods:{
        guardarReporte(){
            var router = this.$router;
           const formData = new FormData();
           formData.append('correo',this.reporte.correo);
           formData.append('telefono',this.reporte.telefono);
           formData.append('hecho',this.reporte.hecho);
           formData.append('descripcion',this.reporte.descripcion);

           axios.post('https://app-c935da0b-c862-426e-8b68-2dfdad35a3bd.cleverapps.io/',formData)
           .then(()=>{
               router.push('/ver');
           })
           .catch(function(error){
        console.log(error);
            });
        }
    }
}
</script>