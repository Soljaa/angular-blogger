import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() title!: string;
  @Input() link!: string;
  constructor(private router: Router, private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }


  goToContent() {
    const dataToSend = {
      title: this.title,
      link: this.link,
    };

    this.router.navigate(['/content'], {
      queryParams: dataToSend,
    });
    this.viewportScroller.scrollToPosition([0, 0]);

  }
}
