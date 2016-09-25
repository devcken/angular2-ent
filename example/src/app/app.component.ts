import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { EntOptions, Nutriment } from "./angular2-ent/index";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    treeOption: EntOptions = {
        styleUrl: 'src/app/ent.css'
    };

    treeData: Nutriment[] = [{
        id: 1,
        displayName: 'root1',
        data: null,
        children: [
            { id: 2, displayName: 'child1' },
            { id: 3, displayName: 'child2' }
        ]
    }, {
        id: 4,
        displayName: 'root2',
        data: null,
        children: [
            { id: 5, displayName: 'child2.1' },
            {
                id: 6,
                displayName: 'child2.2',
                data: null,
                children: [
                    { id: 7, displayName: 'subsub' }
                ]
            }
        ]
    }];
}
