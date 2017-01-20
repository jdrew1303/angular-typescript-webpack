import {Tweet} from './tweet';
import {SharedModel} from './shared.model';

export class ContentModel {
    public static $inject: Array<string> = ['SharedModel'];
    public tweets: Array<Tweet>;

    constructor(sharedModel: SharedModel) {
        this.tweets = sharedModel.tweets;
    }
}
