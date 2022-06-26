import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isBottom: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY) {
      this.isBottom = true;
      console.log(document.body.offsetHeight);
      console.log(window.scrollY);
    } else {
      this.isBottom = false;
    }
  }
}
