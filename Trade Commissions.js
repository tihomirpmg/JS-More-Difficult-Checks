function commission(input) {

    let city = input[0];
    let sells = Number(input[1]);

    switch (city) {
        case 'Sofia':
            if (sells >= 0 && sells <= 500 && sells != 0) {
                let price = sells * 0.05;
                console.log((price).toFixed(2));
            }
            else if (sells > 500 && sells <= 1000 && sells != 0) {
                let price = sells * 0.07;
                console.log((price).toFixed(2));
            }
            else if (sells > 1000 && sells <= 10000 && sells != 0) {
                let price = sells * 0.08;
                console.log((price).toFixed(2));
            }
            else if (sells > 10000) {
                let price = sells * 0.12;
                console.log((price).toFixed(2));
            }
            else {
                console.log('error');
            }
            break;

        case 'Varna':
            if (sells >= 0 && sells <= 500 && sells != 0) {
                let price = sells * 0.045;
                console.log((price).toFixed(2));
            }
            else if (sells > 500 && sells <= 1000 && sells != 0) {
                let price = sells * 0.075;
                console.log((price).toFixed(2));
            }
            else if (sells > 1000 && sells <= 10000 && sells != 0) {
                let price = sells * 0.10;
                console.log((price).toFixed(2));
            }
            else if (sells > 10000) {
                let price = sells * 0.13;
                console.log((price).toFixed(2));
            }
            else {
                console.log('error');
            }
            break;

        case 'Plovdiv':
            if (sells >= 0 && sells <= 500 && sells != 0) {
                let price = sells * 0.055;
                console.log((price).toFixed(2));
            }
            else if (sells > 500 && sells <= 1000 && sells != 0) {
                let price = sells * 0.08;
                console.log((price).toFixed(2));
            }
            else if (sells > 1000 && sells <= 10000 && sells != 0) {
                let price = sells * 0.12;
                console.log((price).toFixed(2));
            }
            else if (sells > 10000) {
                let price = sells * 0.145;
                console.log((price).toFixed(2));
            }
            else {
                console.log('error');
            }
            break;

        default: console.log('error');
    }
}
commission(["Sofia",
    "1500"])