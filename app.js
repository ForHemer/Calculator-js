
const boutonKiPeze = [...document.querySelectorAll('.button')];
const listeKeycode = boutonKiPeze.map(touche => touche.dataset.key);
const ecran = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    calculate(value)

})

document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    calculate(value)

})

const calculate = (value) => {
    if (listeKeycode.includes(value)) {
        switch (value) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(value);
                const touche = boutonKiPeze[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('An error has occurred in your calculation : ' + e.message)
})