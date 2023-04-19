<template>
            <!-- Contact Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h1 class="mb-3">Contact Us</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            </div>
            <div class="row g-4">
                <div class="col-12">
                    <div class="row gy-4">
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style="border: 1px dashed rgba(0, 185, 142, .3)">
                                    <div class="icon me-3" style="width: 45px; height: 45px;">
                                        <i class="fa fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <span>123 Street, New York, USA</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style="border: 1px dashed rgba(0, 185, 142, .3)">
                                    <div class="icon me-3" style="width: 45px; height: 45px;">
                                        <i class="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <span>info@cityaccomodation.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="bg-light rounded p-3">
                                <div class="d-flex align-items-center bg-white rounded p-3" style="border: 1px dashed rgba(0, 185, 142, .3)">
                                    <div class="icon me-3" style="width: 45px; height: 45px;">
                                        <i class="fa fa-phone-alt text-primary"></i>
                                    </div>
                                    <span>+233 24 813 2216</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <iframe class="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style="min-height: 400px; border:0;" allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
                <div class="col-md-6">
                    <div class="wow fadeInUp" data-wow-delay="0.5s">
                        <p class="mb-4">Have a question? Send us a message, we are happy to respond to your enquiries.</p>
                        <div :style="{ display: display }" :class="[ display == 'block' ? alertType:''  ]" class="sufee-alert alert with-close alert-dismissible fade show">
                                
                            {{ response }}
                            <button type="button" ref="close" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form ref="form"  @submit.prevent="sendMail">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="name" id="name" placeholder="Your Name">
                                        <small v-if='$vuelidation.error("name")' class="form-text  text-danger">{{ $vuelidation.error('name') }}</small>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" v-model="email" id="email" placeholder="Your Email">
                                        <small v-if='$vuelidation.error("email")' class="form-text  text-danger">{{ $vuelidation.error('email') }}</small>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="tel" class="form-control" v-model="phone" id="phone" placeholder="+233 12 345 6789">
                                        <small v-if='$vuelidation.error("phone")' class="form-text  text-danger">{{ $vuelidation.error('phone') }}</small>
                                        <label for="subject">Your Phone Number (+233 12 345 6789)</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" v-model="subject" id="subject" placeholder="Subject">
                                        <small v-if='$vuelidation.error("subject")' class="form-text  text-danger">{{ $vuelidation.error('subject') }}</small>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" v-model="message" placeholder="Leave a message here" id="message" style="height: 150px"></textarea>
                                        <small v-if='$vuelidation.error("message")' class="form-text  text-danger">{{ $vuelidation.error('message') }}</small>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button :disabled="processing || $vuelidation.errors()" class="btn btn-primary w-100 py-3" type="submit">{{ processing ? "Please wait" : "Send Message" }}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "Contact",
    computed: {
        ...mapGetters("send_mail", ["getResponse", "getError"]),
    },
    data() {
        return {
            processing: false,
            response: '',
            alertType: '',
            display: 'none',
            name: '',
            email: '',
            message: '',
            phone: '',
            subject: '',
        }
    },

    methods: {
        ...mapActions("send_mail", ["send"]),  
        async sendMail() {
            if (this.$vuelidation.valid()) {
                this.processing = true;
                try {

                    await this.send({
                        email: this.email, 
                        name: this.name,
                        message: this.message,
                        phone: this.phone,
                        subject: this.subject,
                    });
                
                    this.alertType = "alert-success";
                    this.response = "Your Enquiry was sent Successfully!.";
                    this.display = 'block'; 
                    this.name = '';
                    this.phone = '';
                    this.email = '';
                    this.message = '';
                    this.subject = '';
                } catch ({ response }) {
                    this.alertType = "alert-danger";
                    this.response = response.statusText;
                    this.display = 'block';
                } finally {
                    this.processing = false;
                }
            }
        }
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
            subject: {
                required: true,
            },
            message: {
                required: true,
            },
        
        },
    },
}
</script>