<script setup>
import { updates } from '../data/updates'
</script>

<template>
  <ol class="timeline">
    <li v-for="update in updates" :key="update.date">
      <time>{{ update.date }}</time>
      <p>
        <template v-for="(item, index) in update.items" :key="item">
          {{ index + 1 }}. {{ item }}<br v-if="index < update.items.length - 1" />
        </template>
      </p>
    </li>
  </ol>
</template>
