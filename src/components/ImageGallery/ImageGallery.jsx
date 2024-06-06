import ImageCard from "./ImageCard/ImageCard"


export default function ImageGallery({ image }) {
    return (
        <ul>
            {image.map((filter) => {
                <li key={filter.id}>

                    <ImageCard image={filter} />
                </li>
            })}
            <li>

            </li>
        </ul>
    )
}
