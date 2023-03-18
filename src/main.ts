import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { LOCALE_ID } from '@angular/core';


  enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule,{
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }]
})
  .catch(err => console.error(err));
