
const btn=document.querySelectorAll('.BTN')
const BtnGeneral =document.getElementById('btn_general')
const contenedor = document.getElementById('content')
        
        // click='cena'


        btn.forEach((elementoSelect)=>{


            elementoSelect.addEventListener('click',(event)=>bUCARelementos(event.target.value))
            
            })



            bUCARelementos=(eve)=>{
                // console.log(el)
                removeELEMENT()



                fetch(`./comida.json`).then((e)=>e.json())
                .then((e)=>{
            e.forEach((el)=>{
     
                        if(el.categoria == eve){
                            PintarCOMIDA(el)
                        }else if(el.id == eve){
                            console.log(el.id)
                            PintarCOMIDA(el)
            
                            
                        }
            
                    })

                })
                 

              

            }

            
            removeELEMENT=()=>{
                HIJOS = document.querySelectorAll('.content_comida .tarjeta_comida')
                const cont = document.querySelector('.content_comida')
               HIJOS.forEach((e)=>cont.removeChild(e))
               
            }




// const fragment = new DocumentFragment();

            PintarCOMIDA=(el)=>{
                titulo=el.titulo
                imagen=el.img
                precio=el.precio
                definicion=el.definicion
                
                
                    let code=`<article class="tarjeta_comida">
                    <figure class="imagen">
                        <img src="${imagen}" alt="">
                    </figure>
                
                
                <div class="definicion">
                    <h2>${titulo}<span>${precio}</span></h2>
                
                
                    <p>${definicion}</p>
                    
                </div>
                  
                </article>
                `;
                
                
                contenedor.innerHTML+=code
                }


bUCARelementos(1)
          