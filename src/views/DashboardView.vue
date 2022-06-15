<template>
  <div>
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn depressed small class="grey--text" @click="orderBy('title')" slot="activator" v-on="on">
              <v-icon left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project names</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn depressed small class="grey--text" @click="orderBy('person')" slot="activator" v-on="on">
              <v-icon left>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person names</span>
        </v-tooltip>
      </v-layout>

      <v-card v-for="(project, index) in projects" :class="`body-1 project ${project.status}`" flat :key="index">
        <v-layout row wrap class="pa-5 ma-0">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div>
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>

          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>


    </v-container>

  </div>
</template>

<script>
import db from '@/fb'
import { collection, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    orderBy(prop) {
      return this.projects.sort((a,b) => a[prop] > b[prop] ? 1 : -1 )
    }
  },
  created() {
    onSnapshot(collection(db, "projects"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.projects.push({...change.doc.data(), id: change.doc.id})
        } 
      });
    });
    
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3CD1C2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3CD1C2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}

</style>