import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/Ajouter.vue";
import TableList from "@/pages/Affichage_notes.vue";
import Login from "@/components/login.vue";
import Typography from "@/pages/hors_serv.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          auth: true
      }
      },
      {
        path: "Ajouter etudiant",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "Mesnotes",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "logout",
        name: "Login",
        component: Login
      },
     
      
     
     
     
    ]
  }
];

export default routes;
