import React from "react";
import style from './Description.module.scss'

import imgProfile from '../../utils/img/david.png'


const Description = () => {
    return (
       <div  className={style.container}>
         <div className={style.description}>
            <div className={style.descLeft}>
                "Meus interesses variam de Matemática a Música,
                Linguagem de Máquina a Filosofia, de Física a Poesia.
                Apaixonado pela ideia de criar "coisas", encontrei na computação os meios para dar vazão a minha criatividade em forma de soluções computadorescas".
                <div> _ </div>
                <div id="redFont"> Ocupação atual : </div>
                Programador na Grupo Card
            </div>
             
                <img className={style.avatar} src={imgProfile} />
             



            <div className={style.descRight}>
                
                Sou David Gama Serrate, desenvolvedor  de Software, entusiasta em Front-End. Especialista em React, com formação em Engenharia de Software.
                Possuo participação em diversos projeto, que se encontram no meu repositório do Github.
                Amo desafios e resolver problema de forma simples e prática.
            </div>


        </div >
       </div>
    )


}

export default Description