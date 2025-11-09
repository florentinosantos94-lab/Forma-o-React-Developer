jsx

// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu Blog Pessoal</title>
      </Head>
      <h1>Bem-vindo ao Meu Blog Pessoal!</h1>
      <p>Este é o início de uma jornada incrível de compartilhamento de conhecimento.</p>
    </div>
  );
}
jsx

// pages/sobre.js
import Head from 'next/head';

export default function Sobre() {
  return (
    <div>
      <Head>
        <title>Sobre Mim - Meu Blog Pessoal</title>
      </Head>
      <h1>Sobre Mim</h1>
      <p>Olá, sou [Seu Nome]. Este é o meu blog pessoal onde compartilho minhas experiências e aprendizados no mundo da tecnologia.</p>
    </div>
  );
}
jsx

// pages/blog/[slug].js
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>{slug} - Meu Blog Pessoal</title>
      </Head>
      <h1>{slug.replace(/-/g, ' ')}</h1>
      <p>Conteúdo do post "{slug.replace(/-/g, ' ')}" aqui.</p>
    </div>
  );
}
