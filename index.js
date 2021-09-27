import express from 'express'
import morgan from 'morgan'
import allRoutes from './src/routes'


//DOCUMENTATION



//INIT EXPRESS
const app = express()


//CONFIG
const port = (process.env.PORT || 3001)


//MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'))
app.use(allRoutes)



//PORT
app.set('port', port)


//EXPRESS

app.listen(app.get('port'), (error)=> {
    if(error) {
        console.error('Failed to start')
    }
    else {
        console.log('Server started on port: '+ app.get('port'))
    }
})
