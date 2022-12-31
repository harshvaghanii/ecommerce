import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({
        justifyContent: "center",
    })}
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(
                    cat
                        ? `http://localhost:4000/api/v1/products/?category=${cat}`
                        : `http://localhost:4000/api/v1/products/`
                );
                setProducts(response.data);
            } catch (error) {}
        };
        getProducts();
    }, [cat]);

    return (
        <Container>
            {popularProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </Container>
    );
};

export default Products;
