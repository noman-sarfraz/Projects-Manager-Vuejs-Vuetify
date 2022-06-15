<template>
  <v-dialog max-width="500" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn class="success" v-on="on">
        Add new Project
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        Add a new Project
      </v-card-title>

      <v-card-text>
        <v-form ref="form" class="px-3">
          <v-text-field label="Project title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules">
          </v-text-field>
          <v-textarea label="information" v-model="information" prepend-icon="mdi-pencil" :rules="inputRules">
          </v-textarea>

          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-bind="attrs" :value="formattedDate" label="Due Date" prepend-icon="mdi-calendar" v-on="on"
                :rules="inputRules" readonly></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn depressed class="success mt-3" :loading="loading" @click="submit">Add Project</v-btn>
        </v-form>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import { parseISO } from 'date-fns/esm/fp'
import db from '@/fb'
import { collection, addDoc } from "firebase/firestore";


export default {
  data() {
    return {
      title: '',
      information: '',
      due: null,
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false,
    }
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true
        const project = {
          title: this.title,
          content: this.information,
          due: format(parseISO(this.due), 'dd MMM yyyy'),
          person: 'Noman Sarfraz',
          status: 'ongoing'
        }        


        addDoc(collection(db, "projects"), project)
          .then(() => {
            this.loading = false
            this.dialog = false
            // empty the input fields
            this.title = ''
            this.information = ''
            this.due = ''
            this.$emit('projectAdded') })
          .catch(err => console.log("error while adding doc: ", err))

      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), 'dd MMM yyyy') : ''
    }
  }
}
</script>