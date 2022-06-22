
    function operaciones(){
        
        return {       
        sumar:function (num1,num2){
           return num1+num2;
        
        }
        , restar:function (num1,num2){
           return  num1-num2;
        }
        ,
        multiplicar:function(num1,num2){
         return num1*num2;
            }
        }
            }
        
          op=operaciones()
        
            console.log(op.sumar(1,1))
            console.log(op.restar(1,1))
            console.log(op.multiplicar(1,1))
        
        
        
        
        
            function operaciones(){
                
                
                 function sumar(num1,num2){
                   return num1+num2;
                
                }
                function restar (num1,num2){
                   return  num1-num2;
                }
                
                function multiplicar(num1,num2){
                 return num1*num2;
                    }
                return{ multiplicar,sumar ,restar};
        
        
                    }
                
                  op=operaciones()
                
                    console.log(op.sumar(1,1))
                    console.log(op.restar(1,1))
                    console.log(op.multiplicar(1,1))
        