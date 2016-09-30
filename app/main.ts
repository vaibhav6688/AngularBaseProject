import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

// import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app.module';
// browserDynamicPlatform().bootstrapModule(AppModule);