import styles from './Home.module.scss'

const HomeComponent = () => {


    return (
        <div className={styles.wallpaper} style={{ backgroundImage: `url(/images/wallpapers/web.jpg)` }}>
            <div className={styles.title}>
                <p> Wellcome to this testing web </p>
            </div>
        </div>
    )

}

export default HomeComponent;