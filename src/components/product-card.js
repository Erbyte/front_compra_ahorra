export default function ProductCard({ producto }) {
    const { image, name, price } = producto;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    }

    const addToCart = () => {
        console.log('Agregando al carrito');
    }

    return (
        <div key={name} className="col-2">
            <div className="card">
                <img className="card-img-top" height={120} src={image} alt={name} />
                <div className="card-body">
                    <h2>{name}</h2>
                    <p>{formatPrice(price)}</p>
                    <button className="btn btn-danger" onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}