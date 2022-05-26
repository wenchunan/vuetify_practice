<template>
    <v-card flat class="card_item pa-4 mt-2 mr-2" elevation="2">
        <v-list subheader two-line color="transparent">
            <v-list-item>
                <v-list-item-avatar size="50px">
                    <v-icon class="blue-grey darken-2" color="#737e97" dark>mdi-account-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="white--text">Unknown Customer</v-list-item-title>
                    <v-list-item-subtitle class="grey--text mt-2">Tab here to add Customer</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-tabs color="#f34f64" v-model="tab1" background-color="transparent" class="order" dark grow>
            <v-tabs-slider color="#f34f64"></v-tabs-slider>
            <v-tab>Current Order</v-tab>
            <v-tab>Orders on Hold</v-tab>
        </v-tabs>
        <v-divider color="#3f495e" class="divider_tab"></v-divider>
        <v-tabs-items v-model="tab1">
            <v-tab-item>
                <v-list subheader two-line color="#323B50">
                    <v-list-item>
                        <v-list-item-content>
                             <v-list-item-title class="white--text subtitle-2">Brown Casual earrings</v-list-item-title>
                             <v-list-item-subtitle class="grey--text mt-2">earrings</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-subtitle class="grey--text ml-10">
                                1
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                             <v-list-item-title class="white--text subtitle-2">$ 87</v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider color="#3f495e" class="divider_tab"></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                             <v-list-item-title class="white--text subtitle-2">Brown Casual watch</v-list-item-title>
                             <v-list-item-subtitle class="grey--text mt-2">watch</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-subtitle class="grey--text ml-10">
                                1
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                             <v-list-item-title class="white--text subtitle-2">$ 87</v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider color="#3f495e" class="divider_tab"></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle class="grey--text">Discount</v-list-item-subtitle>
                            <v-list-item-title class="white--text subtitle-2 mt-2">Total</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-subtitle class="orange--text">-$5</v-list-item-subtitle>
                             <v-list-item-title class="green--text subtitle-2">$180</v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider color="#3f495e" class="divider_tab"></v-divider>
                    <div class="text-right mt-6 mb-6">
                        <v-btn text color="#f34f64">Delete</v-btn>
                        <v-btn color="#f34f64" dark rounded>Checkout</v-btn>
                    </div>
                </v-list>
            </v-tab-item>
            <v-tab-item>
                <v-list subheader two-line color="#323B50">
                    <v-list-item>
                        <v-list-item-content>
                             <v-list-item-title class="white--text subtitle-2">Brown Casual earrings</v-list-item-title>
                             <v-list-item-subtitle class="grey--text mt-2">earrings</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-subtitle class="grey--text ml-10">
                                1
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                             <v-list-item-title class="white--text subtitle-2">$ 87</v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider color="#3f495e" class="divider_tab"></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                             <v-list-item-title class="white--text subtitle-2">Brown Casual watch</v-list-item-title>
                             <v-list-item-subtitle class="grey--text mt-2">watch</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-item-subtitle class="grey--text ml-10">
                                1
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                             <v-list-item-title class="white--text subtitle-2">$ 87</v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider color="#3f495e" class="divider_tab"></v-divider>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle class="grey--text">Discount</v-list-item-subtitle>
                            <v-list-item-title class="white--text subtitle-2 mt-2">Total</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-list-item-subtitle class="orange--text">-$10</v-list-item-subtitle>
                             <v-list-item-title class="green--text subtitle-2">$160</v-list-item-title>
                        </v-list-item-action>
                    </v-list-item>
                    <v-divider color="#3f495e" class="divider_tab"></v-divider>
                    <div class="text-right mt-6 mb-6">
                        <v-btn text color="#f34f64">Delete</v-btn>
                        <v-btn color="#f34f64" dark rounded>Checkout</v-btn>
                    </div>
                </v-list>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        tab1: null,
    })
}
</script>
<style>
.v-tabs {
    width: 50%;
}
.v-tabs.order {
    width: 100% !important;
}
.theme--light.v-card.card_item {
    background-color: #323B50;
    color: #babec9;
}
.v-divider.divider_tab {
    height: 2px;
    max-height: 2px;
}
</style>