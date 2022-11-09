<template>
    <div class="divi">
        <v-card class="vcard" elevation="5">
            <v-img max-height="150" max-width="250" src="../assets/logo_with_text.png"></v-img>
            <v-card-subtitle class="my-text text-center title pa-1">
                LOGIN ACCOUNT
            </v-card-subtitle>
            <v-card-subtitle class="pa-1">
                This is a secure system and you will need to provide your login details to access the site.
            </v-card-subtitle>
            <p class="my-text text-center">

            </p>

            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field outlined v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                <v-text-field outlined :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show3 ? 'text' : 'password'" name="input-10-2" label="password" 
                    class="input-group--focused" @click:append="show3 = !show3">
                </v-text-field>
                
                <v-card-actions>
                    <router-link to="/dashboard" tag="button">
                        <v-btn class="sign-in" color="primary" block>
                            SIGN IN
                        </v-btn>
                    </router-link>

                </v-card-actions>

                <p class="my-text text-center">
                    term of use. privacy policy.
                </p>

            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show3: false
        }
    },
}
</script>

<style>
.vcard {
    width: 30%;
    text-align: -webkit-center;
    height: max-content;
    position: absolute;
    left: 10%;
    top: 5%;
    bottom: 5%;
    padding: 1% 4%;
    margin: auto;
}

.divi {
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-image:  url("../assets/bg-auth.png");
    background-size:contain;
    background-position: right;
}

p {
    font-size: 14px;
}

.my-text {
    color: #707070;
}

.sign-in {
    width: 100%;
}

.v-card__actions {
    display: flex;
    justify-content: center;
}
</style>

