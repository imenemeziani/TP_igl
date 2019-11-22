<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

  <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Ajouter étudiant </p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Mes notes</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>add</md-icon>
        <p>Ajouter groupe</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>group</md-icon>
        <p>Affectation étudiant</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <md-icon>delete</md-icon>
        <p>Supprimer étudiant</p>
      </sidebar-link>
     
      
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
   MobileMenu
  }
};
</script>
