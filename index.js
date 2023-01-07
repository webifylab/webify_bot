const TelegramAPI = require('node-telegram-bot-api')
const token = '5940332029:AAG5Of0J2iHDsO1QhzadOu-yNhWEYEbG9zE'
const base_url = 'https://63b9d62456043ab3c7906e37.mockapi.io/api/v1'


const bot = new TelegramAPI(token, {polling: true})

const offers = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Сотрудничество', callback_data: 'cooperation'}, {text: 'Проект', callback_data: 'project'}],
        ]
    })
}


const services = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Создание сайтов на тильда', callback_data: 'tilda'}],
            [{text: 'Создание сайтов на wordpress', callback_data: 'wordpress'}],
            [{text: 'Создание сайтов на webflow', callback_data: 'webflow'}],
            [{text: 'Создание дизайнов сайтов и мобильных приложений', callback_data: 'design'}],
            [{text: 'Разработка сайтов', callback_data: 'developing'}],
        ]
    })
}

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие.'},
    {command: '/about', description: 'Узнать о нас подробнее.'},
])

bot.on('message', (msg) => {
    const text = msg.text
    const chatId = msg.chat.id
    if(text === '/start'){
        bot.sendMessage(
            chatId, 
            `Привет👋\nМы веб студия которая занимается веб услугами такими как:\n1. Сайты на tilda и wordpress.\n2. Разработка сайтов.\n3. Создание дизайнов сайтов и мобильных приложений.\nP.S: СКОРО ДОБАВИМ И BACKEND РАЗРАБОТКУ😉.`,
            offers
        )
    }else{
        bot.sendMessage(
            chatId,
            'Спасибо за предложение, менеджер рассмотрит ваше предложение и ответит вам в личный чат течении сутки😁.'
        )
        
        bot.sendMessage(
            '1355319786',
            `${text}\n\nНаписал(-а): @${msg.chat.username}`
        )
    }
})

bot.on('callback_query', msg => {
    const data = msg.data
    const chatId = msg.message.chat.id
    if(data === 'project'){
        bot.sendMessage(chatId, 'Какую услугу вы хотите приобрести?', services)
    }else if(data === 'cooperation'){
        bot.sendMessage(chatId, 'Вы напишите ваше предложение, и через некоторое время вам менеджер ответит☺️.')
    }
})

bot.on('callback_query', msg => {
    const data = msg.data
    const chatId = msg.message.chat.id
    if(data === 'wordpress' ){
        bot.sendMessage(chatId, `Напишите нашей wordpress сборщице: @a1marina`)
    }else if(data === 'tilda'){
        bot.sendMessage(chatId, `Напишите нашему тильда сборщику: @anton_webdesign`)
        bot.rout
    }else if(data === 'webflow'){
        bot.sendMessage(chatId, `Напишите нашей webflow сборщице: @a1marina`)
    }else if(data === 'design'){
        bot.sendMessage(chatId, `Напишите нашему дизайнеру: @anton_webdesign`)
    }else if(data === 'developing'){
        bot.sendMessage(chatId, `Напишите нашему разработчику: @sattarzanov`)
    }
})

