angular.module('mySimilarDoctorsListCtrlService',[]).factory('doctorsListCtrlFactory', function(){ 
var doctor =[
    {
        firstName:'Eric',
        lastName:'Andrew',
        rating:'7',
        specialization:'Cardiologist',
        area: 'Pleasanton',
        contactNo: '(222)-230-3909',
        description:'I was born and raised in the Texas. I graduated from the University of the Texas School of Medicine, and did my Internal Medicine residency and Cardiovascular fellowship training at Rush-Presbyterian- Medical Center in Chicago, Illinois'
    },
    {
        firstName:'Shr-Yi',
        lastName:'Liou',
        rating:'3',
       specialization: 'Dermatologist',
        area: 'Fremont',
        contactNo: '(123)-240-3219',
        description:'I completed all training required for both Internal Medicine and Dermatology.  I am board certified in both fields, although I practice only dermatology. I recently recertified in dermatology as part of my commitment to remaining up-to-date in my field. '
    },

    {
        firstName:'Pramodh',
        lastName:' Malhotra',
        rating:'6',
        specialization:'Cardiologist',
        area: 'Pleasanton',
        contactNo: '(623)-532-9532',
        description:'I grew up in India and moved out to California for an internship at the Oakland Naval Hospital. My neurology residency was at the UC Davis East Bay program and was located at the VA Hospital in Martinez, California.  I worked at the Oakland Naval Hospital for three years to complete my Navy scholarship obligation. '
    },
    {
        firstName:'Jaine',
        lastName:'Montgomary',
        rating:'8',
       specialization: 'Dermatologist',
        area: 'Fremont',
        contactNo: '(123)-240-3219',
        description:'I completed all training required for both Internal Medicine and Dermatology.  I am board certified in both fields, although I practice only dermatology. I recently recertified in dermatology as part of my commitment to remaining up-to-date in my field. '
    },
    {
        firstName:'Henry',
        lastName:'Chang',
        rating:'9',
       specialization: 'Dermatologist',
        area: 'Hayward',
        contactNo: '(123)-240-3219',
        description:'I was born and raised in the Texas. I graduated from the University of the Texas School of Medicine, and did my Internal Medicine residency and Cardiovascular fellowship training at Rush-Presbyterian- Medical Center in Chicago, Illinois'
    },
    {
        firstName:'Jaime',
        lastName:'Connor',
        rating:'5',
       specialization: 'Dermatologist',
        area: 'San Jose',
        contactNo: '(123)-240-3219',
        description:'I completed all training required for both Internal Medicine and Dermatology.  I am board certified in both fields, although I practice only dermatology. I recently recertified in dermatology as part of my commitment to remaining up-to-date in my field. '
    }

];
var service ={};
service.getData= function(){
    return doctor;
}

return service;
});
