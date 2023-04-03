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
                            <form ref="form" @submit.prevent="signUp">
                                <div class="form-group">
                                    <label>Username</label>
                                    <input class="au-input au-input--full" type="text" v-model="name" placeholder="Username">
                                    <small v-if='$vuelidation.error("name")' class="form-text  text-danger">{{ $vuelidation.error('name') }}</small>
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="au-input au-input--full" type="email" v-model="email" placeholder="Email">
                                    <small v-if='$vuelidation.error("email")' class="form-text  text-danger">{{ $vuelidation.error('email') }}</small>
                                </div>
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input class="au-input au-input--full" type="tel" v-model="phone" placeholder="Phone">
                                    <small v-if='$vuelidation.error("phone")' class="form-text  text-danger">{{ $vuelidation.error('phone') }}</small>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" type="password" v-model="password" placeholder="Password">
                                    <small v-if='$vuelidation.error("password")' class="form-text  text-danger">{{ $vuelidation.error('password') }}</small>
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input class="au-input au-input--full" type="password" v-model="password_confirmation" placeholder="Confirm Password">
                                    <small v-if='$vuelidation.error("password_confirmation")' class="form-text  text-danger">{{ $vuelidation.error('password_confirmation') }}</small>
                                </div>
                                <button :disabled="processing || $vuelidation.errors()" class="au-btn au-btn--block au-btn--green m-b-20" type="submit"> {{ processing ? "Please wait" : "register" }}</button>
                            
                            </form>
                            <div class="register-link">
                                <p>
                                    Already have account?
                                    <a href="/-/login">Sign In</a>
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
    name: "RegisterView",
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
            processing: false,
            alertType: 'none',
            message: '',
            display: '',
        }
    },
    computed: {
        ...mapGetters("register", ["getResponse", "getError"]),
    },
    methods: {
        ...mapActions("register", ["register"]),  
        async signUp() {

            if (this.$vuelidation.valid()) {
                this.processing = true
                try {

                    await this.register(
                        {
                            name: this.name,
                            phone: this.phone,
                            email: this.email, 
                            password: this.password,
                            password_confirmation: this.password_confirmation
                        }
                    );
                    this.alertType = "alert-success";
                    this.message = "Registration Successful. Your detail will be reviewed and approved by admin.";
                    this.display = 'block';
                
                    if (this.getError.status == 401) {
                        this.alertType = "alert-danger";
                        this.message = this.getError.data.message;
                        this.display = 'block';
                    }
                    this.name = '';
                    this.phone = '';
                    this.email = '';
                    this.password = '';
                    this.password_confirmation = '';
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
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
            },
            password: {
                required: true,
            },
            password_confirmation: {
                required: true,
            },
        },
    },
}
</script>