import {Tweet} from './Tweet';
import {SharedModel} from './shared.model';
export class SidebarModel {
    public static $inject: Array<string> = ['SharedModel'];
    public tweets: Array<Tweet>;

    constructor(private sharedModel: SharedModel) {
        this.tweets = sharedModel.tweets;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleSidebar();
    }
}
