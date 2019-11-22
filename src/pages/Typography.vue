<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Indisponibles</h4>
            <p class="category">Ces fonctionnalités sont indisponibles</p>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              
              <div class="row">
                <div class="tim-typo">
                  <h1>
                    <span class="tim-note"></span>Hors fonction 
                  </h1>
                </div>
                
               
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>
