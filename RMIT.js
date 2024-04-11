let con1 = document.getElementById('con1');
let con2 = document.getElementById('con2');
let con3 = document.getElementById('con3');
let con4 = document.getElementById('con4');

function react1() {

        con1.style.display = 'block';
        con2.style.display = 'none';
        con3.style.display = 'block';
        con4.style.display = 'none';
        con5.style.display = 'none';

}
function react2() {

        con1.style.display = 'none';
        con2.style.display = 'none';
        con3.style.display = 'none';
        con4.style.display = 'block';
        con5.style.display = 'none';

}
function react3() {

        con1.style.display = 'none';
        con2.style.display = 'none';
        con3.style.display = 'none';
        con4.style.display = 'none';
        con5.style.display = 'flex';

}
function react4() {

        con1.style.display = 'none';
        con2.style.display = 'block';
        con3.style.display = 'none';
        con4.style.display = 'none';
        con5.style.display = 'none';

}
function react5() {

        con1.style.display = 'none';
        con2.style.display = 'none';
        con3.style.display = 'none';
        con4.style.display = 'none';
        con5.style.display = 'none';

}

let adContainer = document.getElementById('adContainer');
let main1 = document.getElementById('main1');

function closeEvent() {
        adContainer.style.display = 'none';
        entireBody.style.filter = 'none';
        entireBody.style.opacity = '1';
}

let entireBody = document.getElementById('entireBody');
function adres() {
        setTimeout(function (e) {
                main1.style.display = 'flex';
                main1.style.opacity = '1'
        }, 1000);

        setTimeout(function (e) {
                entireBody.style.filter = 'blur(5px)';
                entireBody.style.opacity = '0.1';

        }, 1000);
}