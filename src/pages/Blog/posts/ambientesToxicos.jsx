import Image from "../../../assets/img/post-img1.png";
import "./_posts.scss";
import { Link } from "react-router-dom";

export default function SucessoProficional() {
    return (
        <main className="main-posts">
            <div className="header-post">
                <span className="blog-title">BLOG</span>
                <img src={Image} alt="" />
                <header className="post-title">
                <h1>Ambiente de trabalho tóxico: 7 sinais para você ficar alerta!</h1>
                <div>
                    <span className="post-authorName">Pucs Online</span>
                    <span className="separador">|</span>
                    <span>26 JAN .2024</span>
                </div>
                </header>
            </div>
            <section>
            <p>
                Um ambiente de trabalho tóxico pode afetar profundamente a saúde e o bem-estar dos funcionários, além de prejudicar a produtividade e o sucesso da empresa. Neste artigo, vamos explorar os sinais de um ambiente de trabalho tóxico, suas consequências e como você pode agir para melhorar essa situação.
            </p>
            <h2>Sinais de um Ambiente de Trabalho Tóxico</h2>
            <p>
                <ol className="list-blog">
                    <li>Falta de Comunicação: A comunicação ineficaz ou inexistente pode gerar mal-entendidos e conflitos.</li>
                    <li>Falta de Comunicação: A comunicação ineficaz ou inexistente pode gerar mal-entendidos e conflitos.</li>
                    <li>Liderança Fraca: Líderes que não apoiam ou motivam sua equipe contribuem para um ambiente negativo.</li>
                    <li>Alta Rotatividade: A saída constante de funcionários é um indicativo de insatisfação e problemas internos.</li>
                    <li>Desvalorização dos Colaboradores: Funcionários que não se sentem valorizados tendem a ser menos produtivos e mais propensos ao estresse.</li>
                    <li>Excesso de Trabalho: Sobrecarga contínua de trabalho sem apoio adequado.</li>
                    <li>Excesso de Trabalho: Sobrecarga contínua de trabalho sem apoio adequado.</li>
                    <li>Fofocas e Conflitos: Presença constante de fofocas e conflitos não resolvidos.</li>
                    <li>Falta de Reconhecimento: Ausência de reconhecimento pelo bom trabalho realizado.</li>
                </ol>
            </p>
            <h2>Consequências de um Ambiente Tóxico</h2>
            <p>
                <ul className="list-blog">
                    <li>Aumento do Estresse: Um ambiente negativo pode elevar os níveis de estresse dos funcionários, levando a problemas de saúde física e mental.</li>
                    <li>Queda na Produtividade: A moral baixa e a desmotivação resultam em menor eficiência e desempenho.</li>
                    <li>Maior Índice de Doenças: O estresse constante pode levar a um aumento nos índices de doenças entre os funcionários.</li>
                </ul>
                
                
                
            </p>
            <h2>Soluções para Combater a Toxicidade</h2>
            <p>
                <ol className="list-blog">
                    <li>Melhorar a Comunicação: Incentive a transparência e o diálogo aberto entre todos os níveis da organização.</li>
                    <li>Oferecer Feedback Construtivo: Reconheça os esforços dos colaboradores e ofereça orientações para o desenvolvimento.</li>
                    <li>Criar um Ambiente Inclusivo: Promova a diversidade e a inclusão para garantir que todos se sintam parte da equipe.</li>
                    <li>Reconhecer e Recompensar: Valorize e recompense o bom trabalho, criando uma cultura de reconhecimento.</li>
                </ol>
                
                
                
                
            </p>
            <h2>Conclusão</h2>
            <p>
                Identificar e corrigir um ambiente de trabalho tóxico é essencial para o bem-estar dos funcionários e o sucesso da empresa. Pequenas mudanças podem fazer uma grande diferença na criação de um ambiente de trabalho mais saudável e produtivo. Para mais detalhes sobre como identificar e agir em um ambiente de trabalho tóxico, leia o artigo completo no Zendesk.
            </p>
            <span className="ref-post">
            Referência:  
            <Link to="https://online.pucrs.br/blog/pilares-inteligencia-emocional">Quais são os cinco pilares da Inteligência Emocional? (pucrs.br)
            </Link>
            </span>
            </section>
        </main>
    )
}