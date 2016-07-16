import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor() {
    }

    private nodeVersion:string;
    private chromeVersion:string
    private electronVersion:string;

    ngOnInit() {
        this.nodeVersion = process.versions.node;
        this.chromeVersion = process.versions["chrome"];
        this.electronVersion = process.versions["electron"];
    }

}
