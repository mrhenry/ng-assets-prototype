export default {
  name:        'team',
  url:         '/team',
  templateUrl: 'app/about/team.html',

  controller:  function($scope) {
    // ...
    $scope.members = [
      'Pieter',
      'Yves',
      'Steven',
      'Hans',
      'Inge',
      'Marian',
      'Simon'
    ]
  }
};
