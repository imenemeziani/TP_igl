<template>
  <form class="flex flex-col" @submit.prevent="submitAjouter">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Ajouter étudiant</h4>
       
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
         
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Matricule</label>
              <md-input v-model="Matricule" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Email</label>
              <md-input v-model="Email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Nom</label>
              <md-input v-model="Nom" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Prénom</label>
              <md-input v-model="Prénom" type="text" required></md-input>
            </md-field>
          </div>
         
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Lieu de naissance</label>
              <md-input v-model="Lieu" type="text"></md-input>
            </md-field>
          </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
            
              <md-input v-model="Date_nes" type="Date"></md-input>
                <label>Date de naissance</label>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Année d'étude</label>
              <md-input v-model="Année" type="text"></md-input>
            </md-field>
          </div>
          
           <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Groupe</label>
              <md-input v-model="Groupe" type="text"></md-input>
            </md-field>
          </div>
          
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button type="submit" class="md-raised md-success">Ajouter !</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
 import axios from 'axios';
export default {
  
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {

            Matricule: null,
            Email:null,
            Nom:null,
            Prénom:null,
            Lieu:null,
            Date_nes:null,
            Groupe:null,
            Année:null,
    };
  },
  methods:
{
submitAjouter() {
        axios.post('Lilya put the url right here :D ',{
              Matricule: this.Matricule,
              Email: this.Email,
              Nom:this.Nom,
              Prénom:this.Prénom,
              Lieu:this.Lieu,
              Date:this.Date_nes,
              Année:this.Année,
              Groupe:this.Groupe,
        }),console.log(this.Email)
      
      },
},
};
</script>
<style></style>

