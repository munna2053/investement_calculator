p = 5000;
d = 100;
d_type = 'y';
n = 10;
r = 6;
f = 'm';
/**
 * 
 * @param {Number} p Initial
 * @param {Number} d monthly or yearly deposit
 * @param {String} d_type deposit month or yearly y or m
 * @param {Number} n year
 * @param {Number} r Yearly interest rate
 * @param {String} f compound frequency d, m or y
 */
const total_return = (p, d, d_type, n, r, f) => {
    // Monthly Deposit, daily compound frequency
    if (d_type == 'm' && f == 'd') {
        r = r / 365
        invest = p
        for (let i = 0; i < 12 * n; i++) {
            p = p * Math.pow((1 + r / 100), (365 / 12));
            p = p + d;
        }
        return p
    }
    //Monthly Deposit, Monthly compound frequency
    if (d_type == 'm' && f == 'm') {
        r = r / 12;
        for (let i = 0; i < 12 * n; i++) {
            p = p * Math.pow((1 + r / 100), 12 / 12);
            p = p + d;
        }
        return p
    }

    // Monthly Deposit, Yearly compound frequency
    if (d_type == 'm' && f == 'y') {
        r = r;
        for (let i = 0; i < n * 12; i++) {
            p = p * Math.pow((1 + r / 100), 1 / 12);
            p = p + d;
        }
        return p
    }

    // Yearly Deposit, daily compound frequency
    if (d_type == 'y' && f == 'd') {
        r = r / 365;
        for (let i = 0; i < n; i++) {
            p = p * Math.pow((1 + r / 100), 365);
            p = p + d;
        }
        return p
    }
    //Yearly Deposit, Monthly compound frequency
    if (d_type == 'y' && f == 'm') {
        r = r / 12;
        for (let i = 0; i < n; i++) {
            p = p * Math.pow((1 + r / 100), 12);
            p = p + d;
        }
        return p
    }
    // Yearly Deposit, yearly compound frequency
    if (d_type == 'y' && f == 'y') {
        r = r;
        for (let i = 0; i < n; i++) {
            p = p * Math.pow((1 + r / 100), 1);
            p = p + d;
        }
        return p
    }
}
const invest_return = (p, d, d_type, n, r, f) => {
    let total_invest = [];
    let year_end_returns = [];
    year_end_invest = p
    if (d_type == 'm') {
        for (let i = 1; i <= n; i++) {
            year_end_return = total_return(p, d, d_type, i, r, f);
            year_end_invest = year_end_invest + d * 12;
            let interest = year_end_return - year_end_invest;
            console.log(interest, year_end_invest)
        }
    }
    if (d_type == 'y') {
        for (let i = 1; i <= n; i++) {
            year_end_return = total_return(p, d, d_type, i, r, f);
            year_end_invest = year_end_invest + d;
            let interest = year_end_return - year_end_invest;
            console.log(interest, year_end_invest)
        }
    }
}

invest_return(p, d, d_type, n, r, f);