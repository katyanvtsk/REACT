const DogGallery = ({dogs, loading}) => {

    return (
        <div>
            {loading && <h3>Загрузка...</h3>}
            {dogs.map((item, index) => (
                <img src={item} 
                alt="изображение"
                key={index}
                style={{ width: '200px', aspectRatio: '1/1', margin: '10px' }} />
            ))}
        </div>
    )
}

export default DogGallery