
import singleSpaAngular1 from 'single-spa-angular1';
import angular from 'angular';
import './app.module.js';
import './routes.js';

const domElementGetter = () => document.getElementById('cool-app');

const angularLifecycles = singleSpaAngular1({
  angular,
  domElementGetter,
  mainAngularModule: 'single-spa-app',
  uiRouter: true,
  preserveGlobal: true,
});

export const bootstrap = [aboutToBootstrap, angularLifecycles.bootstrap, doneBootstrapping];

export const mount = [angularLifecycles.mount];

export const unmount = [angularLifecycles.unmount];

function aboutToBootstrap() {
  console.log("about to bootstrapping");
  return Promise.resolve();
}

function doneBootstrap() {
  console.log("finished bootstrapping");
  return Promise.resolve();
}
