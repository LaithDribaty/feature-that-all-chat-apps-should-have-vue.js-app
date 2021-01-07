var app = new Vue({
    el: "#app",
    data: {
        messages: [
            {val: "hello" , speaker: true} , 
            {val: "Hi , how are you?" , speaker: false} ,
        ],
        numOfKeyboard1: 1 ,
        numOfKeyboard2: 1 ,        
    } ,
    methods : {
        sendPerson1( id ){
            var text = document.getElementById("tx1"+id).value;
            if(text === "")return ;
            this.messages.push({val:text+"" , speaker: false});
            document.getElementById("tx1"+id).value = "";
        },
        sendPerson2( id ){
            var text = document.getElementById("tx2"+id).value;
            if(text === "")return ;
            this.messages.push({val: text+"" , speaker: true});
            document.getElementById("tx2"+id).value = "";
        },
        changeKeyboards1( e ){
            var id = parseInt(e.target.id);
            this.numOfKeyboard1 = parseInt(e.target.value);
            var box = document.getElementById("box"+id);
            box.style.height = ( 600 + (this.numOfKeyboard1 - 1)*70 )+"px";
        },
        changeKeyboards2( e ){
            var id = parseInt(e.target.id);
            this.numOfKeyboard2 = parseInt(e.target.value);
            var box = document.getElementById("box"+id);
            box.style.height = ( 600 + (this.numOfKeyboard2 - 1)*70 )+"px";
        }
    }
});
