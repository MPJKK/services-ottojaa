import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
    selector: 'app-list-media',
    templateUrl: './list-media.component.html',
    styleUrls: ['./list-media.component.scss'],
})
export class ListMediaComponent implements OnInit {

    tervehdys: string;
    kaikkiMedia: any;
    mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        this.tervehdys = this.mediaService.testi;
        this.mediaService.getAllMedia().subscribe(data => {
            this.kaikkiMedia = data;
            console.log(this.kaikkiMedia);
            /*
            for (let i = 0; i < this.kaikkiMedia.length; i++) {
              const temp = this.kaikkiMedia[i].filename.split('.');
              const uusinimi = temp[0] + '-tn320.png';
              this.kaikkiMedia[i].thumbnail = uusinimi;
            }
             */
            this.kaikkiMedia.map(media => {
                const temp = media.filename.split('.');
                const uusinimi = temp[0] + '-tn320.png';
                media.thumbnail = uusinimi;
            });

            console.log(this.kaikkiMedia);
        });
    }

}