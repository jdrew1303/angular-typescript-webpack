import * as angular from 'angular';
import 'angular-route';
import {PageAboutComponent} from './page-about.component';
import {config as routesConfig} from './about.routes';

// reason for splitting all these out is that we may be able to 
// dynamically load them. This way anything thats declared in 
// the folder will be loaded up. TODO
const module: angular.IModule = angular.module('app.about', ['ngRoute']);

module.component('pageAbout', new PageAboutComponent());
module.config(routesConfig);

// export the module so we can reference the name object instead 
// of using magic strings. This way if we need to change the 
// module name here then it will be reflected in the main module.
export default module;