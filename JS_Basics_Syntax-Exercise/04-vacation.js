function vacation(numOfPeople, typeOfGroup, day) {
    let ticketPrisePerPerson = 0;
    let totalMoneyForTheGroup = 0;

    switch(typeOfGroup) {
        case 'Students':
            switch(day) {
                case 'Friday':
                    ticketPrisePerPerson = 8.45;
                    break;
                case 'Saturday':
                    ticketPrisePerPerson = 9.80;
                    break;
                case 'Sunday':
                    ticketPrisePerPerson = 10.46;
                    break;
            } 
            break;
        case 'Business':
            switch(day) {
                case 'Friday':
                    ticketPrisePerPerson = 10.90;
                    break;
                case 'Saturday':
                    ticketPrisePerPerson = 15.60;
                    break;
                case 'Sunday':
                    ticketPrisePerPerson = 16;
                    break;
            } 
            break;
        case 'Regular':
            switch(day) {
                case 'Friday':
                    ticketPrisePerPerson = 15;
                    break;
                case 'Saturday':
                    ticketPrisePerPerson = 20;
                    break;
                case 'Sunday':
                    ticketPrisePerPerson = 22.50;
                    break;
            } 
            break;
    }
    totalMoneyForTheGroup = ticketPrisePerPerson * numOfPeople;
    if(typeOfGroup === 'Students' && numOfPeople >= 30) {
        totalMoneyForTheGroup = totalMoneyForTheGroup * 0.85;
    } else if (typeOfGroup === 'Business' && numOfPeople >= 100) {
        totalMoneyForTheGroup = ticketPrisePerPerson * (numOfPeople - 10);
    } else if (typeOfGroup === 'Regular' && numOfPeople >= 10 && numOfPeople <= 20) {
        totalMoneyForTheGroup = totalMoneyForTheGroup * 0.95;
    }
    console.log( `Total price: ${totalMoneyForTheGroup.toFixed(2)}`);    
}

vacation(40,
    "Regular",
    "Saturday")