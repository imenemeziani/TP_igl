<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Ajouter étudiant</h4>
       
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
         
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Matricule</label>
              <md-input v-model="Matricule" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email</label>
              <md-input v-model="Email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nom</label>
              <md-input v-model="Nom" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Prénom</label>
              <md-input v-model="Prénom" type="text"></md-input>
            </md-field>
          </div>
         
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Lieu de naissance</label>
              <md-input v-model="Lieu" type="text"></md-input>
            </md-field>
          </div>
          
         
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Ajouter !</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
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
      Email: null,
     Nom: null,
      Prénom: null,
      Lieu: null,
      
     
    };
  }
};
</script>
<style></style>

