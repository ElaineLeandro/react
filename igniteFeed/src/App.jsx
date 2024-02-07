import { Header } from './components/Header'
import {Post} from './Post'
import './styles.css'

export function App() {
  return (
    <>
    <Header/>

    <Post 
      author={"Elaine Leandro" }
      content={"lalalalalalalalalallalallalalalal"}
    />
    <Post
     author={"Asly" }
     content={"Benicio"}
    />
    
    </>
   
  )
}



