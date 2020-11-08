let mzda = {
    hard: 0,
    child: 0,
    husband: false,
    inv12: false,
    inv3: false,
    ztp: false,
    student: false,
    superhard: function () {
        let h = this.hard;
        let soc = h * 0.248;
        let zdrav = h * 0.09;
        return parseInt(h) + parseInt(soc) + parseInt(zdrav);
    },
    childSleva: function (ch = this.child) {
        if (ch == 1) return 1267;
        if (ch == 2) return 1267 + 1617;
        if (ch > 2) return 1267 + 1617 + ((ch - 2) * 2017);
        else return 0;
    },
    sale: function () {
        let superH = this.superhard() * 0.15;
        let childrens = this.childSleva();
        let sleva = 0;
        if (this.husband == true) {
          sleva += 2070;
        };
        if (this.inv12 == true) {
          sleva += 210;
        };
        if (this.inv3 == true) {
          sleva += 420;
        };
        if (this.ztp == true) {
          sleva += 1345;
        };
        if (this.student == true) {
          sleva += 335;
        };
        return Number(superH) - Number(childrens) - Number(sleva);
    },
    clear: function () {
        let h = this.hard;
        let sl = this.sale();
        let soci = this.hard * 0.065;
        let zdrav = this.hard * 0.045;
        return Number(h) - Number(sl) - Number(soci) - Number(zdrav);
        }
}
function clean() {
  document.getElementById("hard").value = 10000;
  document.getElementById("child").value = 0;
  document.getElementById("husband").checked = false;
  document.getElementById("inv12").checked = false;
  document.getElementById("inv3").checked = false;
  document.getElementById("student").checked = false;
  document.getElementById("ztp").checked = false;
}
document.getElementById('btn3').addEventListener('click', function () {
    mzda.hard = document.getElementById('hard').value;
    mzda.child = document.getElementById('child').value;
    mzda.husband = document.getElementById('husband').checked;
    mzda.inv12 = document.getElementById('inv12').checked;
    mzda.inv3 = document.getElementById('inv3').checked;
    mzda.student = document.getElementById('student').checked;
    mzda.ztp = document.getElementById('ztp').checked;
    document.getElementById(
      "text3"
    ).innerHTML = `Vaše čistá mzda činí ${mzda.clear()}Kč.`;
    clean();
});