package com.sample.bootstrap.angular

class MyAppController {

    def apiService

    def index() {}

    def redirectToIndex() {
        redirect(uri: '/home')
    }

    def individual() {
        println "Params: $params"
        render apiService.getPerson()
    }
}
