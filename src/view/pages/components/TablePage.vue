<script setup lang="ts">
import BaseTable from 'src/components/base/BaseTable.vue';

const data = [
  {
    invoice_no: 'asdasd',
    item_no: 'dsdfsd',
    item_quantity: 12,
    item_price: 23234234.333,
    item_discount_asdasd: 'asdasdasd',
    item_desc: 'aaaa a aaaaaaaa aaaaaaa aaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa aaa a a a aaaaa aaaaaaaa'
  },
  {
    invoice_no: 'asdasd',
    item_no: 'dsdfsd',
    item_quantity: 12,
    item_price: 23234234.333,
    item_discount_asdasd: 'asdasdasd',
    item_desc: 'aaaa a aaaaaaaa aaaaaaa aaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa aaa a a a aaaaa aaaaaaaa'
  },
  {
    invoice_no: 'asdasd',
    item_no: 'dsdfsd',
    item_quantity: 12,
    item_price: 23234234.333,
    item_discount_asdasd: 'asdasdasd',
    item_desc: 'aaaa a aaaaaaaa aaaaaaa aaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa aaa a a a aaaaa aaaaaaaa'
  },
]
</script>

<template>
  <BaseTable :data="data" />
</template>
