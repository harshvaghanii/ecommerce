const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

// ADD PRODUCT

router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    const newOrder = new Cart(req.body);

    try {
        const savedCart = await newOrder.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE CART

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL PRODUCTS

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
