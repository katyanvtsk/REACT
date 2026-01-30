const ChildComponent = ({name, counter}) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>Текущий счетчик: {counter}</p>
        </div>
    )
}

export default ChildComponent
