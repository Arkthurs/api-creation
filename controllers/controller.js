import Stats from "../models/data.js"

const handleErrors = (err) => {
    let errors = { tag: '', count: '', revenueAverage: '', revenueMedian: '', earningSplit: '' }
    if (err.message.includes('data validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        });
    }
    return errors
}

export const data_get = async (req, res) => {
    try {
        const stats = await Stats.find()
        if (stats.length === 0) {
            return res.status(404).send('No data found')
        }
        res.send(stats)
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const data_post = async (req, res) => {
    const { tag, count, revenueAverage, revenueMedian, earningSplit } = req.body
    try {
        const stat = await Stats.create({ tag, count, revenueAverage, revenueMedian, earningSplit })
        res.status(201).json({ stat: stat._id })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

export const data_put = async (req, res) => {
    const { id } = req.params
    const { tag, count, revenueAverage, revenueMedian, earningSplit } = req.body
    try {
        const updatedStat = await Stats.findByIdAndUpdate(id, { tag, count, revenueAverage, revenueMedian, earningSplit }, { new: true })
        res.json(updatedStat)
    } catch (error) {
        console.error('Error updating stat:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const data_delete = async (req, res) => {
    const { id } = req.params
    try {
        const deletedStat = await Stats.findByIdAndDelete(id)
        res.json(deletedStat)
    } catch (error) {
        console.error('Error deleting stat:', error)
        res.status(500).send('Internal Server Error')
    }
}

export const data_get_single = async (req, res) => {
    try {
        const stats = await Stats.findById(req.params.id)
        if (!stats) {
            console.error('Data not found:', req.params.id)
            return res.status(404).json({ error: 'Data not found' })
        }
        res.json(stats)
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}