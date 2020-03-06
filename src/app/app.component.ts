import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NaftalisBarmizva';
  images = [{
        "title": "Blue river (much better in original size - press)",
        "url": "http://farm9.static.flickr.com/8305/7893507666_0d25cd9f30.jpg",
        "date": "Thu, 30 Aug 2012 10:41:00 -0400"
    }, {
        "title": "Dangerously beautiful paths",
        "url": "http://farm8.static.flickr.com/7275/7550745422_3e323cd79e.jpg",
        "date": "Thu, 12 Jul 2012 03:27:00 -0400"
    }, {
        "title": "Alpine vineyards (Please press)",
        "url": "http://farm8.static.flickr.com/7001/6709343825_2ac8486408.jpg",
        "date": "Tue, 17 Jan 2012 17:13:00 -0500"
    }, {
      "title": "Like on a palm of a hand - Please view on black",
      "url": "http://farm8.static.flickr.com/7168/6477336109_ae49d2e244.jpg",
      "date": "Fri, 09 Dec 2011 10:00:00 -0500"
    }, {
        "title": "Silver curve - Please view on black",
        "url": "http://farm8.static.flickr.com/7006/6453535439_b6ac71d303.jpg",
        "date": "Mon, 05 Dec 2011 11:18:00 -0500"
    }]
}
