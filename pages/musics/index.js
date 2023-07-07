import CardComponent from "../../components/card/Card.component"
import { MusicAlbum } from "../../data/Music"



export default function MusicIndex() {
    return (
        <div className="row">
            {
                MusicAlbum.map(item => {
                    return (
                        <CardComponent key={item.title} {...item} />
                    )
                })
            }
        </div>
    )
}