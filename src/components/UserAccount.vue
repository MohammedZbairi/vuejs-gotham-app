<template>
    <v-data-table :headers="headers" :items="users" sort-by="id">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title><strong>Users</strong></v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                            Add New User
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="6">
                                        <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                                    </v-col>
                                </v-row>

                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="save">
                                Save
                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this user?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn :loading="loading" color="error" text @click="deleteItemConfirm">DELETE
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <div class="text-center">
                    <v-dialog v-model="dialogView" width="375">


                        <template>
                            <v-card class="mx-auto">
                                <v-img src="../assets/avatar_1.jpg" height="220px" dark>
                                    <v-row class="fill-height">
                                        

                                        <v-card-title class="white--text pl-12 pt-12">
                                            <div class="text-h4 pl-12 pt-12">
                                                {{editedItem.username}}
                                            </div>
                                        </v-card-title>
                                    </v-row>
                                </v-img>

                                <v-list two-line>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon color="indigo">
                                                mdi-account
                                            </v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>ZBAIRI Mohammed</v-list-item-title>
                                            <v-list-item-subtitle>Full Name</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-divider inset></v-divider>
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon color="indigo">
                                                mdi-phone
                                            </v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>+33 6 96 48 44 66</v-list-item-title>
                                            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                                        </v-list-item-content>

                                        <v-list-item-icon>
                                            <v-icon>mdi-message-text</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>

                                    

                                    <v-divider inset></v-divider>

                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon color="indigo">
                                                mdi-email
                                            </v-icon>
                                        </v-list-item-icon>

                                        <v-list-item-content>
                                            <v-list-item-title>aliconnors@example.com</v-list-item-title>
                                            <v-list-item-subtitle>Personal</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>


                                    
                                </v-list>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="error" text @click="closeViewItem()">
                                    Close
                                </v-btn>
                            </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </div>
            </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
                mdi-delete
            </v-icon>
            <v-icon small @click="viewItem(item)" style="font-size: 16px; margin-left: 8px;">
                mdi-eye
            </v-icon>


        </template>

    </v-data-table>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: '#',
                align: 'start',
                value: 'id',
            },
            { text: 'Username', value: 'username' },
            { text: 'Email', value: 'email' },
            { text: 'Actions', value: 'actions', sortable: false },
        ],
        users: [],
        editedIndex: -1,
        editedItem: {
            id: '',
            username: '',
            email: '',
        },
        defaultItem: {
            username: '',
            email: '',
        },
    }),
    mounted() {
        this.getAllUsers();
        console.log(this.editedItem);
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Add new user' : 'Edit user'
        },
    },
    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },
    created() {

    },
    methods: {
        editItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
            console.log(this.editedItem.id)


        },
        deleteItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
            console.log(this.editedItem.id)
        },
        viewItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogView = true
            console.log(this.editedItem.id)
        },
        closeViewItem() {
            this.dialogView = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        deleteItemConfirm() {
            this.users.splice(this.editedIndex, 1)
            this.closeDelete()
            Vue.axios.delete("http://localhost:8080/api/user/" + this.editedItem.id, { user: this.editedItem }).then((resp) => {
                console.log(resp)
                this.getAllUsers()
            })
        },
        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        getAllUsers() {
            Vue.axios.get('http://localhost:8080/api/users').then((resp) => {
                this.users = resp.data.data;
                console.log(resp.data.data)
                console.log(this.editedItem)
            })
        },
        save() {
            if (this.editedIndex > -1) {
                Vue.axios.put("http://localhost:8080/api/user/" + this.editedItem.id, { user: this.editedItem }).then((resp) => {
                    console.log(resp)
                    this.getAllUsers()
                })


            } else {

                Vue.axios.post("http://localhost:8080/api/user/", { user: this.editedItem }).then((resp) => {
                    console.log(resp)
                    this.getAllUsers()
                })
            }
            this.close()
        },
    },
}
</script>