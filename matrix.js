let libreriaVector = require("./vector");

class matrix
{
    constructor(n,m,k)
    {
        this.miMatriz = new Array(m);
        for (let i=0; i<m; i++){
            let v = new libreriaVector.vector(n,k);
            this.miMatriz[i] = v;
        }
        
    }

    add(m)
    {
        // comprobamos que las matrices sean ambas de n x m elementos
        if(this.miMatriz.length == m.miMatriz.length)
            if(this.miMatriz[0].vector1.length == m.miMatriz[0].vector1.length){
                let mResultado = new matrix(this.miMatriz[0].vector1.length,this.miMatriz.length, 0);
                for(let i=0; i < this.miMatriz.length; i++ ){
                    for (let j=0; j < this.miMatriz[i].vector1.length; j++){
                        mResultado.miMatriz[i].vector1[j] = this.miMatriz[i].vector1[j] + m.miMatriz[i].vector1[j];
                    }
                }
                return mResultado;
            }
            
    }

    productNum(n)
    {
        let mResultado = new matrix(this.miMatriz[0].vector1.length,this.miMatriz.length, 0);
        for(let i=0; i < this.miMatriz.length; i++ ){
            for (let j=0; j < this.miMatriz[i].vector1.length; j++){
                mResultado.miMatriz[i].vector1[j] = this.miMatriz[i].vector1[j] * n;
            }
        }
        return mResultado;
    }

    subs (m)
    {
        if(this.miMatriz.length == m.miMatriz.length)
            if(this.miMatriz[0].vector1.length == m.miMatriz[0].vector1.length){
                let mResultado = new matrix(this.miMatriz[0].vector1.length,this.miMatriz.length, 0);
                for(let i=0; i < this.miMatriz.length; i++ ){
                    for (let j=0; j < this.miMatriz[i].vector1.length; j++){
                        mResultado.miMatriz[i].vector1[j] = this.miMatriz[i].vector1[j] - m.miMatriz[i].vector1[j];
                    }
                }
                return mResultado;
            }
    }

    product(m)
    {
        if(this.miMatriz.length == m.miMatriz.length)
        if(this.miMatriz[0].vector1.length == m.miMatriz[0].vector1.length){
            let mResultado = new matrix(this.miMatriz[0].vector1.length,this.miMatriz.length, 0);
            for(let i=0; i < this.miMatriz.length; i++ ){
                for (let j=0; j < this.miMatriz[i].vector1.length; j++){
                    mResultado.miMatriz[i].vector1[j] = this.miMatriz[i].vector1[j] * m.miMatriz[i].vector1[j];
                }
            }
            return mResultado;  
        }
    }
}



module.exports ={matrix}