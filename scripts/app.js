angular.module("mainApp",[]).controller("appController",function($scope){
    console.log("i will load");
    $scope.page = {
        title:"Registration Form",
        fields:[{
            sno:4,
            id:"email",
            label:"Email",
            value:"",
            type:"email",
            placeholder:"Enter your email",
            styles:"width:55em",
            jsonName:"email"
        },{
            sno:2,
            id:"lastName",
            label:"Last Name",
            value:"",
            type:"text",
            placeholder:"Enter your last name",
            classes:"mylabel",
            jsonName:"lastName"
        },{
            sno:3,
            id:"age",
            label:"Age",
            value:18,
            type:"number",
            placeholder:"Enter your age",
            styles:"width:40em",
            jsonName:"age"
        },{
            sno:1,
            id:"firstName",
            label:"First Name",
            value:"",
            type:"text",
            placeholder:"Enter your first name",
            styles:"width:30em",
            jsonName:"firstName"
        },{
            sno:5,
            id:"dob",
            label:"DOB",
            value:"",
            type:"datetime-local",
            placeholder:"Enter your date of birth",
            styles:"width:30em",
            jsonName:"dob"
        },{
            sno:7,
            id:"car",
            label:"Car",
            value:"",
            type:"dropdown",
            options:[{
                value:"audi",
                displayValue:"Audi Car"
            },{
                value:"merc",
                displayValue:"Mercedese Car"
            },{
                value:"alto",
                displayValue:"Alto Car"
            },{
                value:"other",
                displayValue:"Other"
            }],
            styles:"width:30em",
            jsonName:"car"
        },{
            sno:6,
            id:"maritalStatus",
            label:"Marital Status",
            value:false,
            type:"checkbox",
            styles:"width:30em",
            options:["Married","Single","Divorsed"],
            jsonName:"maritalStatus",
            display:false
        },{
            sno:8,
            id:"hobbies",
            label:"Hobbies",
            value:[],
            type:"checkbox",
            options:["Cricket","Chess","Hockey","Basketball"],
            styles:"width:30em",
            jsonName:"hobb"
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
        }]
    };

    $scope.selection = [];

    $scope.toggleSelection = function toggleSelection(fruitName , fieldId) {
        console.log("clicked "+fruitName+" "+fieldId);

        $scope.page.fields.forEach(e => {
            if(e.id == fieldId){
                e.value = $scope.selection;
            }
        });
        
        var idx = $scope.selection.indexOf(fruitName);
        
        // Is currently selected
        if (idx > -1) {
          $scope.selection.splice(idx, 1);
        }
    
        // Is newly selected
        else {
          $scope.selection.push(fruitName);
        }
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