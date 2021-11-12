<template>
  <v-container>
    <v-row class="text-center">    
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Formulario de EDICIÓN</h1>       
      </v-col>     
    </v-row>
    <v-row>
        <v-col>         
            <form v-on:submit.prevent="guardarReporte()">
              <v-text-field
                  v-model="reporte.Correo"
                  label="Correo"
                  outlined
                  required   
              ></v-text-field>
              <v-text-field
                  v-model="reporte.Telefono"        
                  label="Telefono"                
                  outlined
                  required        
              ></v-text-field>
              <v-text-field
                  v-model="reporte.Hecho"        
                  label="Hecho"
                  outlined
                  required        
              ></v-text-field>
              <v-text-field
                  v-model="reporte.Descripcion"        
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
let url = 'https://app-c935da0b-c862-426e-8b68-2dfdad35a3bd.cleverapps.io/?Dataid=';
import axios from 'axios';
export default {
    name:'editarReporte',
    mounted(){
      this.Dataid = this.$route.params.Dataid;
      console.log(this.$route);
      axios.get(url+this.Dataid)
      .then(r =>{
        this.reporte = r.data[0];
        //console.log(this.reporte);
      })
      .catch(function(error){
        console.log(error);
      });
    },
    data(){
      return{
        Dataid:null,
        reporte:{
          correo:'',
          telefono:'',
          hecho:'',
          descripcion:''
        }
      }
    },
    methods:{
      guardarReporte(){
         var router =  this.$router;
        //let parametros = this.reporte;
        axios.put('https://app-c935da0b-c862-426e-8b68-2dfdad35a3bd.cleverapps.io/?id='+this.Dataid+'&correo='+this.reporte.Correo+'&telefono='+this.reporte.Telefono+'&hecho='+this.reporte.Hecho+'&descripcion='+this.reporte.Descripcion)
        //axios.put(url+this.Dataid, parametros)
        .then(function(){
           router.push('/reporte'); 
        })
        .catch(function(error){
          console.log(error);
        });
      }
    }
}
</script>