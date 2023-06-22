const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric", 
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);





    // var currentDay = today.getDay();
    // var day = "";
    // sunday = 0 ... saturday = 6

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;

    //     case 1:
    //         day = "Monday";
    //         break;

    //     case 2:
    //         day = "Tuesday";
    //         break;
        
    //     case 3:
    //         day = "Wednesday";
    //         break;

    //     case 4:
    //         day = "Thursday";
    //         break;

    //     case 5:
    //         day = "Friday";
    //         break;

    //     case 6:
    //         day = "Saturday";
    //         break;

    //     default:
    //         day = "{Error}";
    //         break;
    // }

    // if (currentDay == 0 || currentDay == 6) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";
    // }


    res.render('list', { 
        kindOfDay: day,
        newListItems: items
    });

});

app.post('/', function(req, res){
    var item = req.body.newItem;
    console.log(item);
    items.push(item);
    res.redirect("/");
});


app.listen('3000', function () {
    console.log('listening on port 3000!')
});