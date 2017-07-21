package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func main() {
	fmt.Println("Running program")
	fmt.Println("Listening on localhost:8080")

	//Root Handler
	http.HandleFunc("/", RootHandler)

	//Start Web Server listener
	http.ListenAndServe(":8080", nil)

}

//RootHandler After receving inital "/" pattern, begin to
//Parse and send the index.html page
func RootHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("index.html")
	if err != nil {
		fmt.Println("Index Template Parse Error: ", err)
	}
	err = tmpl.Execute(w, nil)
	if err != nil {
		fmt.Println("Index Template Execution Error: ", err)
	}
}
