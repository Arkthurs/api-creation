import express from 'express'
import apiRoutes from './routes/apiRoutes.js'
import Stats from './models/data.js'

const app = express()
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'ejs')

// routes
app.use('/api', apiRoutes)
app.get('/', (req, res) => res.render('main'))
app.get('/charts/:id', async (req, res) => {
    const id = req.params.id
    const stats = await Stats.findById(id)
    const tag = stats.tag
    res.render('charts', {id: id, tag: tag})
})
app.get('/input', (req, res) => res.render('input'))
app.get('/update/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const stats = await Stats.findById(id);
        if (!stats) {
            return res.status(404).send('Data not found');
        }
        res.render('update', { data: stats });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
})

export default app