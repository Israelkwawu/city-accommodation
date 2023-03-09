<template>
     <div class="page-wrapper">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="CoolAdmin">
                            </a>
                        </div>
                        <div class="login-form">
                            <div :style="{ display: display }" :class="[ display == 'block' ? alertType:''  ]" class="sufee-alert alert with-close alert-dismissible fade show">
                                
                                {{ message }}
                                <button type="button" ref="close" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form ref="form" @submit.prevent="signIn">
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="au-input au-input--full" autocomplete="on" type="email" v-model="email" placeholder="Email">
                                    <small v-if='$vuelidation.error("email")' class="form-text  text-danger">{{ $vuelidation.error('email') }}</small>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" autocomplete="current-password" type="password" v-model="password" placeholder="Password">
                                    <small v-if='$vuelidation.error("password")' class="form-text  text-danger">{{ $vuelidation.error('password') }}</small>
                                </div>
                                <div class="login-checkbox">
                                    <label>
                                        <input type="checkbox" name="remember">Remember Me
                                    </label>
                                    <label>
                                        <a href="/-/reset">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button :disabled="processing || $vuelidation.errors()" class="au-btn au-btn--block au-btn--green m-b-20" type="submit"> {{ processing ? "Please wait" : "sign in" }}</button>
                            
                            </form>
                            <div class="register-link">
                                <p>
                                    Don't you have account?
                                    <a href="/-/register">Sign Up Here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "LoginView",
    
    computed: {
        ...mapGetters("authentication", ["authenticated", "user","getAuthToken", "getError"]),
    },
    data() {
        return {
            processing:false,
            email: '',
            password: '',
            message: '',
            alertType: '',
            display: 'none',
        }
    },
    methods: {
        ...mapActions("authentication", ["login"]),  
        async signIn() {

            if (this.$vuelidation.valid()) {
                this.processing = true
                try {

                    await this.login({email: this.email, password: this.password});
                    if (this.authenticated) {
                        this.alertType = "alert-success";
                        this.message = "Admin Logged In Successfully.";
                        this.display = 'block';

                        setTimeout(this.$router.push({name:'super.dashboard'}), 500);
                    
                    }else {
                        if (this.getError.status == 401) {
                            this.alertType = "alert-danger";
                            this.message = this.getError.data.message;
                            this.display = 'block';
                        }else {
                            this.alertType = "alert-danger";
                            this.message = this.getError.statusText;
                            this.display = 'block';
                        }
                    }
                } catch ({ response }) {
                    this.alertType = "alert-danger";
                    this.message = response.statusText;
                    this.display = 'block';
                } finally {
                    this.processing = false;
                }
                
            }
        },

    },
    vuelidation: {
        data: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
            },
        },
    },
    mounted() {
    
    }
}
</script>