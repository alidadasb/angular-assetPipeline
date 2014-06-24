class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?" {
            constraints {
                // apply constraints here
            }
        }

        "/home"(controller: "myApp")
        "/"(controller: 'myApp', action: 'redirectToIndex')

        "500"(view: '/error')
        "/person/v1/persons/$id?" (resource: "person")

        "/api/person/$id?" (controller: 'myApp', action: 'individual')
    }
}
