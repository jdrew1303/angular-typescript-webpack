import '../../../src/modules/tweets/index';
import * as angular from 'angular';
import 'angular-mocks';
import {ComponentTest} from '../component-test';
import 'phantomjs-polyfill';
import {PageTweetsController} from './../../../src/modules/tweets/page-tweets.component';
import {SharedModel} from './../../../src/modules/tweets/shared.model';


describe('Component PageTweetsComponent', () => {
    var directiveTest: ComponentTest<PageTweetsController>;
    var sharedModelMock: SharedModel;
    beforeEach(angular.mock.module('app.tweets', ($provide: any) => {
        sharedModelMock = <SharedModel>{};
        $provide.service('SharedModel', () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<PageTweetsController>('<page-tweets></page-tweets>', 'pageTweets');
    });

    it('should expose the sharedModel', () => {
        var vm: PageTweetsController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});