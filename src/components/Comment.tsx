import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react';


interface CommentProps{
    content: string,
    onDeleteComment: (comment : string ) => void;

    
}




export function Comment({content, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeletecomment(){

        onDeleteComment(content);

    }
    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });

    }


    return(
        <div className={styles.comment}>   
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/49621812?v=4' alt=''/>

             <div className={styles.commentBox}>  
                <div className={styles.commentContent}>
                    <header>
                    <div className={styles.authorAndTime}>
                        <strong>Eduardo Mantovani</strong>
                        <time title='11 de mMaio ás 08:13h' dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        
                    </div>                           
                    <button onClick={handleDeletecomment}  title='Deletar comentário' >
                        <Trash size={24} />    
                    </button>    
                    </header>  

                    <p>{content}</p>

                
                </div>
                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>

             </div>
        
        
        </div>


    )
}