import { Component, ViewEncapsulation } from '@angular/core';
import { AppStateService, LoginService } from '@c8y/ngx-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-app';

  constructor(public appState: AppStateService, public loginService: LoginService) {}
}
