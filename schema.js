module.exports = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "isbn",
        "amazon_url",
        "author",
        "language",
        "pages",
        "publisher",
        "title",
        "year"
    ],
    "properties": {
        "isbn": {
            "type": "string",
            "minLength": 5,
            "maxLength": 12,
            "default": "",
            "title": "The isbn Schema",
            "examples": [
                "0691161518"
            ]
        },
        "amazon_url": {
            "type": "string",
            "minLength": 3,
            "maxLength": 30,
            "title": "The amazon_url Schema",
            "examples": [
                "http://a.co/eobPtX2"
            ]
        },
        "author": {
            "type": "string",
            "default": "",
            "title": "The author Schema",
            "examples": [
                "Matthew Lane"
            ]
        },
        "language": {
            "type": "string",
            "default": "",
            "title": "The language Schema",
            "examples": [
                "english"
            ]
        },
        "pages": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2000,
            "title": "The pages Schema",
            "examples": [
                264
            ]
        },
        "publisher": {
            "type": "string",
            "default": "",
            "title": "The publisher Schema",
            "examples": [
                "Princeton University Press"
            ]
        },
        "title": {
            "type": "string",
            "minLength": 3,
            "title": "The title Schema",
            "examples": [
                "Power-Up: Unlocking the Hidden Mathematics in Video Games"
            ]
        },
        "year": {
            "type": "integer",
            "minimum": 1100,
            "maximum":2023,
            "title": "The year Schema",
            "examples": [
                2017
            ]
        }
    },
    "examples": [{
        "isbn": "0691161518",
        "amazon_url": "http://a.co/eobPtX2",
        "author": "Matthew Lane",
        "language": "english",
        "pages": 264,
        "publisher": "Princeton University Press",
        "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
        "year": 2017
    }]
}