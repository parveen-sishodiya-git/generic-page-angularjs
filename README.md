# Generic page, building based upon JSON data saved in database.

# demolink
https://parveen-sishodiya-git.github.io/generic-page-angularjs/

Building generic page based upon JSON value store in database.

like here is our generic page json.

```javascript
page = {
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
```    
