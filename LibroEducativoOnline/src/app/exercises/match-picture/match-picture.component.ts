import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-match-picture',
    templateUrl: './match-picture.component.html',
    styles: [
        `.draggable { cursor: pointer; }`
    ]
})
export class MatchPictureComponent implements OnInit {

    words: string[] = ['PAPÁ', 'MAMÁ'];
    listA: string[] = [];
    listB: string[] = [];
    statement: SafeHtml = '';

    constructor(
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.statement = this.sanitizer.bypassSecurityTrustHtml(`
            <p>Leo.</p>
            <p>Junto la palabra con el dibujo que va.
        `);
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer !== event.container) {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }

    wordAPredicate(item: CdkDrag<string>) {
        return item.data === 'MAMÁ';
    }

    wordBPredicate(item: CdkDrag<string>) {
        return item.data === 'PAPÁ';
    }
}
