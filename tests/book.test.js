const db = require("../db")
const Book = require("../models/book")
const app = require("../app")
const request = require("supertest")


process.env.NODE_ENV = "test"
var req = {}

describe("test different user request errors",function(){
    
    beforeEach(async function () {
        await db.query("DELETE FROM books");
        
        req = {
            "isbn": "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matthew Lane",
            "language": "english",
            "pages": 264,
            "publisher": "Princeton University Press",
            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
            "year": 2017
        };
    });

    describe("isbn issue", function(){
        
        test("ISBN not string", async function(){
            req["isbn"] = 46523445;
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.isbn is not of a type(s) string")            
        })

        
        test("ISBN too short", async function(){
            req['isbn'] = "065";
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.isbn does not meet minimum length of 5")            
        })

        
        test("ISBN too long", async function(){
            req['isbn'] = "23948473847483";
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.isbn does not meet maximum length of 12")            
        })


    });

    describe("amazon url issues", function(){
        test("url not string", async function(){
            req['amazon_url'] = 329304930;
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.amazon_url is not of a type(s) string")            
        })

        test("url too short", async function(){
            req['amazon_url'] = "no";
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.amazon_url does not meet minimum length of 3")            
        })

        test("url too long", async function(){
            req['amazon_url'] = "ddddddddddddddddddddddddddddddddddddddddddd";
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.amazon_url does not meet maximum length of 30")            
        })

    });

    describe("author issues", function(){
        test("author not string", async function(){
            req['author'] = {"author": "Jake"};
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.author is not of a type(s) string")            
        })
    })

    describe("language issues", function(){
        test("language not string", async function(){
            req['language'] = ["language"];
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.language is not of a type(s) string")            
        })
    })

    describe("pageNum issues", function(){
        test("pageNum not int", async function(){
            req['pages'] = {"pages":2};
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.pages is not of a type(s) integer")            
        })

        test("pageNum too short", async function(){
            req['pages'] = 0;
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.pages must be greater than or equal to 1")            
        })

        test("pageNum too long", async function(){
            req['pages'] = 2001;
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.pages must be less than or equal to 2000")            
        })
    })

    describe("publisher issues", function(){
        test("publisher not string", async function(){
            req['publisher'] = ["publisher"];
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.publisher is not of a type(s) string")            
        })
    })

    describe("ltitle issues", function(){
        test("title not string", async function(){
            req['title'] = ["title"];
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.title is not of a type(s) string")            
        })

        test("title too short", async function(){
            req['title'] = "no";
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.title does not meet minimum length of 3")            
        })
    })

    describe("year issues", function(){
        test("year not int", async function(){
            req['year'] = "2020";
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.year is not of a type(s) integer")            
        })

        test("year too low", async function(){
            req['year'] = 1000;
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.year must be greater than or equal to 1100")            
        })

        test("year too hi", async function(){
            req['year'] = 2030;
            let response = await request(app)
                .post("/books")
                .send(req);
            
            let message = response.body.error.message[0]
            expect(message).toEqual("instance.year must be less than or equal to 2023")            
        })
    })
})