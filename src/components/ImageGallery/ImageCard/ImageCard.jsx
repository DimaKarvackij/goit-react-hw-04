

export default function ImageCard({ image }) {
    console.log(image);
    return (
        <>
            <div>
                <img src={image.urls.small} alt={image.description} />
            </div>
        </>



    )
}
