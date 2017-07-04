class List {
    constructor(arr){
        this.arr = arr
    }
    getSquere(){
        return this.arr.map((el) => {
          return el*el
        });
    }
    getHigherThan(num){
        return this.arr.filter((el) => {
            return el>num
        })
    }
    getSum(){
        return this.arr.reduce((a,b) => {
           return a + b
        })
    }
    partyTime(num){
       return this.arr.filter((el) => {
            return  el>num
            }).map((el) => {
                return el*el
            }).reduce((a,b)=>{
                return a+b
            })
        }

}

function log(a){
    console.log(a)
}

function triange(a){
    return a*a*a
}

export {triange}