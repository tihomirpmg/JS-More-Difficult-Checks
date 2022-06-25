function fruitShop(input) {
    let food = input[0];
    let day = input[1];
    let qty = Number(input[2]);
    let foodPrice = 0;
    let sum = foodPrice * qty;

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (food == 'banana') {
                foodPrice = 2.50;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            } else if (food == 'apple') {
                foodPrice = 1.20;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'orange') {
                foodPrice = 0.85;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'grapefruit') {
                foodPrice = 1.45;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'kiwi') {
                foodPrice = 2.70;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'pineapple') {
                foodPrice = 5.50;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'grapes') {
                foodPrice = 3.85;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else {
                console.log('error');
            }
            break;
        case 'Saturday':
        case 'Sunday':
            if (food == 'banana') {
                foodPrice = 2.70;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            } else if (food == 'apple') {
                foodPrice = 1.25;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'orange') {
                foodPrice = 0.90;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'grapefruit') {
                foodPrice = 1.60;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'kiwi') {
                foodPrice = 3.00;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'pineapple') {
                foodPrice = 5.60;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else if (food == 'grapes') {
                foodPrice = 4.20;
                sum = foodPrice * qty;
                console.log(sum.toFixed(2));
            }
            else {
                console.log('error');
            }
            break;
        default: console.log('error');
    }
}
fruitShop(["apple",
    "Tuesday",
    "2"])