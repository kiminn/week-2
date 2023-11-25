import { useState } from 'react';

const OneProduct = ({ prodId, isLiked, name, price, productList, setProductList }) => {
    console.log(productList);
    console.log(productList[0]);

    const onChangeIsLiked = () => {
        const changeIsLiked = productList[0].User2.isLiked;
        if (changeIsLiked === false) {
            setProductList((prev) => {}, ...prev);
        }
    };

    // console.log(productList[0].User2.isLiked);

    return (
        <>
            <button onClick={onChangeIsLiked}>isLiked값 변경</button>
            <div></div>
        </>
    );
};

export default OneProduct;
