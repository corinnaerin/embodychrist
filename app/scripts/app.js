'use strict';

var embodychristApp = angular.module('embodychristApp', ['ui'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    }])
    .directive('accordian', function factory() {
          return function postLink($scope) {
              $('#accordian').liteAccordion({
                responsive: true,
                theme:'stitch',
                easing:'easeOutBack',
                rounded: true,
                autoPlay:true,
                onTriggerSlide : function() {
                    var index = this.closest('li').index();
                    $('figcaption').filter(function() {
                        return $(this).closest('li').index() != index
                    }).fadeOut();
                },
                onSlideAnimComplete : function() {    
                    this.find('figcaption').fadeIn();
                },
                pauseOnHover:true,
                activateOn: 'mouseover',
                autoScaleImages : true
            }).find('figcaption:first').show().end().find('figcaption:not(:first)').hide();
        }
    });
