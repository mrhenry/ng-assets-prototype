import Team    from './about/team';
import Contact from './about/contact';

export default {
  name:        'about',
  url:         '/about',
  templateUrl: 'app/about.html',

  controller:  function($scope) {
    // ...
  },

  children: [
    Team,
    Contact
  ]
};
