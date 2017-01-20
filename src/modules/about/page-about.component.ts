export class PageAboutComponent implements ng.IComponentOptions {
    public template: string = `
    <div class="container-fluid">
        <h1><i class="fa fa-info-circle"></i>&nbsp;About</h1>
        This is written to help you understand how the application is 
        structured and how to work with Angular 1 and Angular 2 dual boot.
        <ul>
            <li>Typescript</li>
            <li>Webpack</li>
            <li>Angular 1.4</li>
            <li>Karma</li>
            <li>Jasmine</li>
            <li>Istanbul coverage</li>
        </ul>
    </div>`;
}