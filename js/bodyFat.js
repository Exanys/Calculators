let person = {
    name: '',
    sex: '',
    age: 0,
    height: 0,
    weight: 0,
    goal: '',
    active: 0,
    bmi: function (we = this.weight, he = this.height) {
        return (we / Math.pow(he / 100, 2)).toFixed(2);
    },
    state: function () {
        let bmi = this.bmi();
        if (bmi < 18.5) return 'podváha';
        if (bmi >= 18.5 && bmi < 25) return 'normální váha';
        if (bmi >= 25 && bmi < 30) return 'lehká obezita';
        if (bmi >= 30 && bmi < 40) return 'obezita';
        else return 'silná obezita';
    },
    fat: function () {
        let bmi = this.bmi();
        let a = this.age;
        let s = this.sex;
        let num = 0;
        if (s === 'muž') {
            num = 1;
        };
        return ((1.20 * bmi) + (0.23 * a) - (num * 10.8) - 5.4).toFixed(2);
    },
    energy: function () {
        if (this.sex === 'muž') return (66.473 + (13.7516 * this.weight) + (5.0033 * this.height) - (6.755 * this.age)) * (1 + (this.active / 10));
        else return (655.0955 + (9.5634 * this.weight) + (1.8496 * this.height) - (4.6756 * this.age)) * (1 + (this.active));
    },
    reach: function (g = this.goal) {
        energy = this.energy();
        if (g === 'Zhubnout') return energy.toFixed(2) * 0.9;
        if (g === 'Přibrat') return energy.toFixed(2) * 1.1;
        else return energy;
    }
}
function clean() {
    document.getElementById('name1').value = '';
    document.getElementById('age').value = 1;
    document.getElementById('height').value = 150;
    document.getElementById('weight').value = 50;
    document.getElementById('man').checked = false;
    document.getElementById('woman').checked = false;
    document.getElementById('active').value = 1;
}

document.getElementById('btn1').addEventListener('click', function () {
    person.name = document.getElementById('name1').value;
    person.age = document.getElementById('age').value;
    person.height = document.getElementById('height').value;
    person.weight = document.getElementById('weight').value;
    person.sex = document.getElementById('man').checked ? 'muž' : 'žena';
    person.goal = document.getElementById('goal').value;
    person.active = document.getElementById('active').value;
    document.getElementById('text1').innerHTML = `${person.name} máte BMI: ${person.bmi()}, tedy ${person.state()}, s ${person.fat()}% 
    tuků a a měl byste sníst ${person.reach().toFixed(2)}kcal.`;
    clean();
});