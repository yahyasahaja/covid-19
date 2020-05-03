/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { BASE_URL } from "@/config";
import { AsyncComponentFactory } from "vue/types/options";
import BaseAsyncCompLoading from "../components/BaseAsyncCompLoading.vue";

Vue.use(VueRouter);

const generateAsyncComponent = (
  importFunc: () => Promise<any>
): AsyncComponentFactory => () => ({
  component: importFunc() as any,
  loading: BaseAsyncCompLoading
});

const Timeline = generateAsyncComponent(() =>
  import(/* webpackChunkName: "Timeline" */ "../views/Timeline.vue")
);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/timeline",
    name: "Timeline",
    component: Timeline
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
