const log = text => `Text: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args){
        console.log('Calling fn ...')

        return target.apply(thisArg, args).toUpperCase()
    }
})