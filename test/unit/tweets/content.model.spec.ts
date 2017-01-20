import {ContentModel} from './../../../src/modules/tweets/content.model';
import {SharedModel} from './../../../src/modules/tweets/shared.model';
describe('model: ContentModel', () => {
    describe('on initialization', () => {
        it('should expose the tweets passed from the sharedModel', () => {
            var sharedModelMock: SharedModel = jasmine.createSpyObj('sharedModel', ['toggleTopbar', 'toggleSidebar']);
            sharedModelMock.tweets = [];
            sharedModelMock.sidebarCollapsed = false;
            sharedModelMock.topbarCollapsed = false;
            var contentModel: ContentModel = new ContentModel(sharedModelMock);
            expect(contentModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
});