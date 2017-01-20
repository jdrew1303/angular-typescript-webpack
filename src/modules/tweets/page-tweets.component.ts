import {SharedModel} from './shared.model';

export class PageTweetsComponent implements ng.IComponentOptions {
    public controller: any = PageTweetsController;
    // we can use templateUrl instead if we want to extract out 
    // the template. Also notice that we use $ctrl to refer to 
    // the controller instance. 
    public template: string = `
        <tweet-sidebar ng-class="{'sidebar-collapsed': $ctrl.sharedModel.sidebarCollapsed}"></tweet-sidebar>
        <tweet-main></tweet-main>
    `;
}

// exporting the controller as a plain class allows us to test 
// the coontroller as just a simple object.
export class PageTweetsController {
    // this is the same as doing:
    // :     PageTweetsController.$inject = ['SharedModel']; 
    // by using this instead of passing in an array to the 
    // module injector we keep the majority of our work in a 
    // single file.
    public static $inject: Array<string> = ['SharedModel'];
    constructor(public sharedModel: SharedModel) {
    }
}