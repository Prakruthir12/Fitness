import sanityClient from '@sanity/client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Know() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const client = sanityClient({
      projectId: '3msprrd6',
      dataset: 'production',
      apiVersion: '2023-03-23',
      useCdn: true,
    });

    client
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage {
            asset-> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <center>
      <section className='px-5 2xl:max-w-7xl 2xl:mx-auto'>
      <h1 className='font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lglg:text-8xl'>Blog</h1>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 '>
        {posts.map((post)=>(
          <article key={post.slug.current}>
            <h4 className='uppercase font-bold text-xl mt-2'>{post.title}</h4>
            <img src={post.mainImage.asset.url}
            alt={post.title}/>
            <button className='mt-5 mb-10'> 
              <Link to={`/know/${post.slug.current}`}
              className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
              border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
                Read Full Atricle
              </Link>
            </button>
          </article>
        ))}
      </div>
    </section>
    </center>
  );
}
