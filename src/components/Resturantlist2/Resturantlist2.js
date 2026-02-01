import {  Flex, NativeSelect, Text } from '@chakra-ui/react';
import React from 'react';

export default function Resturantlist2({ headeroflist2, selectCategories }) {
  return (
    <div>
      <Flex align="flex-start">
        <Text fontWeight="bold" fontSize="lg">{headeroflist2}</Text>
      </Flex>

      <NativeSelect.Root width="100px" >
  <NativeSelect.Field placeholder="Sort by">
    {selectCategories.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ))}
  </NativeSelect.Field>
</NativeSelect.Root>


    </div>
  );
}
