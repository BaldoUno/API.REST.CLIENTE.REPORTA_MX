<template>
    <v-container>
    <v-row class="text-center">      
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">
          Reportes
        </h2>       
      </v-col>        
    </v-row>
    <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
        <thead>
            <tr>
            <!--<th class="text-center">ID</th>-->
            <th class="text-center">Correo</th>
            <th class="text-center">Telefono</th>
            <th class="text-center">Hecho</th>
            <th class="text-center">Descripcion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="reporte in reportes" :key="reporte.Dataid">
                <!--<td>{{reporte.Dataid}}</td>-->
                <td>{{reporte.Correo}}</td>
                <td>{{reporte.Telefono}}</td>
                <td>{{reporte.Hecho}}</td>
                <td>{{reporte.Descripcion}}</td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name:'verReportes',
    mounted(){
        this.obtenerReportes();
    },
    data(){
        return{            
            dialog:false,
            reportes:null,
            Dataid:null,
            snackbar:false,
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
    }
}
</script>