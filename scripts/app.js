angular.module("mainApp",[]).controller("appController",function($scope){
    console.log("i will load");
    $scope.page = {
        fields:[{
            id:"firstName",
            label:"First Name",
            type:"text",
            placeholder:"Enter your first name",
            styles:"width:30em"
        },{
            id:"lastName",
            label:"Last Name",
            type:"text",
            placeholder:"Enter your last name",
            classes:"mylabel"
        },{
            id:"age",
            label:"Age",
            type:"number",
            placeholder:"Enter your age",
            styles:"width:40em"
        }],
        title:"Registration Form"
    };
});