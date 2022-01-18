class vector
{
    constructor(n,m)
    {
        this.vector1 = [];
        for(let i=0; i<n; i++){
            //insertamos n elementos en el vector
            this.vector1.push(Math.round(Math.random() * m));
    }
    }

    add(a)
    {
        if( this.vector1.length == a.vector1.length){
            let resultado = new vector(this.vector1.length,0);
            for (let i=0; i<this.vector1.length; i++){
                
                resultado.vector1[i] =  this.vector1[i] + a.vector1[i];
            }
            return resultado;
        }
        return -1;
    }

    productNum(n)
    {
        let resultado = new vector(this.vector1.length,0);
        for (let i=0; i<this.vector1.length; i++){
            resultado.vector1[i] = this.vector1[i] * n;
        }
        return resultado;
    }

    subs(a)
    {
        if( this.vector1.length == a.vector1.length){
            let resultado = new vector(this.vector1.length,0);
            for (let i=0; i<this.vector1.length; i++){
                resultado.vector1[i] =  this.vector1[i] - a.vector1[i];
            }
            return resultado;
        }
        retunr -1;
    }

    product(a)
    {
        if( this.vector1.length == a.vector1.length ){
            let resultado = new vector(this.vector1.length,0);
            for (let i=0; i<this.vector1.length; i++){
                resultado.vector1[i] =  this.vector1[i] * a.vector1[i];
            }
            return resultado;
        }
        return -1;
    }
}

module.exports = {vector}