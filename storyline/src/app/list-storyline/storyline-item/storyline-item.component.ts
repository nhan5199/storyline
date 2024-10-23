import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storyline-item',
  standalone: true,
  imports: [],
  templateUrl: './storyline-item.component.html',
  styleUrl: './storyline-item.component.css',
})
export class StorylineItemComponent {
  url: string | null = '';
  src: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Capture the title from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.url = `storyline/${params.get('title')}/index.html`;
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      console.log(this.src);
    });
  }

  onBack() {
    this.location.back();
  }
}
