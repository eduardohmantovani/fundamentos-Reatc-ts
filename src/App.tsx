
import {Post}  from './components/Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from  './App.module.css';

const posts = [
  {
      id:1,
      author:{ 
          avatarUrl: 'https://avatars.githubusercontent.com/u/49621812?v=4',
          name:'Eduardo Mantovani',
          role:'Dev'
      },
      content:[
          { type: 'paragraph', content: 'Fala galeraa',  },
          { type: 'paragraph', content: 'Acabei de subir mais um proijeto no meu portifa. É que fiz no NLW Return.' , },
          { type: 'link', content: 'jane.desing/doctorcare' , }

      ],
      publishedAt: new Date('2022-10-03 20:00:00')
  },

  {
      id:2,
      author:{ 
          avatarUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQGb4zbhxEaCBw/profile-displayphoto-shrink_200_200/0/1624544458733?e=1671667200&v=beta&t=zv3qvaK9LQK6U8c5BNzFxnuR-ym6Ro6AgV7KPdI_ZVU',
          name:'Alek Ramires',
          role:'Dev'
      },
      content:[
          { type: 'paragraph', content: 'Fala galeraa',  },
          { type: 'paragraph', content: 'Acabei de subir mais um proijeto no meu portifa. É que fiz no NLW Return.' , },
          { type: 'link', content: 'jane.desing/doctorcare' , }

      ],
      publishedAt: new Date('2022-10-18 20:00:00')
  },

];

export function App() {


  return (
    <div>
     <Header/>
     
     <div className={styles.wrapper}>
      <Sidebar/>  
      <main>
        {posts.map( post => {
          return (<Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
          />)
        })}
      </main>
      </div>
    </div>
  )
}


