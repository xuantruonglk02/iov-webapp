<script setup lang="ts"></script>

<template>
    <v-card variant="outlined">
        <v-container>
            <v-row class="mb-4" align="center" no-gutters>
                <v-avatar
                    image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="me-2"
                />
                <v-col class="title d-flex flex-column">
                    <span><b>Sale Order : SOBU-TESLA</b></span>
                    <span>Ticket No. : TN8927</span>
                </v-col>
            </v-row>
            <div class="card-img-ctn p-0 mb-4">
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
            <v-row class="my-6" no-gutters>
                <span
                    >a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
                    a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
                    a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a</span
                >
            </v-row>
            <v-row justify="space-between" no-gutters>
                <v-col>
                    <v-btn class="view-map-btn" variant="text">VIEW MAP</v-btn>
                </v-col>
                <v-col class="card-actions-ctn">
                    <v-row>
                        <v-btn variant="text" icon="mdi-chevron-right-circle-outline"></v-btn>
                        <v-btn variant="text" icon="mdi-trash-can-outline"></v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<style scoped lang="scss">
.v-card {
    width: 320px;
    border: 1px solid $color-border-main;
    border-radius: 6px;
}
.card-img-ctn {
    margin-left: -16px;
    margin-right: -16px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .card-img {
        width: 100%;
    }
}
.view-map-btn {
    color: $color-primary;
}
.card-actions-ctn {
    width: unset;
    flex: none;
}
</style>
