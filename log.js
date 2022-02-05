AFRAME.registerComponent('log',{
    schema:{
        message:{type:'', default:'hello world'}
    },
    init:function(){
        console.log(this.data.message)
    },
    update:function(){

    },
    remove:function(){

    },
    tick:function(){

    }
})