import {Tweet} from './Tweet';
import {SharedModel} from './shared.model';
export class TopbarModel {
    public static $inject: Array<string> = ['SharedModel'];
    public tweetContent: string;

    constructor(private sharedModel: SharedModel) {
        this.sharedModel = sharedModel;
    }

    public toggleCollapsed(): void {
        this.sharedModel.toggleTopbar();
    }

    public addTweet(): void {
        this.sharedModel.tweets.push(new Tweet('@jdrew1303', this.tweetContent, false));
        this.tweetContent = '';
    }
}