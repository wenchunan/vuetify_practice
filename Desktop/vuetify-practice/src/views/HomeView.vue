<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Sidebar/>
    <v-container fluid class="pa-0">
      <v-app-bar dark color="transparent" flat>
        <v-tabs color="#f34f64" v-model="tab">
          <v-tabs-slider color="#f34f64"></v-tabs-slider>
          <v-tab class="withoutupercase">necklace</v-tab>
          <v-tab class="withoutupercase">earrings</v-tab>
          <v-tab class="withoutupercase">watch</v-tab>
        </v-tabs>

      </v-app-bar>
      <v-card tile color="#323B50" class="my-2 card_global">
        <v-row>
          <v-col cols="12" sm="8">
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card flat class="card_item pa-2">
                  <v-row>
                    <v-col cols="12" sm="3" v-for="(necklace, i) in necklaces" :key="i">
                      <v-hover v-slot="{hover}" close-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}" class="mx-auto" height="250" tile color="#333c51" align="center">
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn tile small :color="hover ? '#f34f64' : '#777D8b'" dark>
                              {{ necklace.prix}}
                            </v-btn>
                          </v-card-actions>
                          <v-img :src="necklace.avatar" width="150" height="150"></v-img>
                          <v-card-text :class="hover ? 'red--text' : 'white--text'">
                            {{ necklace.title }}
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>

                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat class="card_item pa-2">
                  <v-row>
                    <v-col cols="12" sm="3" v-for="(earring, i) in earrings" :key="i">
                      <v-hover v-slot="{hover}" close-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}" class="mx-auto" height="250" tile color="#333c51" align="center">
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn tile small :color="hover ? '#f34f64' : '#777D8b'" dark>
                              {{ earring.prix}}
                            </v-btn>
                          </v-card-actions>
                          <v-img :src="earring.avatar" width="150" height="150"></v-img>
                          <v-card-text :class="hover ? 'red--text' : 'white--text'">
                            {{ earring.title }}
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat class="card_item pa-2">
                  <v-row>
                    <v-col cols="12" sm="3" v-for="(watch, i) in watches" :key="i">
                      <v-hover v-slot="{hover}" close-delay="200">
                        <v-card :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}" class="mx-auto" height="250" tile color="#333c51" align="center">
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn tile small :color="hover ? '#f34f64' : '#777D8b'" dark>
                              {{ watch.prix}}
                            </v-btn>
                          </v-card-actions>
                          <v-img :src="watch.avatar" width="150" height="150"></v-img>
                          <v-card-text :class="hover ? 'red--text' : 'white--text'">
                            {{ watch.title }}
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>

                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
          <v-col cols="12" sm="4">
              <Payment/>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Payment from '../components/Payment.vue'
export default {
  data: () => ({
    tab: null,
    necklaces: [
      {
        avatar: '1.png',
        prix: '$80',
        title: 'Style one Necklace'
      },
      {
        avatar: '2.png',
        prix: '$72',
        title: 'Style two Necklace'
      },
      {
        avatar: '3.png',
        prix: '$52',
        title: 'Style three Necklace'
      },
      {
        avatar: '4.png',
        prix: '$62',
        title: 'Style four Necklace'
      },
      {
        avatar: '5.png',
        prix: '$80',
        title: 'Style five Necklace'
      },
      {
        avatar: '6.png',
        prix: '$92',
        title: 'Style six Necklace'
      },
      {
        avatar: '7.png',
        prix: '$102',
        title: 'Style seven Necklace'
      },
      {
        avatar: '8.png',
        prix: '$52',
        title: 'Style eight Necklace'
      }
    ],
    earrings: [
      {
        avatar: '01.png',
        prix: '$72',
        title: 'Style one Earring'
      },
       {
        avatar: '02.png',
        prix: '$72',
        title: 'Style two Earring'
      },
      {
        avatar: '03.png',
        prix: '$72',
        title: 'Style three Earring'
      },
      {
        avatar: '04.png',
        prix: '$72',
        title: 'Style four Earring'
      },
      {
        avatar: '05.png',
        prix: '$72',
        title: 'Style five Earring'
      },
      {
        avatar: '06.png',
        prix: '$72',
        title: 'Style six Earring'
      },
      {
        avatar: '07.png',
        prix: '$72',
        title: 'Style seven Earring'
      },
      {
        avatar: '08.png',
        prix: '$72',
        title: 'Style eight Earring'
      }
    ],
    watches: [
      {
        avatar: 'b1.png',
        prix: '$72',
        title: 'Style one Watch'
      },
       {
        avatar: 'b2.png',
        prix: '$72',
        title: 'Style two Watch'
      },
      {
        avatar: 'b3.png',
        prix: '$72',
        title: 'Style three Watch'
      },
      {
        avatar: 'b4.png',
        prix: '$72',
        title: 'Style four Watch'
      },
      {
        avatar: 'b5.png',
        prix: '$72',
        title: 'Style five Watch'
      },
      {
        avatar: 'b6.png',
        prix: '$72',
        title: 'Style six Watch'
      },
      {
        avatar: 'b7.png',
        prix: '$72',
        title: 'Style seven Watch'
      },
      {
        avatar: 'b8.png',
        prix: '$72',
        title: 'Style eight Watch'
      }
    ]
  }),
  components: {
    Sidebar,
    Payment 
  }
}
</script>

<style>
.v-card.card_global {
  height: 880px;
}
</style>
