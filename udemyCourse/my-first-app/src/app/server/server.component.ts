import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    id = 10;
    status = 'offline';

    constructor() {
        this.status = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getColor() {
        return this.status === 'Online' ? 'Green' : 'Red';
    }
}