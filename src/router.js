import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Writing from "./views/Writing.vue";
import WritingCrypto from "./views/WritingCrypto.vue";

import HereWeGoAgain from "./views/Writing/HereWeGoAgain.vue";
import ChangingOneThingAtATime from "./views/Writing/ChangingOneThingAtATime.vue";
import OptimizersIdealistsAndAdventurers from "./views/Writing/OptimizersIdealistsAndAdventurers.vue";
import ExploringCodeInSpaceAndTime from "./views/Writing/ExploringCodeInSpaceAndTime.vue";
import ReconnectingWithNietzsche from "./views/Writing/ReconnectingWithNietzsche.vue";
import ShardsAsDataAvailabilityLayers from "./views/Writing/ShardsAsDataAvailabilityLayers.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/writing",
      name: "writing",
      component: Writing
    },
    {
      path: "/writing-crypto",
      name: "writing-crypto",
      component: WritingCrypto
    },
    {
      path: "/here-we-go-again",
      name: "here-we-go-again",
      component: HereWeGoAgain
    },
    {
      path: "/changing-one-thing-at-a-time",
      name: "changing-one-thing-at-a-time",
      component: ChangingOneThingAtATime
    },
    {
      path: "/optimizers-idealists-and-adventurers",
      name: "optimizers-idealists-and-adventurers",
      component: OptimizersIdealistsAndAdventurers
    },
    {
      path: "/exploring-code-in-space-and-time",
      name: "exploring-code-in-space-and-time",
      component: ExploringCodeInSpaceAndTime
    },
    {
      path: "/reconnecting-with-nietzsche",
      name: "reconnecting-with-nietzsche",
      component: ReconnectingWithNietzsche
    },
    {
      path: "/shards-as-data-availability-layers",
      name: "shards-as-data-availability-layers",
      component: ShardsAsDataAvailabilityLayers
    }
  ]
});
