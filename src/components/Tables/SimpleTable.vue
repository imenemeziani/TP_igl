
<template>
  <div>
    <md-table v-model="table_notes" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <!--ici c'est les colonnes-->
        <md-table-cell md-label="AScol">{{ item.AScol }}</md-table-cell>
        <md-table-cell md-label="MatrEtud">{{ item.MatrEtud }}</md-table-cell>
         <md-table-cell md-label="CodeMod">{{ item.CodeMod }}</md-table-cell>
        <md-table-cell md-label="CC">{{ item.CC }}</md-table-cell>
        <md-table-cell md-label="CI">{{ item.CI }}</md-table-cell>
        <md-table-cell md-label="TP">{{ item.TP }}</md-table-cell>
        <md-table-cell md-label="CF">{{ item.CF }}</md-table-cell>
        <md-table-cell md-label="Moy">{{ item.Moy }}</md-table-cell>
      </md-table-row>
    </md-table>
    
    
<div>
    
    <form class="flex flex-col" @submit.prevent="submitReclam">
      <md-card-content>
        <div class="md-layout">

          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <h4>Module: </h4>
              <md-textarea v-model="mod"></md-textarea>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <h4>Réclamation : </h4>
              <md-textarea v-model="contenu"></md-textarea>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button type="submit" class="md-raised md-success">Envoyer</md-button>
          </div>

        </div>
      </md-card-content>
    </form>
  </div>    

  </div>
 
</template>

<script>
 import axios from 'axios';
export default {
 
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
    },
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
    
  },

 data() {
    return {
     
      table_notes :[{}] 
          }
       },
methods:
{
submitReclam() {
        axios.post('http://127.0.0.1:8000/api/reclamation',{
              Reclamation: this.contenu,
               Module: this.mod,
        }),
      console.log(this.contenu)
      },
},
      mounted () {
    axios
      .get('http://127.0.0.1:8000/api/serache')
      .then((response) => {
                   

                         this.table_notes = response;
                        console.log(response);// vérifie dans ta console ce que reponse qui est ta table du back affiche ! 
                          }
           )
      console.log(this.table_notes);
  }

 
};
  
</script>
<style lang="css"></style>
