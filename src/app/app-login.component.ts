import { Component, ViewEncapsulation } from '@angular/core';
import { AppStateService } from '@c8y/ngx-components';

@Component({
  selector: 'app-login',
  template: '<c8y-login></c8y-login>',
  styleUrls: ['./app-login.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppLoginComponent {
  title = 'my-app';

  constructor(public appState: AppStateService) {}
}
