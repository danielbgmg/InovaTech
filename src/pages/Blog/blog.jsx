import "./_blog.scss";
export default function blog() {
  return (
    <div className="main">
      <div className="blog-header">
        <div>
          <h1 className="blog-title">BLOG</h1>    
        </div>
        <div className="blog-headerImgs">
          <div className="blog-img1">
            <img src="/src/assets/img/Blog-img1.png" alt="" />
          </div>
          <div className="blog-img2">
            <img src="/src/assets/img/Blog-img2.png" alt="" />
            <div>
              <img src="/src/assets/img/Blog-img3.png" alt="" />
              <img src="/src/assets/img/Blog-img4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="blog-posts">
        <div className="post-card">
          <img src="/src/assets/img/post-img1.png" alt="" />
          <div className="post-text">
            <h2>Quais são os cinco pilares da Inteligência Emocional?</h2>
            <p>Inteligência emocional é a capacidade de captar o mundo por meio dos estímulos. Praticá-la é transformador, pois a partir disso, é possível dominar suas emoções e usá-las a favor de si mesmo...Ler Mais
            </p>
          </div>
        </div>
        <div className="post-card">
          <img src="/src/assets/img/post-img2.png" alt="" />
          <div className="post-text">
            <h2>Resiliência: A Habilidade Essencial para o Sucesso Pessoal e Profissional</h2>
            <p>A resiliência é uma das competências mais importantes para quem deseja alcançar sucesso tanto na vida pessoal quanto na profissional. Em um mundo repleto de desafios e mudanças constantes, a capacidade de se ...Ler Mais
            </p>
          </div>
        </div>
        <div className="post-card">
          <img src="/src/assets/img/post-img3.png" alt="" />
          <div className="post-text">
            <h2>Ambiente de trabalho tóxico: 7 sinais para você ficar alerta!</h2>
            <p>Um ambiente de trabalho tóxico pode ser definido como aquele que afeta negativamente os trabalhadores de uma empresa, destacando que o resultado disso pode ser sentido dentro e fora dela. Ler mais
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
