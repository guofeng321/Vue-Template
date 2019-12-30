<template>
    <div>
        <div class="footer_nav">
            <div @click="cut(0)" :class="{select: current == 0}">
                <i>&#xe647;</i>
                <div>首页</div>
            </div>
            <div @click="cut(1)" :class="{select: current == 1}">
                <i>&#xe73f;</i>
                <div>设备</div>
            </div>
            <div @click="cut(2)" :class="{select: current == 2}">
                <i>&#xe742;</i>
                <div>报警列表</div>
            </div>
            
            <div @click="cut(3)" :class="{select: current == 3}">
                <i>&#xe60b;</i>
                <div>我的</div>
            </div>
        </div>
    </div>
</template>

<script>
import { TabBar, Icon } from "mand-mobile";
import utils from "../assets/js/util";
export default {
    name: "footer_nav",
    components: {
        [TabBar.name]: TabBar,
        [Icon.name]: Icon
    },
    data() {
        return {
            user_id: sessionStorage.getItem("user_id"),
            //user_id:83,
            current: 0,
            arrRouter: ["", "facility", "risk", "my"],
            status: 0
        };
    },
    created() {
        this.current = sessionStorage.getItem("tab_num") || 0;
    },
    watch: {
        $route(to, from) {
            var toName = to.name;
            if (toName == 'Index') {
                this.current = 0;
            } else if(toName == 'Risk'){
                this.current = 2;
            } else if(toName == 'Facility'){
                this.current = 1;
            } else if(toName == 'My'){
                this.current = 3;
            }
        }
    },
    methods: {
        cut(index) {
            // if (index == this.current) {
            //     return;
            // }
            this.$router.push({
                path: "/" + this.arrRouter[index]
            });
            utils.setToken("tab_num", index);
            // this.current = index;
        },
    }
};
</script>

<style lang="scss" scoped>
.footer_nav {
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    border-top: 1px solid #eee;
    font-size: 14px;
    z-index: 100;
    div {
        flex: 1;
        height: 50px;
        border-right: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        i {
            margin-top: 3px;
            font-size: 20px;
            color: #999;
        }
        div {
            text-align: center;
            height: 1em;
        }
    }
    div:last-child {
        border: none;
    }
    .create {
        background-color: rgb(255, 82, 87);
        line-height: 50px;
        font-size: 30px;
        i {
            color: #fff;
            font-size: 30px;
        }
    }
    .select {
        color: #2f86f6;
        i {
            color: #2f86f6;
        }
    }
}


</style>

