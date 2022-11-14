function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}//возвращает текущее (на момент вызова) время

class Message {
    author;
    time;
    textMessage;
    constructor(author, textMessage){
        this.author = author;
        this.time = gettime();
        this.textMessage = textMessage;
    }
    toString(){
        return `${this.time} ${this.author}: ${this.textMessage}`;//метод toString,возвращающий всю информацию о сообщении в виде одной строки в формате: <время> <автор>: <текст>
    }
}
class Messenger{
    sms = [];
    show_history(){
        this.sms.forEach(textMessage => {
            console.log(textMessage.toString());
        });
    }
    send(author, textMessage){
        this.sms.push(new Message(author, textMessage));
    }
    
}

let messenger = new Messenger();
messenger.send('Медина', 'Первое сообщение');
messenger.send('Мехри', 'Второе сообщение');
messenger.show_history();

//10:21 Медина: Первое сообщение
//10:21 Мехри: Второе сообщение