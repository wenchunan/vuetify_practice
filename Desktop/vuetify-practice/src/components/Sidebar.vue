<template>
<v-navigation-drawer v-model="drawer" app dark color="#323B50" mini-variant mini-variant-width="90">
    <v-avatar class="d-block text-center mx-auto mt-4 border_img" size="40">
        <img style="object-fit: cover" src="https://i.guim.co.uk/img/media/a428c42ecd6e422dac761628a4c32ae6cddad5af/0_223_6720_4033/master/6720.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=2027894e7e0cf86a4571e0cf8dc32dc5" alt="">
    </v-avatar>
    <v-list flat class="mt-5">
        <v-list-item-group v-model="selectItem">
            <v-list-item v-for="(item, i) in items" :key="i" active-class="border" v-slot="{active}" :ripple="false">
                <v-list-item-icon>
                    <div :class="active ? 'a' : '' "></div>
                    <v-icon v-text="item.icon" :color="active ? '#F34F64' : '#778290' "></v-icon>
                </v-list-item-icon>

            </v-list-item>
        </v-list-item-group>
    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        selectItem: 3,
        drawer: null,
        items: [
            { icon: 'mdi-laptop' },
            { icon: 'mdi-tag-outline' },
            { icon: 'mdi-shopping-outline' },
            { icon: 'mdi-wallet-travel' },
            { icon: 'mdi-apps' },
            { icon: 'mdi-text-box-multiple-outline'}
        ]
    })
}
</script>

<style>
.a {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(-50%, -50%);
    height: 18px;
    width: 12px;
    border-radius: 0px 150px 150px 0px;
    background-color: #f34f64;
}
</style>