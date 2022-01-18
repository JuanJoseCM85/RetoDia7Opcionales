class vector
{
    constructor(n,m)
    {
        this.vector = [];
        for(let i=0; i<n; i++){
            //insertamos n elementos en el vector
            this.vector.push(Math.round(Math.random() * m));
    }
    }

    add(a)
    {
        if( this.vector.length == a.vector.length){
            let resultado = new vector(this.vector.length,0);
            for (let i=0; i<this.vector.length; i++){
                
                resultado.vector[i] =  this.vector[i] + a.vector[i];
            }
            return resultado;
        }
        return -1;
    }

    productNum(n)
    {
        let resultado = new vector(this.vector.length,0);
        for (let i=0; i<this.vector.length; i++){
            resultado.vector[i] = this.vector[i] * n;
        }
        return resultado;
    }

    subs(a)
    {
        if( this.vector.length == a.vector.length){
            let resultado = new vector(this.vector.length,0);
            for (let i=0; i<this.vector.length; i++){
                resultado.vector[i] =  this.vector[i] - a.vector[i];
            }
            return resultado;
        }
        retunr -1;
    }

    product(a)
    {
        if( this.vector.length == a.vector.length ){
            let resultado = new vector(this.vector.length,0);
            for (let i=0; i<this.vector.length; i++){
                resultado.vector[i] =  this.vector[i] * a.vector[i];
            }
            return resultado;
        }
        return -1;
    }
}

module.exports = {vector}