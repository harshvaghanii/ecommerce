import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    text-align: center;
`;

const Desc = styled.p`
    margin: 20px 0px;
    text-align: justify;
`;

const SocialContainer = styled.div`
    display: flex;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
    text-align: center;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    text-align: center;
`;
const ListItem = styled.li`
    width: 50%;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Payment = styled.img`
    width: 50%;
    margin-left: 25%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VAGHANI.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, possimus ipsam! Fugit maxime sapiente
                    repudiandae soluta labore. Odio assumenda esse sunt vero
                    tempore accusantium, fugiat beatae enim consequuntur qui
                    corrupti? Rem quasi maiores tempora amet?
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 904, Atharva,
                    Mumbai
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 789
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />{" "}
                    contact@email.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
