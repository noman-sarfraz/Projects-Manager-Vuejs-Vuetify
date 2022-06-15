<template>
  <div>
    <h1 class="subtitle-1 grey--text">Teams</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="body-1">{{ person.name }}</div>
              <div class="gray--text caption">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed small class="grey--text">
                <v-icon left small>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
            <!-- <v-action>
              <v-icon>mdi-message</v-icon>
              <span>Message</span>
            </v-action> -->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Noman', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png' }
      ]
    }
  }
}
</script>


