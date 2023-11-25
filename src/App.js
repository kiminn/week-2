import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import OneProduct from './one-product';

function App() {
    const [productList, setProductList] = useState([
        {
            prodId: 1,
            place: '서울시 역삼구',
            isLiked: false,
            name: '구멍난 양말',
            price: 500000,
            User: {
                nickname: 'zl존성용123',
            },
            User2: {
                prodId: 2,
                place: '서울시 역삼구',
                isLiked: false,
                name: '구멍난 양말',
                price: 500000,
                User: {
                    nickname: 'zl존성용123',
                },
            },
        },
    ]);

    console.log(productList);

    return (
        productList &&
        productList.map((product, index) => (
            <OneProduct
                key={index}
                prodId={product.prodId}
                isLiked={product.isLiked}
                name={product.name}
                price={product.price}
                productList={productList}
                setProductList={setProductList}
            />
        ))
    );
}

export default App;
