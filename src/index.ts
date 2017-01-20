import applicationModule from './modules/application/index';
import tweetsModule from './modules/tweets/index';
import aboutModule from './modules/about/index';
import * as angular from 'angular';

// load our default (non specific) css
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/screen.scss';

angular.module('app', [
    applicationModule.name, 
    tweetsModule.name, 
    aboutModule.name
]);

angular.bootstrap(document, ['app'], {
    strictDi: true
});