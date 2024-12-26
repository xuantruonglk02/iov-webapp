<script setup lang="ts"></script>

<template>
  <v-card style="width: 340px">
    <v-row align="center" no-gutters>
      <v-avatar
        image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="me-2"
      />
      <v-col class="title d-flex flex-column">
        <span>Sale Order : SOBU-TESLA</span>
        <span>Ticket No. : TN8927</span>
      </v-col>
    </v-row>
    <div class="p-0">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="card-img"
      />
    </div>
    <v-row no-gutters>
      <v-col class="d-flex flex-column">
        <span>70-1220</span>
        <span>3/22/2023 2:10:00 PM</span>
      </v-col>
    </v-row>
    <v-row no-gutters>
        <span>a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a</span>
    </v-row>
    <v-row justify="space-between" no-gutters>
      <v-col>
        <v-btn variant="text">VIEW MAP</v-btn>
      </v-col>
      <v-col>
        <v-row>
          <v-btn variant="text" icon="$vuetify"></v-btn>
          <v-btn variant="text" icon="$vuetify"></v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped lang="scss">
.v-card {
  & > .v-row {
    padding: $padding-card;
  }
}

.card-img {
  width: 100%;
}
</style>