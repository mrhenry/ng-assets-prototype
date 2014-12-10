import Home  from './home';
import About from './about';

export default {
  name:     'root',
  url:      '',
  abstract: true,
  template: '<ui-view/>',

  children: [
    Home,
    About,
  ]
};
