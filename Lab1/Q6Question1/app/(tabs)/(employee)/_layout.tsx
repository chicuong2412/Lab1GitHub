import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{
            headerShown: false
        }}></Stack.Screen>
        {/* <Stack.Screen name="UpdateScreen" options={{
            headerShown: false
        }}></Stack.Screen> */}
      </Stack>
    </>
  );
}
