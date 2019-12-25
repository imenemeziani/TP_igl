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
<<<<<<< HEAD
    <form class="flex flex-col" @submit.prevent="submitReclam" method="post" action="SimpleTable.vue" >
=======
    
    <form class="flex flex-col" @submit.prevent="submitReclam">
>>>>>>> fe90d2f27a6484575ce5ff1b85a07cbb11a4a3a2
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
          module: "IGL",
         TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
        {
          module: "ANUM",
           TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
        {
          module: "THP",
           TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
        {
          module: "ORGA",
           TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
        {
          module: "SYC1",
        TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
        {
            module: "RO",
        TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
         {
             module: "RES1",
        TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
         {
          module: "ANG4",
           TD: "13",
         TP: "14",
         CI: "11",
         EMD:"16"
        },
<<<<<<< HEAD
         ],
         methods : {
           tablemodule()
           {
               },
           submitReclam() {
             axios.post('url',{
               Reclamation: this.contenu,
               Module: this.mod

             })
             console.log(this.contenu);
             
           },
         },
=======
      ]
>>>>>>> fe90d2f27a6484575ce5ff1b85a07cbb11a4a3a2
    }
  },

  methods : {

      submitReclam() {
      console.log(this.contenu)
      },

  },
}
  
</script>
<style lang="css"></style>
