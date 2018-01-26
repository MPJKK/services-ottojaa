import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent implements OnInit {

    pysakki = 'Gransinmäki';
    reitit: any;

    constructor(private digitransitService: DigitransitService) {
    }

    ngOnInit() {
        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data['stops']);
            this.reitit = response.data['stops'];

        });
    }

}
