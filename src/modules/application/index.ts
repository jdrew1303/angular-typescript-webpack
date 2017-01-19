import * as angular from "angular";

import {StarComponent} from "./StarComponent";
import {TwitterApplicationComponent} from "./TwitterApplicationComponent";
angular.module("app.application", [])
    .component("twitterApplication", new TwitterApplicationComponent())
    .component("star",  new StarComponent());