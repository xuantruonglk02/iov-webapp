<script setup lang="ts">
import HeaderAsideButton from './HeaderAsideButton.vue'
import HeaderNotification from './HeaderNotification.vue'
import HeaderSearchBar from './HeaderSearchBar.vue'
import HeaderUser from './HeaderUser.vue'
</script>

<template>
    <v-app-bar flat>
        <v-container class="header-ctn">
            <v-row justify="space-between" align="center">
                <v-col>
                    <HeaderAsideButton />
                </v-col>
                <v-col :span="24">
                    <HeaderSearchBar />
                </v-col>
                <v-col class="header-actions-ctn">
                    <v-container>
                        <v-row align="center">
                            <v-col>
                                <HeaderNotification />
                            </v-col>
                            <v-col>
                                <HeaderUser />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<style scoped lang="scss">
.header-ctn {
    max-width: none;
}
.v-toolbar {
    border-bottom: 1px solid $color-border-primary;
}
.header-actions-ctn {
    width: unset;
    flex: none;
}
</style>
