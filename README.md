## MVC + HTMX Mini Express Server

Based off of ideas from NestJS and using MVC principles, this mini server able to act as a standalone front+backend. Featuring:

1. Serving static files
2. Customer controller wrapper for easy routing.
3. Inadverntly fell into the MVC pattern, making things feel a bit more natural.
4. All in one front end and back end. HTMX is used to make request to the data endpoints.
5. Controllers are extensible for different types of middleware, specific to that route.
6. And finally... Handlebars for templating!

WIP, but looking forward to experimenting and using this more in the future.

I also have a Go version here: https://github.com/wiiqwertyuiop/HTMX-EngineG

## How to run

After installing dependencies with `npm i`, simply use `npm run start` to start the server.