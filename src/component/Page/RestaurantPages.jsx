import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import demoRestaurants from '../Home/DemoRestaurants';

export default function RestaurantPage() {
    const { id } = useParams();
    const restaurant = demoRestaurants.find(r => r.id === Number(id));
    const [cart, setCart] = useState([]);

    if (!restaurant) {
        return (
            <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>
                <h2>Restaurant not found</h2>
                <Link to="/" style={{ color: '#61dafb', fontWeight: 500 }}>Back to Home</Link>
            </div>
        );
    }

    const addToCart = (food) => {
        setCart(prev => {
            const exists = prev.find(item => item.name === food.name);
            if (exists) {
                return prev.map(item =>
                    item.name === food.name ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...food, qty: 1 }];
        });
    };

    const removeFromCart = (food) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.name === food.name ? { ...item, qty: item.qty - 1 } : item
                )
                .filter(item => item.qty > 0)
        );
    };

    return (
        <div style={{
            padding: '2rem',
            color: 'white',
            maxWidth: 1000,
            margin: '2rem auto',
            background: 'rgba(30,30,30,0.92)',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            position: 'relative'
        }}>
            <Link
                to="/"
                style={{
                    color: '#61dafb',
                    textDecoration: 'none',
                    marginBottom: 20,
                    display: 'inline-block',
                    fontWeight: 600,
                    fontSize: 16
                }}
            >
                &larr; Back to Home
            </Link>
            <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {/* Left: Restaurant Info and Foods */}
                <div style={{ flex: 2, minWidth: 350 }}>
                    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            width="180"
                            height="120"
                            style={{
                                borderRadius: 12,
                                objectFit: 'cover',
                                boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
                                background: '#222'
                            }}
                        />
                        <div style={{ flex: 1 }}>
                            <h1 style={{ marginBottom: 8, fontSize: 32 }}>{restaurant.name}</h1>
                            <p style={{ fontSize: 18, marginBottom: 12, color: '#bdbdbd' }}>{restaurant.description}</p>
                            <p style={{ marginBottom: 6 }}>
                                <strong>Location:</strong> {restaurant.city}
                            </p>
                            <p style={{ marginBottom: 6 }}>
                                <strong>Status:</strong>{' '}
                                <span style={{
                                    color: restaurant.isOpen ? '#4caf50' : '#f44336',
                                    fontWeight: 600
                                }}>
                                    {restaurant.isOpen ? 'Open' : 'Closed'}
                                </span>
                            </p>
                            {restaurant.rating && (
                                <p style={{ marginBottom: 6 }}>
                                    <strong>Rating:</strong>{' '}
                                    <span style={{ color: '#ffd700', fontWeight: 600 }}>
                                        {restaurant.rating} &#9733;
                                    </span>
                                </p>
                            )}
                            {restaurant.cuisine && (
                                <p style={{ marginBottom: 6 }}>
                                    <strong>Cuisine:</strong> {restaurant.cuisine}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Related Foods Section */}
                    {restaurant.foods && restaurant.foods.length > 0 && (
                        <div style={{ marginTop: 32 }}>
                            <h2 style={{ color: '#fff', marginBottom: 16 }}>Related Foods</h2>
                            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                                {restaurant.foods.map((food, idx) => {
                                    const cartItem = cart.find(item => item.name === food.name);
                                    return (
                                        <div key={idx} style={{
                                            background: '#222',
                                            borderRadius: 10,
                                            padding: 12,
                                            width: 140,
                                            textAlign: 'center',
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.13)'
                                        }}>
                                            <img
                                                src={food.image}
                                                alt={food.name}
                                                width="100"
                                                height="70"
                                                style={{
                                                    borderRadius: 8,
                                                    objectFit: 'cover',
                                                    marginBottom: 8,
                                                    background: '#333'
                                                }}
                                            />
                                            <div style={{ color: '#fff', fontWeight: 500 }}>{food.name}</div>
                                            {food.price && (
                                                <div style={{ color: '#ffd700', fontSize: 15, marginTop: 4 }}>
                                                    ${food.price}
                                                </div>
                                            )}
                                            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                                                <button
                                                    onClick={() => removeFromCart(food)}
                                                    style={{
                                                        background: '#f44336',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: 4,
                                                        padding: '2px 8px',
                                                        cursor: 'pointer',
                                                        fontWeight: 600
                                                    }}
                                                    disabled={!cartItem}
                                                >-</button>
                                                <span style={{ color: '#fff', fontWeight: 600 }}>
                                                    {cartItem ? cartItem.qty : 0}
                                                </span>
                                                <button
                                                    onClick={() => addToCart(food)}
                                                    style={{
                                                        background: '#4caf50',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: 4,
                                                        padding: '2px 8px',
                                                        cursor: 'pointer',
                                                        fontWeight: 600
                                                    }}
                                                >+</button>
                                            </div>
                                            <Link
                                                to="/cart"
                                                style={{
                                                    marginTop: 10,
                                                    display: 'inline-block',
                                                    background: '#61dafb',
                                                    color: '#222',
                                                    border: 'none',
                                                    borderRadius: 6,
                                                    padding: '6px 12px',
                                                    cursor: 'pointer',
                                                    fontWeight: 600,
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                Go to Cart
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div style={{
                    flex: 1,
                    minWidth: 220,
                    background: '#181818',
                    borderRadius: 12,
                    padding: 18,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
                    height: 'fit-content',
                    position: 'sticky',
                    top: 40
                }}>
                    <h3 style={{ color: '#fff', marginBottom: 12 }}>Cart</h3>
                    {cart.length === 0 ? (
                        <div style={{ color: '#aaa', fontSize: 15 }}>No items in cart.</div>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {cart.map((item, idx) => (
                                <li key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 10
                                }}>
                                    <span>
                                        {item.name} x{item.qty}
                                    </span>
                                    <span>
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            style={{
                                                background: '#f44336',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: 4,
                                                padding: '2px 8px',
                                                marginRight: 4,
                                                cursor: 'pointer'
                                            }}
                                        >-</button>
                                        <button
                                            onClick={() => addToCart(item)}
                                            style={{
                                                background: '#4caf50',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: 4,
                                                padding: '2px 8px',
                                                cursor: 'pointer'
                                            }}
                                        >+</button>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {cart.length > 0 && (
                        <div style={{ marginTop: 16, color: '#ffd700', fontWeight: 600 }}>
                            Total: ${cart.reduce((sum, item) => sum + (item.price || 0) * item.qty, 0).toFixed(2)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
