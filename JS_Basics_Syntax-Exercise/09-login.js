function login(input) {
    let username = input[0];
    let password = '';

    for(i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    let incorrectPassCount = 0;
    for(j = 1; j < input.length; j++) {
        let currentPass = input[j];
        if(currentPass === password) {
            console.log(`User ${username} logged in.`);
        } else {
            incorrectPassCount++;
            if(incorrectPassCount === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }        
            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['Acer','login','go','let me in','recA'])