angular.module('contactFormServices', ['ngResource']).factory('ContactForm', function($resource) {
    return $resource('scripts/contactform.php?name=:name&sub', {}, {});
}); 