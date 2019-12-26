
class Mul{
    mul(a,b){
        return String(Number(a)*Number(b))
    }
}

class M extends Mul{
    add(a,b){
        return String(Number(a)+Number(b))
    }
}


module.exports=M