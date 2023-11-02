import { IconShoppingCartFilled } from '@tabler/icons-react';
import React from 'react';

export default function ShoppingCartButton() {

    return (
        <button className="btn text-light">
            <IconShoppingCartFilled />
            <span class="badge rounded-pill bg-light text-dark">0</span>
        </button>
    )
}