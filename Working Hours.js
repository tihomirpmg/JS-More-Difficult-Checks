function workingHours(input) {
    let hours = Number(input[0]);
    let day = input[1];
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            if (hours >= 10 && hours <= 18) {
                console.log('open');
            }
            else{
                console.log('closed');
            }
            break;
        case 'Sunday': console.log('closed'); break;
    }
}
workingHours(["11",
"Monday"])