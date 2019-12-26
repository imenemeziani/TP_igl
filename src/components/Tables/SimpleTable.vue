<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Module">{{ item.module }}</md-table-cell>
        <md-table-cell md-label="TD">{{ item.TD }}</md-table-cell>
        <md-table-cell md-label="TP">{{ item.TP }}</md-table-cell>
        <md-table-cell md-label="CI">{{ item.CI }}</md-table-cell>
        <md-table-cell md-label="EMD">{{ item.EMD }}</md-table-cell>
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
  module: "simple-table",CI: "simple-table",TD: "simple-table",TP: "simple-table",EMD: "simple-table",
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
     
      users: [
        {
        
        },
     
      ]
    }
  },

  methods : {

      submitReclam() {
        axios.post('http://127.0.0.1:8000/api/reclamation'),
      console.log(this.contenu)
      },

  },
  mounted()
  {
    axios.get('url table affichage').then((tableback)=> {
      this.users=tableback.date[0];
      console.log(tableback.data[0]);
    })
    console.log(this.users);
  },
};
  
</script>
<style lang="css"></style>
