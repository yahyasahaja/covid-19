import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagic } from "@fortawesome/free-solid-svg-icons/faMagic";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faMagic);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
