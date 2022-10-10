const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.end(`<div>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
            </ul>
            </nav>
        </div>
        <h1>HOME</h1>
        `)
})

app.get('/about', (req, res) => {
    res.end(`<div>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                <a href="/about">About</a>
                </li>
            </ul>
        </nav>
        </div>
        <h1>ABOUT</h1>
        `)
})


app.listen(PORT, () => {
    console.log('server started')
})