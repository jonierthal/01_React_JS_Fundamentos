import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment () {
    return(
        <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/jonierthal.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonathan Erthal</strong>
                            <time title="11 de Outubro as 12:48" dateTime="2022-11-10 12:47:30">Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}