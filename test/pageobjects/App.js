class App {

    openHomePage() {
        browser.url('https://www.letsdeel.com/')
    }

    openLoginPage(){
        browser.url('https://app.letsdeel.com/login')
    }

    getArgumentsFromCommand(){
        var args = process.env.npm_config_email
        return args
    }

    getCredentialsFromArguments(){
        var args = this.getArgumentsFromCommand()
        var email = args.split(',').shift()
        var password = args.split(',').pop()
        password = password.split('=').pop()
        return {'email':email,'password':password}
    }
}

export default new App