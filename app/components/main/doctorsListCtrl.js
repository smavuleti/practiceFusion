
angular.module('mySimilarDoctorsListCtrl',[]).controller('doctorsListCtrl',function($scope,doctorsListCtrlFactory){
   
 this.doctorList = doctorsListCtrlFactory.getData();     
 
 $scope.displayDetails = function(doctor, index){
    $scope.selectedDoctor = doctor;
}

$scope.getSimilarDoctorList = function(firstName,specialization){
    $scope.specialization = specialization
    $scope.firstName = firstName;
    var doctorList = doctorsListCtrlFactory.getData()
    
        //checking the key specialization value 
        $scope.filteredList = doctorList.filter(function(d){
            if(d.firstName != $scope.firstName)
                return d.specialization === $scope.specialization;
        })
        return $scope.filteredList;
    }
    
})