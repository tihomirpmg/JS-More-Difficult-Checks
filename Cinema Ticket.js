function cinemaTicket(input) {
    let day = input[0];
    let ticketPrice = 0;
    switch (day) {
        case 'Monday': ticketPrice = 12; console.log(ticketPrice); break;
        case 'Tuesday': ticketPrice = 12; console.log(ticketPrice); break;
        case 'Wednesday': ticketPrice = 14; console.log(ticketPrice); break;
        case 'Thursday': ticketPrice = 14; console.log(ticketPrice); break;
        case 'Friday': ticketPrice = 12; console.log(ticketPrice); break;
        case 'Saturday': ticketPrice = 16; console.log(ticketPrice); break;
        case 'Sunday': ticketPrice = 16; console.log(ticketPrice); break;
    }
}
cinemaTicket(["Monday"])