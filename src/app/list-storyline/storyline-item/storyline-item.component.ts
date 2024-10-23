import { CommonModule, Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-storyline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storyline-item.component.html',
  styleUrl: './storyline-item.component.css',
})
export class StorylineItemComponent {
  url: string | null = '';
  src: SafeResourceUrl | null = null;
  loading: boolean = true;
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

    this.onIframeLoad();
  }

  onIframeLoad(): void {
    this.loading = false;
  }

  onBack() {
    this.location.back();
  }
}
