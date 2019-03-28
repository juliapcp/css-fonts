// funções são executadas em cima do this

const texto = {
    txt: '    textinho :)',
    trimleft: function () {
        let r = '';
        let copy = false;
        for (let i = 0; i < this.txt.length; i++) {
            if (copy || this.txt[i] != ' ') {
                copy = true;
                r += this.txt.charAt(i);
            }
        }
        return r;
    }
}

console.log(texto.trimleft());
