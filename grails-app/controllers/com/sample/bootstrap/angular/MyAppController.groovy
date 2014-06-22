package com.sample.bootstrap.angular

class MyAppController {

    def index() { }

    def redirectToIndex (){
        redirect (uri:'/home')
    }
}
