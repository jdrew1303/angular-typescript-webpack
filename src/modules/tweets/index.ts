import * as angular from "angular";
import "angular-route";
import {config as routesConfig} from "./routes";
import {PageTweetsComponent} from "./PageTweetsComponent";
import {TweetContentComponent} from "./TweetContentComponent";
import {TweetMainComponent} from "./TweetMainComponent";
import {TweetSidebarComponent} from "./TweetSidebarComponent";
import {TweetTopbarComponent} from "./TweetTopbarComponent";
import {ContentModel} from "./ContentModel";
import {SharedModel} from "./SharedModel";
import {SidebarModel} from "./SidebarModel";
import {TopbarModel} from "./TopbarModel";
import {TweetService} from "./TweetService";

angular.module("app.tweets", ["ngRoute"])
    .service("ContentModel", ContentModel)
    .service("SharedModel", SharedModel)
    .service("SidebarModel", SidebarModel)
    .service("TopbarModel", TopbarModel)
    .service("TweetService", TweetService)
    .component("pageTweets", new PageTweetsComponent())
    .component("tweetContent", new TweetContentComponent())
    .component("tweetMain", new TweetMainComponent())
    .component("tweetSidebar", new TweetSidebarComponent())
    .component("tweetTopbar", new TweetTopbarComponent())
    .config(routesConfig);
