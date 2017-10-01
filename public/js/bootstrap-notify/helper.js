function simpleMessage(type, title, message, vertical, horizontal, icon, delay) {
    return $.notify({
        icon: icon,
        title: "<strong>" + title + ":</strong> ",
        message: message
    }, {
        delay: delay,
        type: type,
        z_index : 1050,
        allow_dismiss: true,
//        animate: {
//            enter: 'animated fadeInDown',
//            exit: 'animated fadeOutUp'
//        },
        placement: {
            from: vertical,
            align: horizontal
        },
    });
}
function staticMessage(type, title, message, vertical, horizontal, icon) {
    return $.notify({
        icon: icon,
        title: "<strong>" + title + ":</strong> ",
        message: message
    }, {
        delay:0,
        type: type,
        z_index : 1050,
        allow_dismiss: true,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        }, placement: {
            from: vertical,
            align: horizontal
        },
    });
}