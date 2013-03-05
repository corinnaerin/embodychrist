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
    .directive('contactform', function factory() {
        return function postLink($scope) {
            //If supported, the browser will enforce our "required attributes", so this code will never execute
            if (!Modernizr.input.required) {
                var $form = jQuery('form');
                jQuery('input[required], textarea[required]', $form).each(function() {
                    jQuery(this).removeAttr('required').addClass("required " + this.getAttribute('type'));
                });
                $form.validate();
            }
        }
    });