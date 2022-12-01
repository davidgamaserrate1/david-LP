import React from "react";
import style from './Skills.module.scss'


const skillArr = 
[
    {
        "name" : "HTML5",
        "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        "name" : "JavaScript",
        "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        "name" : "CSS5",
        "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        "name" : "Node.js",
        "src" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
    },
    {
        "name" : "SQL",
        "src" : "https://img.icons8.com/external-flat-juicy-fish/512/external-sql-coding-and-development-flat-flat-juicy-fish.png"
    }
]



const Skills = () =>{
    return(
        <div >
            <div className={style.skills}>
            {
                skillArr.map( (skill) =>(
                    <div>
                        <img className={style.imgSkills} alt={skill.name} src={skill.src} /> 
                        <h2> {skill.name}</h2>
                    </div>

                )) 
            }
            </div>
            
         
        
        
            {/* <div className={style.skills}>
                {
                skillArr.map( (skill) =>(<span className={style.skilImg} > {skill.name}</span>)) 
                }
            </div> */}
        
        
        </div>
    )
}

export default Skills