<template>
    <!-- HEADER DESKTOP-->
    <header class="header-desktop">
        <div class="section__content section__content--p30">
            <div class="container-fluid">
                <div class="header-wrap">
                    <form class="form-header" action="" method="POST">
                        <input class="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                        <button class="au-btn--submit" type="submit">
                            <i class="zmdi zmdi-search"></i>
                        </button>
                    </form>
                    <div class="header-button">
                        <div class="noti-wrap">
                          <!--  <div class="noti__item js-item-menu">
                                <i class="zmdi zmdi-comment-more"></i>
                                <span class="quantity">1</span>
                                <div class="mess-dropdown js-dropdown">
                                    <div class="mess__title">
                                        <p>You have 2 news message</p>
                                    </div>
                                    <div class="mess__item">
                                        <div class="image img-cir img-40">
                                            <img src="images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                        </div>
                                        <div class="content">
                                            <h6>Michelle Moreno</h6>
                                            <p>Have sent a photo</p>
                                            <span class="time">3 min ago</span>
                                        </div>
                                    </div>
                                    <div class="mess__item">
                                        <div class="image img-cir img-40">
                                            <img src="images/icon/avatar-04.jpg" alt="Diane Myers" />
                                        </div>
                                        <div class="content">
                                            <h6>Diane Myers</h6>
                                            <p>You are now connected on message</p>
                                            <span class="time">Yesterday</span>
                                        </div>
                                    </div>
                                    <div class="mess__footer">
                                        <a href="#">View all messages</a>
                                    </div>
                                </div>
                            </div>
                            <div class="noti__item js-item-menu">
                                <i class="zmdi zmdi-email"></i>
                                <span class="quantity">1</span>
                                <div class="email-dropdown js-dropdown">
                                    <div class="email__title">
                                        <p>You have 3 New Emails</p>
                                    </div>
                                    <div class="email__item">
                                        <div class="image img-cir img-40">
                                            <img src="images/icon/avatar-06.jpg" alt="Cynthia Harvey" />
                                        </div>
                                        <div class="content">
                                            <p>Meeting about new dashboard...</p>
                                            <span>Cynthia Harvey, 3 min ago</span>
                                        </div>
                                    </div>
                                    <div class="email__item">
                                        <div class="image img-cir img-40">
                                            <img src="images/icon/avatar-05.jpg" alt="Cynthia Harvey" />
                                        </div>
                                        <div class="content">
                                            <p>Meeting about new dashboard...</p>
                                            <span>Cynthia Harvey, Yesterday</span>
                                        </div>
                                    </div>
                                    <div class="email__item">
                                        <div class="image img-cir img-40">
                                            <img src="images/icon/avatar-04.jpg" alt="Cynthia Harvey" />
                                        </div>
                                        <div class="content">
                                            <p>Meeting about new dashboard...</p>
                                            <span>Cynthia Harvey, April 12,,2018</span>
                                        </div>
                                    </div>
                                    <div class="email__footer">
                                        <a href="#">See all emails</a>
                                    </div>
                                </div>
                            </div> -->
                            <div  @click.stop="toggleNotificationDropdown = !toggleNotificationDropdown" :class="{ 'show-dropdown': toggleNotificationDropdown }" class="noti__item js-item-menu">
                                <i class="zmdi zmdi-notifications"></i>
                                <span class="quantity">{{ numberOfNotifications + broadcastCount }}</span>
                                <div class="notifi-dropdown js-dropdown">
                                    <div class="notifi__title">
                                        <p>You have {{ numberOfNotifications + broadcastCount }} Notifications</p>
                                    </div>
                                    <div @click="markAsRead({ id: notification.id, request:notification }, index)" class="notifi__item" v-for="(notification, index) in getNotifications.slice(0,3)" :key="index">
                                        <div class="bg-c1 img-cir img-40">
                                            <i class="zmdi zmdi-email-open"></i>
                                        </div>
                                        <div class="content">
                                            <p>{{ notification.data.title }}</p>
                                            <span class="date">{{ new Date(notification.data.datetime).toDateString() }}</span>
                                        </div>
                                    </div>
                                    <div class="notifi__footer">
                                        <a href="/super/notifications">All notifications</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="account-wrap">
                            <div @click.stop="toggleProfileDropdown = !toggleProfileDropdown" :class="{ 'show-dropdown': toggleProfileDropdown }" class="account-item clearfix js-item-menu">
                                <div class="image">
                                    <img src="https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png" alt="John Doe" />
                                </div>
                                <div class="content">
                                    <a class="js-acc-btn" href="#">{{ user.name }}</a>
                                </div>
                                <div class="account-dropdown js-dropdown">
                                    <div class="info clearfix">
                                        <div class="image">
                                            <a href="#">
                                                <img src="https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png" alt="John Doe" />
                                            </a>
                                        </div>
                                        <div class="content">
                                            <h5 class="name">
                                                <a href="#">{{ user.name }}</a>
                                            </h5>
                                            <span class="email">{{ user.email}}</span>
                                        </div>
                                    </div>
                                    <div class="account-dropdown__body">
                                        <!-- <div class="account-dropdown__item">
                                            <a href="#">
                                                <i class="zmdi zmdi-account"></i>Account</a>
                                        </div> -->
                                        <div class="account-dropdown__item">
                                            <a href="/super/settings">
                                                <i class="zmdi zmdi-settings"></i>Setting</a>
                                        </div>
                                    </div>
                                    <div class="account-dropdown__footer">
                                        <a @click="signOut" href="#">
                                            <i class="zmdi zmdi-power"></i>Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- HEADER DESKTOP-->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import store from "../../../store/index";
export default {
    name: "TheDesktopHeader",
    data() {
        return {
            app_name: process.env.MIX_APP_NAME,
            toggleProfileDropdown: false,
            toggleNotificationDropdown: false,
            broadcastCount: 0,
        }
    },
    computed: {
        ...mapGetters("authentication", ["authenticated", "user","getAuthToken", "getError"]),
        ...mapGetters("super_notification", ["getNotifications", "getResponse" , "getError"]),
        numberOfNotifications() {
            return this.getNotifications.length;
        }

    },
    methods: {
        ...mapActions("authentication", ["logout"]),
        ...mapActions("super_notification", ["getAllNotification", "updateNotification"]),   
        async signOut() {
            await this.logout();

            if (!this.authenticated) {
                this.$router.push({name:'private.login'})
            }
        },

        async markAsRead(payload, index) {
            await this.updateNotification(payload);

            if (this.getResponse.data.status) {
                this.$router.push({name:'super.notifications'}).catch(() => {
                    this.getNotifications.splice(index, 1);
                });
            }
        },

        notificationBroadcast() {
            const admin_id = store.getters['authentication/user'].id;
            window.Echo.private('App.Models.Admin.' + admin_id)
            .notification((notification) => {
                this.broadcastCount++;
                // console.log(notification);
            });
        },

    },

    mounted() {
        this.getAllNotification();
        this.notificationBroadcast();
    }
}
</script>