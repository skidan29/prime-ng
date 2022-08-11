import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public value2?: string;

    public onClickedBtn() {
        this.value2 = this.value2?.toUpperCase();
        console.log(this.value2);
    }

}
