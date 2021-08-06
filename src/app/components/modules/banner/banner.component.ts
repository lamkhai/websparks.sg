import { Component, Inject } from '@angular/core';
@Component({
  selector: 'app-module-banner',
  templateUrl: './banner.component.html'
})
export class ModuleBannerComponent {
  constructor(@Inject('BASE_URL') private baseUrl = '/'){
    let that = this;
    that.baseUrl = that.baseUrl.replace(location.origin,'')
  }

  getClassName(): string {
    let pathname = location.pathname.replace(this.baseUrl, '');
    return pathname.includes('services') ? 'services' : pathname;
  }

  getInnerHTML(): string {
    let pathname = location.pathname.replace(this.baseUrl, '');
    switch (pathname) {
      case 'about-us':
        return '<div class="header"><h3>About <span>Us</span></h3></div>';
      case 'portfolio':
        return '<div class="header"><h3>Our <span>Portfolio</span></h3></div>';
      case 'careers':
        return `<div class="header"><h3>Join <span>Our Team</span></h3></div>
                          <p>View current job opening</p>`;
      case 'contact':
        return '<div class="header"><h3>Contact <span>Us</span></h3></div>';
      default:
        return '<div class="header"><h3>Our <span>Services</span></h3></div>';
    }
  }
}