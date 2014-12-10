export var Config = angular.module('config', [
  'ui.router',
  'ui.router.stateHelper'
]);

export var Components = angular.module('components', ['config', 'templates']);
export var App        = angular.module('app', ['config', 'components', 'templates']);

import Root from 'app/root';

App.config(function(stateHelperProvider, $urlRouterProvider){
  stateHelperProvider.setNestedState(Root);
  $urlRouterProvider.otherwise('/');
});
