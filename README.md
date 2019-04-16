# Start:
```
npm install
ng serve --proxy-config=proxy.config.json --liveReload=false
```

Login with your production credentials.

Changed files:
 - app-login.component.ts -> for style encapsulation integrating the c8y-login
 - app.login-component.less -> loading styles (actual all c8y styles, as we just have global styles)
 - app.component.ts -> for view/switch logged in or not
 - app.module.ts -> added the necessary modules
 - package.json -> added imports

 [Here is how it should look like](/demo.gif)