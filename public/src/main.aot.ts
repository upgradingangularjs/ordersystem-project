import 'zone.js';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
import { setAngularLib } from '@angular/upgrade/static';
import { platformBrowser } from '@angular/platform-browser';

import * as angular from 'angular';

import { AppModuleNgFactory } from '../aot/src/app.module.ngfactory';

setAngularLib(angular);
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);