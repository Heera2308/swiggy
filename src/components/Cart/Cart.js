import { Image, Text, Flex, Container, Box,Button } from "@chakra-ui/react";
import { Link, useOutletContext } from "react-router-dom";

export default function Cart({ image, cartHead, cartList }) {
  const { cartItems,addToCart,removeFromCart } = useOutletContext();
  // total price
  const total = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  // empty cart
  if (cartItems.length === 0) {
    return <Text>Your cart is empty</Text>;
  }

  return (
    <Container>
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Flex gap="8" alignItems="center">
          <Image
            src={image}
            alt="Swiggy logo"
            width={50}
            borderRadius={10}
          />
          <Text fontWeight="bold">{cartHead}</Text>
        </Flex>

        <Flex gap="14" fontWeight="bold" fontSize="large">
          {cartList.map((item) => (
            <Flex key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Cart Items */}
      <Box p="4">
        {cartItems.map((ci, index) => (
          <Flex
            key={index}
            justify="space-between"
            align="center"
            borderBottom="1px solid grey"
            py="3"
          >
            <Box>
              <Text fontWeight="bold">
                {ci.item.dishesName}
              </Text>

              <Text>
                ₹{ci.item.price} x {ci.quantity}
              </Text>
            </Box>

           <Flex gap="2" align="center">
  <Text>₹{ci.item.price}</Text>

  <Button
    size="sm"
    onClick={() => removeFromCart(ci.item)}
  >
    -
  </Button>

  <Text fontWeight="bold">{ci.quantity}</Text>

  <Button
    size="sm"
    onClick={() => addToCart(ci.item)}
  >
    +
  </Button>
</Flex>
 
          </Flex>
        ))}

        {/* Total */}
        <Flex justify="space-between" mt="6">
          <Text fontWeight="bold">Total</Text>
          <Text fontWeight="bold">₹{total}</Text>
        </Flex>
      </Box>
    </Container>
  );
}
