
 <template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Notifications</h4>
            
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-100">
                <h5>Vos dernières notifications </h5>
                
                <div
                  class="alert alert-info alert-with-icon"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message"
                    >Veuillez consulter les réclamations ajoutées</span
                  >
                </div>
                  <div
                  class="alert alert-info alert-with-icon"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message"
                    >Un étudiant vient d'être supprimé</span
                  >
                </div>
                  <div
                  class="alert alert-info alert-with-icon"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message"
                    >Un étudiant vient être ajouté</span
                  >
                </div>
                <div
                  class="alert alert-info alert-with-icon"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message"
                    >Une note a été ajoutée au tableau d'affichage des notes</span
                  >
                </div>
                <div
                  class="alert alert-info alert-with-icon"
                  data-notify="container"
                >
                  <button type="button" aria-hidden="true" class="close">
                    ×
                  </button>
                  <i data-notify="icon" class="material-icons">add_alert</i>
                  <span data-notify="message"
                    >Veuillez consulter vos notes </span
                  >
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
  data() {
    return {
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.",
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
};
</script>
