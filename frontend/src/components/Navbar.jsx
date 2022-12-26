import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
// Start of styled components

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: "50px",
    })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
        justifyContent: "flexStart",
        padding: "10px 0px",
    })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: "none",
    })};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({
        margin: "0px",
    })}
`;

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({
        width: "50px",
    })}
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({
        fontSize: "24px",
    })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 25px;
    align-items: center;
    ${mobile({
        justifyContent: "center",
        flex: "2",
        gap: "0px",
    })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        fontSize: "12px",
        marginLeft: "10px",
    })}
`;

// End of styled components

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search
                            style={{
                                color: "gray",
                                fontSize: "16px",
                            }}
                        />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>VAGHANI.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge
                            badgeContent={4}
                            color="primary"
                            overlap="rectangular"
                        >
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
