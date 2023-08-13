import  express from "express"
import {dirname, join} from 'path'
import { fileURLToPath } from "url"
import indexRoutes from './routes/index.js'
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(express.static(join(__dirname, 'public')))

app.use(indexRoutes)
console.log(join(__dirname, '/views'));

app.listen(3000)

app.get('/',(req,  res) => res.send('Hey ! si funciona!'))
console.log("Server is listening on port", 3000);