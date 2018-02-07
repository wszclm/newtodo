new Vue({
    el: "#root",
    data: {
        title: "to-do-list",
        all: localStorage.todo?JSON.parse(localStorage.todo):[],
        con: "",
        message: "",
        status: "all",
        show: false
    },
    methods: {
        save() {
            if (!this.con) {
                this.message = "请输入内容";
                return;
            }
            this.message = "";
            var obj = {};
            obj.con = this.con;
            obj.id = new Date().getTime() + 1000 * Math.random();
            obj.title = this.con;
            obj.state = 0;
            obj.show=true;
            this.all.push(obj);
            localStorage.todo = JSON.stringify(this.all);
            this.con = "";
        },
        del(id) {
            this.all = this.all.filter(function (item) {
                if (item.id !== id) {
                    return item;
                }
            })
            localStorage.todo = JSON.stringify(this.all);
        },
        changeState(item) {
            if (item.state == 0) {
                item.state = 1
            } else {
                item.state = 0
            }
        },
        changeStatus(num) {
            this.status = num;
        },
        changeShow(item) {
            item.show = !item.show;
            localStorage.todo = JSON.stringify(this.all);
        },
    },
    computed: {
        datas(){
            return  this.all.filter((item) =>{
                if(this.status=="all"){
                    return item;
                }else{
                    if(this.status==item.state){
                        return item;
                    }
                }
            })
        }
    },

})