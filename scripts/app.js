angular.module("mainApp",[]).controller("appController",function($scope){
    console.log("i will load");
    $scope.page = {
        title:"Registration Form",
        fields:[{
            id:"firstName",
            label:"First Name",
            value:"",
            type:"text",
            placeholder:"Enter your first name",
            styles:"width:30em",
            jsonName:"firstName"
        },{
            id:"lastName",
            label:"Last Name",
            value:"",
            type:"text",
            placeholder:"Enter your last name",
            classes:"mylabel",
            jsonName:"lastName"
        },{
            id:"email",
            label:"Email",
            value:"",
            type:"email",
            placeholder:"Enter your email",
            styles:"width:55em",
            jsonName:"email"
        },{
            id:"age",
            label:"Age",
            value:18,
            type:"number",
            placeholder:"Enter your age",
            styles:"width:40em",
            jsonName:"age"
        }],
        buttons:[{
            label:"Submit",
            styles:"",
            classes:"menubutton",
            wfunction:"registerData",
            type:"button",
        },
        {
            label:"Reset",
            styles:"background-color: red;",
            classes:"menubutton",
            wfunction:"clearRegisterData",
            type:"button"
        }
    ]
    };

    $scope.clearRegisterData = ()=>{
        console.log("clearing data");
        $scope.page.fields.forEach(field => {
            field.value = "";
        });
    }

    $scope.wfunction = ()=>{
        console.log("jj");
    }

    $scope.registerData = ()=>{
        let jsonString = '{';
        let count = 0;
        let arraySize = $scope.page.fields.length;
        $scope.page.fields.forEach(field => {
            count++;
            jsonString = jsonString + '"' +field.jsonName +'"'+':"'+field.value+'"';

            if(count < arraySize)
               jsonString = jsonString + ','; 
        });
        jsonString = jsonString + '}'; 
        
        //data to save
        console.log(JSON.parse(jsonString));
        window.alert("Data to save "+jsonString);
    }
});

/*
Values we are taking:

id
label
type
value
placeholder
styles
classes
jsonName
*/