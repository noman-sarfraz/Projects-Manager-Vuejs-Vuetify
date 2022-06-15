<template>
  <div>
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">

      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(project,index) in myProjects" :key="index">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content depressed>
            <v-card>
              <v-card-text>
                <div>due by {{ project.due }} </div>
                <div> {{ project.content }} </div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

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
    computed: {
      myProjects() {
        return this.projects.filter(project => project.person === 'Noman Sarfraz')
      }
    },
    created() {
      onSnapshot(collection(db, "projects"), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            this.projects.push({...change.doc.data(), id: change.doc.id})
          }
          else if (change.type === "modified") {
            let index = -1
            this.projects.every((project, i) => {
              if(project.id === change.doc.id) {
                index = i
                return false
              }
              return true
            })
            if(index != -1) {
              this.projects[index] = change.doc.data()
            } else {
              console.log("id not found")
            }
          }

        });
      });
    }
  }
</script>