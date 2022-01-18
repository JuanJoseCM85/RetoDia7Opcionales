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
            for (let i=0; i<this.vector.length; i++){
                
                this.vector[i] =  this.vector[i] + a.vector[i];
            }
        }
    }

    productNum(n)
    {
        for (let i=0; i<this.vector.length; i++){
            this.vector[i] = this.vector[i] * n;
        }
    }

    subs(a)
    {
        if( this.vector.length == a.vector.length){
            for (let i=0; i<this.vector.length; i++)
                this.vector[i] =  this.vector[i] - a.vector[i];
        }
    }

    product(a)
    {
        if( this.vector.length == a.vector.length ){
            for (let i=0; i<this.vector.length; i++)
                this.vector[i] =  this.vector[i] * a.vector[i];
        }
    }
}

module.exports = {vector}