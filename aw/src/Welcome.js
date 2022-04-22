function Welcome({ pic, name }) {
    return (
        <div className="welcome">
            <img className="pic" src={pic} alt={name} />
            <h1>welcome {name}</h1>
        </div>
    );
}
