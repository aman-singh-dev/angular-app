import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadScript('assets/js/altair_admin_common.min.js');
  }

  //dynamic script for this page
  public loadScript(url: string) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (document.getElementById('custom_js') != null) {
          document.getElementById('custom_js').remove();
        }
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.async = false;
        script.defer = true;
        script.id = 'custom_js';
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}
