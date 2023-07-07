import { useRouter } from "next/router";
import MusicAlbumComponent from "../../components/album/music/MusicAlbum.component";
import { Musics, MusicAlbum as MusicAlbumData } from "../../data/Music";

export default function MusicAlbum() {

    const router = useRouter();
    const { album } = router.query

    const findAlbum = MusicAlbumData.find(item => item.title === album)
    const randAlbumLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const randomMusics = [...Musics].sort(() => 0.5 - Math.random()).slice(0, randAlbumLength[Math.floor(Math.random() * randAlbumLength.length)]);

    return (
        <MusicAlbumComponent key={findAlbum.title} album={findAlbum} musics={randomMusics} />
    )

}