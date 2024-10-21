Rules for consuming API
1) THEY decide the endpoints
2) THEY decide HOW data sent - JSON or XML
3) THEY decide how MUCH data - everything or one thing
4) THEY decide what the data looks like

Rules for building API
1) WE decide the endpoints
2) WE decide HOW data sent - JSON or XML
3) WE decide how MUCH data - everything or one thing
4) WE decide what the data looks like

Your boss says:

RESTRICTIONS
Routes must be
/api/items
/api/items/<unique identifier>

DATA 
{
    id: Number,
    description: String,
    is_complete: Boolean
}

MUST BE CRUD FUNCTIONAL!

Read
1) Route - /api/items, GET method
1.5) Get data from DB
2) JSON
3) Everything back
4) Array of objects

Create
1) Route - /api/items, POST method
1.5) Get data from client
1.75) DB sends something back
2) JSON -> client
3) Send back one thing 
4) One object - DATA receipt from database

Delete
1) Route - /api/items/<unique>, DELETE method
2) JSON
3) Send back one thing - wht was deleted
4) One object

Update
1) Route - /api/items/<unique>, PUT method
1.5) What are we updating
2) JSON
3) Send back one thing - updated is_complete
4) Send back an object or just the is_complete