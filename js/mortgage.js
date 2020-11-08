let money = {
    name: '',
    principal: 0,
    years: 0,
    anualInetrest: 0,
    month: function (p = this.principal, m = this.years * 12) {
        mI = (this.anualInetrest / 100) / 12;
        mP = p * ((mI * Math.pow(1 + mI, m)) / (Math.pow(1 + mI, m) - 1));
        return mP;
    },
    complete: function () {
        monthPay = this.month();
        return (monthPay * 12) * this.years;
    }
}

function clean() {
    document.getElementById('name2').value = '';
    document.getElementById('principal').value = 50000;
    document.getElementById('years').value = 1;
    document.getElementById('anualInterest').value = 1;
}

document.getElementById('btn2').addEventListener('click', function () {
    money.name = document.getElementById('name2').value;
    money.principal = document.getElementById('principal').value;
    money.years = document.getElementById('years').value;
    money.anualInetrest = document.getElementById('anualInterest').value;
    document.getElementById('text2').innerHTML = `${money.name} budete měsíčně platit ${money.month().toFixed(2)}Kč 
    a celkem zaplatíte ${money.complete().toFixed(2)}Kč.`;
    clean();
});