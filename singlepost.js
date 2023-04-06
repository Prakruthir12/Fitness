import sanityClient from '@sanity/client';
import {Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react'

export default function Singlepost(){
    const [singlepost,setsinglepost]=useState([]);
    const [isloading, setloading]=useState(true);
    const {slug}=useParams()

    useEffect(() => {
        const client = sanityClient({
          projectId: '3msprrd6',
          dataset: 'production',
          apiVersion: '2023-03-23',
          useCdn: true,
        });
        
        client
        .fetch(
          `*[slug.current=="${slug}"] {
            title,
            body,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            }
          }`
          ).then((data) => setsinglepost(data[0]))
          setloading(false)
    },[slug])

    return(
        <div>
            {isloading ? <h1>Loading..</h1>:
            <section className='px-5 xl:max-w-6xl xl:mx-auto pb-20'>
                <h1 className='uppercase font-bold text-4xl tracking-wider mb-10 mt-5'>{singlepost.title}</h1>
                {singlepost.mainImage && singlepost.mainImage.asset &&(
                <img src={singlepost.mainImage.asset.url} 
                alt={singlepost.title}
                title={singlepost.title}
                className='blog'/>)}<br/>
                <p>By Team Fitness Cube</p>
                <div className='block_content'>
                    <BlockContent blocks={singlepost.body}
                    projectId='3msprrd6' dataset='production'/>
                </div><br/>
                <button>
                    <Link to='/know'
                    className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent
                    border-2 border-black transitin-all duration-500 hover:text-black font-bold'>
                        Know more articles
                    </Link>
                </button>
            </section>
            }
        </div>
    )
}