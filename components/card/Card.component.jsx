import Link from 'next/link'
import styles from './Card.module.scss'

const CardComponent = (props) => {
    return (
        <div className={`col-4 p-2`}>
            <Link href={`/musics/${props.title}`} className={styles.link}>
                <div className={styles.card}>
                    <div className={styles.wallpaper} style={{ backgroundImage: `url(${props.cover})` }} >
                        <div className={styles.details}>
                            {props.title}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardComponent