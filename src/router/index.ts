import { createRouter, createWebHistory } from "vue-router";

import CreatePlan from "../views/CreatePlan.vue";
import CreatePlanName from "../views/CreatePlan/CreatePlanName.vue";
import CreatePlanCourse from "../views/CreatePlan/CreatePlanCourse.vue";
import CreatePlanDateCost from "../views/CreatePlan/CreatePlanDateCost.vue";
import CreatePlanResult from "../views/CreatePlan/CreatePlanResult.vue";

import PlansLists from "../views/PlansLists.vue";
import PlanDetail from "../views/Plans/PlanDetail.vue";
import PlanUserReport from "../views/Plans/PlanUserReport.vue";

import UserLists from "../views/UsersLists.vue";
import UserAdd from "../views/Users/UserAdd.vue";

import BinLists from "../views/BinLists.vue";

let routes = [
  { path: "/", redirect: "/CreatePlan" },
  {
    path: "/CreatePlan",
    name: "CreatePlan",
    component: CreatePlan,
  },
  {
    path: "/CreatePlanName",
    name: "CreatePlanName",
    component: CreatePlanName,
  },
  {
    path: "/CreatePlanCourse",
    name: "CreatePlanCourse",
    component: CreatePlanCourse,
  },
  {
    path: "/CreatePlanDateCost",
    name: "CreatePlanDateCost",
    component: CreatePlanDateCost,
  },
  {
    path: "/CreatePlanResult",
    name: "CreatePlanResult",
    component: CreatePlanResult,
  },
  {
    path: "/PlansLists",
    name: "PlansLists",
    component: PlansLists,
  },
  {
    path: "/PlanDetail",
    name: "PlanDetail",
    component: PlanDetail,
  },
  {
    path: "/CreatePlanResult",
    name: "CreatePlanResult",
    component: CreatePlanResult,
  },
  {
    path: "/PlanUserReport",
    name: "PlanUserReport",
    component: PlanUserReport,
  },
  {
    path: "/UserLists",
    name: "UserLists",
    component: UserLists,
  },
  {
    path: "/UserAdd",
    name: "UserAdd",
    component: UserAdd,
  },
  {
    path: "/BinLists",
    name: "BinLists",
    component: BinLists,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
