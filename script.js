class Message {
    constructor(time,name,  text) {
        this.time = time 
        this.name = name
        this.text = text
    }

    toString() {
         console.log(`${this.time} ${this.name} :${this.text}`)
    }
}

class Messenger {

    constructor() {
        this.messages = []
    }

    show_history() {
        this.messages.map(message => message.toString())
    }

    send(author, text) {
        let message = new Message(new Date().getHours() + ':' + new Date().getMinutes(),author,text  )
        this.messages.push(message)
    }
}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()