import { Header } from "./components/Header";
import { Post } from "./Post"

import './global.css';

export function App() {
  return (
  <div> 
   <Header/>

   <Post
      author="Jonahan Erthal"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas at earum debitis cumque magni a nobis neque minima, maiores, beatae obcaecati tenetur natus repellat impedit eos. Adipisci esse nam saepe"
   />
   <Post
      author="Marcos Almeida"
      content="Novo Post"
   />
  </div>
  )
}
