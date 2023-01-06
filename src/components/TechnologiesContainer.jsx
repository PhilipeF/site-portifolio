import { DiHtml5, DiCss3, DiJavascript, DiNodejs, DiReact } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {
        id: "html",
        name: "HTML5",
        icon: <DiHtml5 />,
        description: "Linguagem de Marcação de Hipertexto (HTML)"
    },
    {
        id: "css",
        name: "CSS3",
        icon: <DiCss3 />,
        description: "Usamos para estilizar as paginas web"
    },
    {
        id: "js",
        name: "JavaScript",
        icon: <DiJavascript />,
        description: "Linguagem de programação que permite a você implementar itens complexos em páginas web "
    },
    {
        id: "reactjs",
        name: "ReactJS",
        icon: <DiReact />,
        description: "O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). "
    },
    {
        id: "nodejs",
        name: "NodeJS",
        icon: <DiNodejs />,
        description: "O Node.js é um ambiente de execução Javascript server-side."
    },
    {
        id: "typeScript",
        name: "TypeScript",
        icon: <SiTypescript />,
        description: "TypeScript é um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript"
    }
]

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer