import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'browser-event-experiments',
    templateUrl: './browser-event-experiments.component.html',
    styleUrls: ['./browser-event-experiments.component.scss']
})
export class BrowserEventExperimentsComponent implements OnInit {
    hoverSection: HTMLElement;

    constructor() {
    }

    ngOnInit(): void {
        this.hoverSection = document.getElementById('hover');

        this.hoverSection.addEventListener('mousemove', onMouseMove);
        this.hoverSection.addEventListener('click', onClick);
    }

    unsubscribe() {
        console.log('Called unsubscribe()');
        this.hoverSection.removeEventListener('mousemove', onMouseMove);
    }
}

function onMouseMove(event: MouseEvent) {
    console.log(event);
}

function onClick(event: MouseEvent) {
    console.log(event);
}
