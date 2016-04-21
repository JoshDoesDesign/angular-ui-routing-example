'use strict';

// document.domain='k2.com';

console.log('controller.js loaded successfully');

function scrollContent() {
    console.log('this got registered');

    $("html,body").animate({ scrollTop: 300px}, "slow");

    // $('html, body').animate({scrollTop:$('#div_id')}, 'slow');
} 

angular
    .module("microsite", ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('efficiency', {
                url: '/efficiency',
                templateUrl: 'templates/efficiency.html',
                onEnter: scrollContent
            })
            .state('workflows', {
                url: '/workflows',
                templateUrl: 'templates/workflows.html',
                onEnter: scrollContent
            }) 
            .state('processes', {
                url: '/processes',
                templateUrl: 'templates/processes.html',
                onEnter: scrollContent
            }) 
            .state('successMessage', {
                url: '/successDownload',
                templateUrl: 'templates/thankYouDownload.html'
            })
            .state('successfulDownloadSembcorp', {
                url: '/successfulDownloadSembcorp',
                templateUrl: 'templates/successfulDownloadSembcorp.html'
            })
            .state('successfulDownloadRoche', {
                url: '/successfulDownloadRoche',
                templateUrl: 'templates/successfulDownloadRoche.html'
            })
            .state('successfulDownloadWebroot', {
                url: '/successfulDownloadWebroot',
                templateUrl: 'templates/successfulDownloadWebroot.html'
            })
            .state('successfulDownloadKinross', {
                url: '/successfulDownloadKinross',
                templateUrl: 'templates/successfulDownloadKinross.html'
            })   
            .state('successfulDownloadMetropacific', {
                url: '/successfulDownloadMetropacific',
                templateUrl: 'templates/successfulDownloadMetropacific.html'
            }) 
            .state('successfulDownloadSouthwest', {
                url: '/successfulDownloadSouthwest',
                templateUrl: 'templates/successfulDownloadSouthwest.html'
            })         
            .state('introvideo', {
                url: '/introvideo',
                templateUrl: 'templates/introvideo.html',
                onEnter: scrollContent
            })
            .state('runningprocesses', {
                url: '/runningprocesses',
                templateUrl: 'templates/runningProcesses.html',
                onEnter: scrollContent,
                controller: function ($scope, $state, $http) {
                    $scope.user = {};

                    $scope.actions = {
                        submitForm: function () {
                            $http({
                              method: 'POST',
                              data: $scope.user,
                              // url: 'http://content.k2.com/Director.aspx?sid=3469&amp;sky=Q1MI3J4J&amp;pgi=6867&amp;pgk=RIE68PC2&amp;eli=FBACEBB55BE771B93616F421CDB5730BECA4D79431135361&amp;rid=387524&amp;rky=9MZ5LG3T&amp;tky=131001345670708416&amp;fbs=1F518819F034F3AD566FB199C5DFE088720DAD33633FAEB3'
                              url: 'http://www.k2.com/forms/submit.xml'
                            }).
                            then(function () {
                                // success
                              //$scope.view.showSuccessMessage = true;
                              $state.go('successMessage');
                            });
                        }
                    };
                }
            }) 
            .state('enterprisesoftware', {
                url: '/enterprisesoftware',
                templateUrl: 'templates/enterprisesoftware.html',
                onEnter: scrollContent,
                controller: function ($scope, $state, $http) {
                    $scope.user = {};

                    $scope.actions = {
                        submitForm: function () {
                            $http({
                              method: 'POST',
                              data: $scope.user,
                              // url: 'http://content.k2.com/Director.aspx?sid=3469&amp;sky=Q1MI3J4J&amp;pgi=6867&amp;pgk=RIE68PC2&amp;eli=FBACEBB55BE771B93616F421CDB5730BECA4D79431135361&amp;rid=387524&amp;rky=9MZ5LG3T&amp;tky=131001345670708416&amp;fbs=1F518819F034F3AD566FB199C5DFE088720DAD33633FAEB3'
                              url: 'http://www.k2.com/forms/submit.xml'
                            }).
                            then(function () {
                                // success
                              //$scope.view.showSuccessMessage = true;
                              $state.go('successMessage');
                            });
                        }
                    };
                }
            }) 
            .state('downloadcasestudy', {
                url: '/downloadcasestudy',
                templateUrl: 'templates/downloadCaseStudy.html',
                controller: function($scope) {
                    $scope.downloadFile = function($event) { 

                        console.log('download file occured');

                        $('.myhiddeniframe').remove(); 
                        var element = $(angular.element($event.currentTarget)); 
                        var dlUrl = '/pdf-files/test.pdf'; 
                        $('iframe').attr({
                            src: dlUrl, 
                            style: 'visibility:hidden;display:none', 'class': 'myhiddeniframe' 
                        }).appendTo(element); 
                    };
                }
            })
            .state('.submitrunningprocesses', {
                url: '/submitrunningprocesses',
                templateUrl: 'templates/submitRunningProcesses.html',
            })  
            .state('sembcorp', {
                url: '/sembcorp',
                templateUrl: 'templates/sembcorp.html',
                onEnter: scrollContent,
                controller: function($scope, $state) {
                    $scope.downloadFile = function($event) { 
                        var link = document.createElement("a");
                        var url = '/pdf-files/SCNA_SembcorpIndustries_CS_A4_Digital_112315.pdf';

                        link.setAttribute("href", url);
                        link.setAttribute("download", 'SCNA_SembcorpIndustries_CS_A4_Digital_112315.pdf');

                        // Simulate clicking the download link
                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                        link.dispatchEvent(event);

                        $state.go('successfulDownloadSembcorp');
                    };
                }
            })    
            .state('roche', {
                url: '/roche',
                templateUrl: 'templates/roche.html',
                onEnter: scrollContent,
                controller: function($scope, $state) {
                    $scope.downloadFile = function($event) { 
                        var link = document.createElement("a");
                        var url = '/pdf-files/K2_CaseStudy_Roche_DIGITAL.pdf';

                        link.setAttribute("href", url);
                        link.setAttribute("download", 'K2_CaseStudy_Roche_DIGITAL.pdf');

                        // Simulate clicking the download link
                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                        link.dispatchEvent(event);

                        $state.go('successfulDownloadRoche');
                    };
                }
            }) 
            .state('webroot', {
                url: '/webroot',
                templateUrl: 'templates/webroot.html',
                onEnter: scrollContent,
                controller: function($scope, $state) {
                    $scope.downloadFile = function($event) { 
                        var link = document.createElement("a");
                        var url = '/pdf-files/K2_CaseStudy_Webroot_A4_DIGITAL.pdf';

                        link.setAttribute("href", url);
                        link.setAttribute("download", 'K2_CaseStudy_Webroot_A4_DIGITAL.pdf');

                        // Simulate clicking the download link
                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                        link.dispatchEvent(event);

                        $state.go('successfulDownloadWebroot');
                    };
                }
            })
            .state('kinross', {
                url: '/kinross',
                templateUrl: 'templates/kinross.html',
                onEnter: scrollContent,
                controller: function($scope, $state) {
                    $scope.downloadFile = function($event) { 
                        var link = document.createElement("a");
                        var url = '/pdf-files/K2_Kinross_CaseStudy_A4_DIGITAL.pdf';

                        link.setAttribute("href", url);
                        link.setAttribute("download", 'K2_Kinross_CaseStudy_A4_DIGITAL.pdf');

                        // Simulate clicking the download link
                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                        link.dispatchEvent(event);

                        $state.go('successfulDownloadKinross');
                    };
                }
            })   
            .state('metropacific', {
                url: '/metropacific',
                templateUrl: 'templates/metropacific.html',
                onEnter: scrollContent,
                controller: function($scope, $state) {
                    $scope.downloadFile = function($event) { 
                        var link = document.createElement("a");
                        var url = '/pdf-files/Metro-Pacific-CS-letter-screen.pdf';

                        link.setAttribute("href", url);
                        link.setAttribute("download", 'Metro-Pacific-CS-letter-screen.pdf');

                        // Simulate clicking the download link
                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                        link.dispatchEvent(event);

                        $state.go('successfulDownloadMetropacific');
                    };
                }
            }) 
            .state('southwest', {
                url: '/southwest',
                templateUrl: 'templates/southwest.html',
                onEnter: scrollContent,
                controller: function($scope, $state) {
                    $scope.downloadFile = function($event) { 
                        var link = document.createElement("a");
                        var url = '/pdf-files/SouthwestBank_CS_A4_Digital.pdf';

                        link.setAttribute("href", url);
                        link.setAttribute("download", 'SouthwestBank_CS_A4_Digital.pdf');

                        // Simulate clicking the download link
                        var event = document.createEvent('MouseEvents');
                        event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                        link.dispatchEvent(event);

                        $state.go('successfulDownloadSouthwest');
                    };
                }
            })                                   

            .state('successDownload', {
                url: '/successDownload',
                templateUrl: 'templates/thankYouDownload.html'
                // template: '<h1>Thank you for your PDF download!</h1>'
            })               

            $urlRouterProvider.otherwise('/');
            // $locationProvider.html5Mode(true).hashPrefix('');
            // $locationProvider.html5Mode(true);
    }]);  

