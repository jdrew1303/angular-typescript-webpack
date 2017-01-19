import {ContentModel} from "./ContentModel";
import {SharedModel} from "./SharedModel";
describe("model: ContentModel", () => {
    describe("on initialization", () => {
        it("should expose the tweets passed from the sharedModel", () => {
            var sharedModelMock: SharedModel = jasmine.createSpyObj("sharedModel", ["toggleTopbar", "toggleSidebar"]);
            sharedModelMock.tweets = [];
            sharedModelMock.sidebarCollapsed = false;
            sharedModelMock.topbarCollapsed = false;
            var contentModel: ContentModel = new ContentModel(sharedModelMock);
            expect(contentModel.tweets).toBe(sharedModelMock.tweets);
        });
    });
});