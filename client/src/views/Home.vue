<script setup lang="ts">
import { getHello } from "../api";

const testConnection = async () => {
  const response = await getHello();
  console.log(response);

  if (response.status === 200) {
    alert("Connection Successful!");
  } else {
    alert("Connection Failed!");
  }
};
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <button @click="testConnection()">Test Connection</button>
  </div>
</template>

<style scoped lang="scss"></style>
