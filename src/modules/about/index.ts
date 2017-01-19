import * as angular from "angular";
import "angular-route";
import {PageAboutComponent} from "./PageAboutComponent";
import {config as routesConfig} from "./routes";

angular.module("app.about", ["ngRoute"])
    .component("pageAbout", new PageAboutComponent())
    .config(routesConfig);