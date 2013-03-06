'use strict';

var embodychristApp = angular.module('embodychristApp', ['ui'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
        })
        .when('/sundayworship', {
            templateUrl: 'views/sunday.html',
        })
        .when('/mission', {
            templateUrl: 'views/mission.html',
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/404', {
            templateUrl: '404.html'
        })
        .otherwise({
            redirectTo: '/404'
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

            jQuery(window).trigger('resize');
        }
    })
    .directive('ngNovalidate', function factory() {
        return function postLink($scope, element) {
            if (!Modernizr.input.required) {
                $(element).attr('novalidate', 'novalidate')
            }
        }
    });