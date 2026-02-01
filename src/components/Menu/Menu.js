import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Menu({
    menubutton1,
    menubutton2,
    menutext,
    dishes,
    addToCart,
    cartItems, removeFromCart
}) {
    return (
        <div>
            <Text textAlign="center" m="2">
                M E N U
            </Text>

            <Box textAlign="center" bg="grey" p={4} borderRadius="10px">
                Search for dishes
            </Box>

            <HStack gap="6" m="2">
                <Button
                    color="green"
                    borderRadius="16px"
                    border="1px solid grey"
                    bg="white"
                >
                    {menubutton1}
                </Button>

                <Button
                    borderRadius="16px"
                    bg="white"
                    border="1px solid grey"
                    color="black"
                >
                    {menubutton2}
                </Button>
            </HStack>

            <div style={{ borderBottom: "2px solid grey" }}></div>

            <Text>{menutext}</Text>

            <div>
                {dishes.map((item, i) => {
                    // find item in cart
                    const cartItem = cartItems.find(
                        (ci) => ci.item.id === item.id
                    );

                    const quantity = cartItem ? cartItem.quantity : 0;

                    return (
                        <div key={i}>
                            <Flex justifyContent="space-between" p="2">
                                <div>
                                    <Text fontWeight="bold" color="grey">
                                        {item.dishesName}
                                    </Text>

                                    <Text fontWeight="bold">₹{item.price}</Text>
                                </div>

                                <Box position="relative" width="120px" mb="4">
                                    <Image
                                        src={item.menuImage}
                                        alt={item.dishesName}
                                        width="120px"
                                        height="120px"
                                        objectFit="cover"
                                    />

                                    {quantity === 0 ? (
                                        <Button
                                            position="absolute"
                                            bottom="-10px"
                                            left="20%"
                                            color="green"
                                            bg="white"
                                            border="1px solid grey"
                                            fontWeight="bold"
                                            borderRadius="8px"
                                            onClick={() => addToCart(item)}
                                        >
                                            ADD
                                        </Button>
                                    ) : (
                                        <Flex
                                            position="absolute"
                                            bottom="-10px"
                                            left="15%"
                                            gap="2"
                                            align="center"
                                            bg="white"
                                            p="1"
                                            borderRadius="8px"
                                            border="1px solid grey"
                                        >
                                            <Button size="sm" onClick={() => removeFromCart(item)}>
                                                -
                                            </Button>


                                            <Text fontWeight="bold">{quantity}</Text>

                                            <Button
                                                size="sm"
                                                onClick={() => addToCart(item)}
                                            >
                                                +
                                            </Button>
                                        </Flex>
                                    )}
                                </Box>
                            </Flex>

                            <div style={{ borderBottom: "2px solid grey" }}></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
