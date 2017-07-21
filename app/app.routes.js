var app = angular.module('mySimilarDoctorAppRouter', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/DoctorsList');
    $stateProvider
    
    //Similar Doctors main page- displaying list of doctors
    .state('DoctorsList', {
        url: '/DoctorsList',
        templateUrl:'app/components/main/doctorsList.html'
    })
    
})