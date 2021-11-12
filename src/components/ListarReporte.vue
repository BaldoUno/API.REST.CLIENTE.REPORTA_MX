<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
          Listado de Reporte
        </h2>       
      </v-col>        
    </v-row>
    <v-row>
    <v-col class="mb-1">
       <v-btn :to="{name:'crearReporte'}" class="mx-2" fab dark color="indigo">
         <v-icon dark>mdi-plus</v-icon>
       </v-btn>
    </v-col>
    </v-row>
    <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Correo</th>
            <th class="text-center">Telefono</th>
            <th class="text-center">Hecho</th>
            <th class="text-center">Descripcion</th>
            <th class="text-center">Operaciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="reporte in reportes" :key="reporte.Dataid">
                <td>{{reporte.Dataid}}</td>
                <td>{{reporte.Correo}}</td>
                <td>{{reporte.Telefono}}</td>
                <td>{{reporte.Hecho}}</td>
                <td>{{reporte.Descripcion}}</td>
                <td>
                    <v-btn :to="{name:'editarReporte', params:{Dataid:reporte.Dataid}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="Dataid=reporte.Dataid" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn>
                </td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row>
    <!-- ventana de diálogo para eliminar registros -->
    <v-dialog v-model="dialog" max-width="350">
        <v-card>
            <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
            <v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="dialog = false">Cancelar</v-btn>
                <v-btn @click="confirmarBorrado(Dataid)" color="error">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- componente snackbar para mostrar mensaje de eliminación -->
    <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar = false">Cerrar</v-btn>
        </template>
    </v-snackbar>
    </v-container>
</template>


<script>

import axios from 'axios';
export default {
    name:'listarReportes',
    mounted(){
        this.obtenerReportes();
    },
    data(){
        return{            
            dialog:false,
            reportes:null,
            Dataid:null,
            snackbar:false,
            textsnack:'¡Registro Eliminado!'
        }
    },
    methods:{
        obtenerReportes(){
            axios.get('https://app-c935da0b-c862-426e-8b68-2dfdad35a3bd.cleverapps.io/')
            .then(r => {
                this.reportes = r.data;
                console.log(this.reportes);
            })
            .catch(function(error){
                console.log(error);
            })
        },
        
        confirmarBorrado(Dataid){            
            axios.delete('https://app-c935da0b-c862-426e-8b68-2dfdad35a3bd.cleverapps.io/?id='+Dataid)
            .then(()=>{
                    this.obtenerReportes();
                    this.dialog = false;
                    this.snackbar = true
            })
            .catch(function(error){
                console.log(error);
            });    
        }
    }
}
</script>