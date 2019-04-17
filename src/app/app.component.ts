import { Component, ViewEncapsulation } from '@angular/core';
import { AppStateService, LoginService } from '@c8y/ngx-components';
import { FetchClient } from '@c8y/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-app';

  constructor(public appState: AppStateService, public loginService: LoginService) {
    const client = new FetchClient();
    client.fetch('tenant/loginOptions').then((res: Response) => {
      res.json().then((options) => {
        this.appState.state.loginOptions = options.loginOptions;
      });
    });
  }
}
