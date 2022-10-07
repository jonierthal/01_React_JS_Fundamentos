import { Header } from "./components/Header";
import { Post } from "./Post"

import styles from './App.module.css';
import './global.css';

import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
  <div> 
   <Header/>

   <div className={styles.wrapper}>
      <Sidebar />
      <main>
         <Post
            author="Jonahan Erthal"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas at earum debitis cumque magni a nobis neque minima, maiores, beatae obcaecati tenetur natus repellat impedit eos. Adipisci esse nam saepe"
         />
         <Post
            author="Marcos Almeida"
            content="Novo Post"
         />
      </main>
   </div>
  </div>
  )
}
