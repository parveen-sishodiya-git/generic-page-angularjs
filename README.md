# Generic page, building based upon JSON data saved in database.

# Demolink
https://parveen-sishodiya-git.github.io/generic-page-angularjs/

Building generic page based upon JSON value store in database.

like here is our generic page json.

```javascript
page = {
        title: "Dynamic Registration Form",
        fields: [{
            sno: 4,
            id: "email",
            label: "Email",
            value: "",
            type: "email",
            placeholder: "Enter your email",
            styles: "width:35em",
            jsonName: "email"
        }, {
            sno: 2,
            id: "lastName",
            label: "Last Name",
            value: "",
            type: "text",
            placeholder: "Enter your last name",
            classes: "mylabel",
            jsonName: "lastName"
        }, {
            sno: 3,
            id: "age",
            label: "Age",
            value: 18,
            type: "number",
            placeholder: "Enter your age",
            styles: "width:40em",
            jsonName: "age"
        }, {
            sno: 1,
            id: "firstName",
            label: "First Name",
            value: "",
            type: "text",
            placeholder: "Enter your first name",
            styles: "width:30em",
            jsonName: "firstName"
        }, {
            sno: 5,
            id: "dob",
            label: "DOB",
            value: "",
            type: "date",
            placeholder: "Enter your date of birth",
            styles: "width:30em",
            jsonName: "dob"
        }, {
            sno: 7,
            id: "car",
            label: "Car",
            value: "",
            type: "dropdown",
            options: [{
                value: "audi",
                displayValue: "Audi Car"
            }, {
                value: "merc",
                displayValue: "Mercedese Car"
            }, {
                value: "alto",
                displayValue: "Alto Car"
            }, {
                value: "other",
                displayValue: "Other"
            }],
            styles: "width:30em",
            jsonName: "car"
        }, {
            sno: 6,
            id: "maritalStatus",
            label: "Marital Status",
            value: false,
            type: "checkbox",
            styles: "width:30em",
            options: ["Married", "Single", "Divorsed"],
            jsonName: "maritalStatus",
            display: false
        }, {
            sno: 8,
            id: "hobbies",
            label: "Hobbies",
            value: [],
            type: "checkbox",
            options: ["Cricket", "Chess", "Hockey", "Basketball"],
            styles: "width:30em",
            jsonName: "hobb"
        }],
        buttons: [{
            label: "Submit",
            styles: "",
            classes: "menubutton",
            wfunction: "registerData",
            type: "button",
        },
        {
            label: "Reset",
            styles: "background-color: red;",
            classes: "menubutton",
            wfunction: "clearRegisterData",
            type: "button"
        }]
    };
```    
