<script setup lang="ts">
import BaseTable from 'src/components/base/BaseTable.vue';

const headers = [
  { prop: 'invoice_no', label: 'item_no' },
  { prop: 'item_no', label: 'item_no' },
  { prop: 'item_quantity', label: 'item_quantity' },
  { prop: 'item_price', label: 'item_price' },
  { prop: 'item_discount_asdasd', label: 'item_discount_asdasd' },
  { prop: 'item_desc', label: 'item_desc' },
]
const data = [
  {
    invoice_no: 'asdasd',
    item_no: 'dsdfsd',
    item_quantity: 12,
    item_price: 23234234.333,
    item_discount_asdasd: 'asdasdasd',
    item_desc: 'aaaa a aaaaaaaa aaaaaaa aaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa aaa a a a aaaaa aaaaaaaa'
  }
]
</script>

<template>
  <BaseTable :data="data" :headers="headers" />
</template>
