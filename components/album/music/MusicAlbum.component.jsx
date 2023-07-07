import styles from './MusicAlbum.module.scss'

const MusicAlbumComponent = (props) => {

    return (
        <div className={styles.card}>
            <div className='row my-4'>
                <div className='col-5'>
                    <div className={styles.wallpaper} style={{ backgroundImage: `url(${props?.album.cover})` }}></div>
                </div>
                <div className='col-7'>
                    <div className={styles.playlist}>
                        {
                            props.musics.map(item => (
                                <div className={styles.item_list}>
                                    <img src={`${item.cover}`} alt={`${item.title}`} className={styles.item_img} />
                                    <div className={styles.item_detail}>
                                        {item.title}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )

}

export default MusicAlbumComponent;