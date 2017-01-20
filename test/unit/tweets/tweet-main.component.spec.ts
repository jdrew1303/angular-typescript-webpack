import * as angular from 'angular';
import 'angular-mocks';
import '../../../src/modules/tweets/index';
import {ComponentTest} from '../component-test';
import 'phantomjs-polyfill';
import {TweetMainController} from './../../../src/modules/tweets/tweet-main.component';
import {SharedModel} from './../../../src/modules/tweets/shared.model';

describe('Component TweetSidebarComponent', () => {
    var directiveTest: ComponentTest<TweetMainController >;
    var sharedModelMock: SharedModel;
    beforeEach(angular.mock.module('app.tweets', ($provide: any) => {
        sharedModelMock = <SharedModel>{};
        $provide.service('SharedModel', () =>  sharedModelMock);
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<TweetMainController>('<tweet-main></tweet-main>', 'tweetMain');
    });

    it('should expose the sharedModel', () => {
        var vm: TweetMainController = directiveTest.createComponent({});
        expect(vm.sharedModel).toBe(sharedModelMock);
    });
});