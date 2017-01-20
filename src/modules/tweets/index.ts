import * as angular from 'angular';
import 'angular-route';
import {config as routesConfig} from './tweets.routes';
import {PageTweetsComponent} from './page-tweets.component';
import {TweetContentComponent} from './tweet-content.component';
import {TweetMainComponent} from './tweet-main.component';
import {TweetSidebarComponent} from './tweet-sidebar.component';
import {TweetTopbarComponent} from './tweet-topbar.component';
import {ContentModel} from './content.model';
import {SharedModel} from './shared.model';
import {SidebarModel} from './sidebar.model';
import {TopbarModel} from './topbar.model';
import {TweetService} from './tweet.service';

// reason for splitting all these out is that we may be able to 
// dynamically load them. This way anything thats declared in 
// the folder will be loaded up. TODO
const module: angular.IModule = angular.module('app.tweets', ['ngRoute']);

module.service('ContentModel', ContentModel);
module.service('SharedModel', SharedModel);
module.service('SidebarModel', SidebarModel);
module.service('TopbarModel', TopbarModel);
module.service('TweetService', TweetService);
module.component('pageTweets', new PageTweetsComponent());
module.component('tweetContent', new TweetContentComponent());
module.component('tweetMain', new TweetMainComponent());
module.component('tweetSidebar', new TweetSidebarComponent());
module.component('tweetTopbar', new TweetTopbarComponent());
module.config(routesConfig);

// export the module so we can reference the name object instead 
// of using magic strings. This way if we need to change the 
// module name here then it will be reflected in the main module.
export default module;