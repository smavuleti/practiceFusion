
var app = angular.module('mySimilarDoctorAppRouter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/DoctorsList');
    $stateProvider
    
    //app main page- displaying list of doctors
    .state('DoctorsList', {
        url: '/DoctorsList',
        templateUrl:'components/main/doctorsList.html'
    })
    
})