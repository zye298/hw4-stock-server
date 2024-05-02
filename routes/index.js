var express = require('express')
const dayjs = require('dayjs')
var router = express.Router()
const API_KEY_FINNHUB = 'copjgq9r01qorsphn5kgcopjgq9r01qorsphn5l0'
const API_KEY_POLYGON = '44pVW74kaBde587NJzsQXUbX5EIjyy70'
const client = require('../db')
//const uri = "";
/* GET home page. */
router.get('/ticket', async (req, res) => {
    const q = req.query.search
    if (q==='AAP'){
        return res.json([{"description":"ADVANCE AUTO PARTS INC","displaySymbol":"AAP","symbol":"AAP","type":"Common Stock"},{"description":"AUSTRALIAN AGRICULTURAL PROJ","displaySymbol":"AAP.AX","symbol":"AAP.AX","type":"Common Stock"},{"description":"ADVANCE AUTO PARTS INC","displaySymbol":"AAP.MX","symbol":"AAP.MX","type":"Common Stock"},{"description":"APPLE ISPORT GROUP INC","displaySymbol":"AAPI","primary":null,"symbol":"AAPI","type":"Common Stock"},{"description":"ALL AMERICAN PET CO INC","displaySymbol":"AAPT","primary":null,"symbol":"AAPT","type":"Common Stock"},{"description":"AAP INC","displaySymbol":"AAPJ","primary":null,"symbol":"AAPJ","type":"Common Stock"},{"description":"APPLE INC","displaySymbol":"AAPL","primary":["APC.SG","AAPLN.TU","AAPLEUR.SW","APC.F","APC.DE","APC.DU","APC.TG","APC8.DU","AAPL.BC","APC.HM","APC.HA","APC.MU","AAPL.MX","0R2V.L","AAPL.NE","APC8.F","AAPLUSD.SW","AAPL3.BA","AAPLCL.SN","AAPL.SN","AAPL.VI","1AAPL.MI","AAPL34.SA","APC.BE","APC8.MU","AAPL.SW"],"symbol":"AAPL","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"AEMMF","symbol":"AEMMF","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"A2A.MI","symbol":"A2A.MI","type":"Common Stock"},{"description":"ALA SPA","displaySymbol":"8WD.DU","symbol":"8WD.DU","type":"Common Stock"},{"description":"ALA SPA","displaySymbol":"8WD.F","symbol":"8WD.F","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"A2A.VI","symbol":"A2A.VI","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"0N54.L","symbol":"0N54.L","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"EAM.F","symbol":"EAM.F","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"EAM.SG","symbol":"EAM.SG","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"EAM.DU","symbol":"EAM.DU","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"A2AM.TU","symbol":"A2AM.TU","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"EAM.TG","symbol":"EAM.TG","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"EAM.BE","symbol":"EAM.BE","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"EAM.MU","symbol":"EAM.MU","type":"Common Stock"},{"description":"A2A SPA","displaySymbol":"A2AN.MX","symbol":"A2AN.MX","type":"Common Stock"}])

    }
    if(q==='NVD'){
        return res.json([{"description":"NIRVANA DEVELOPMENT PCL","displaySymbol":"NVD.BK","symbol":"NVD.BK","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.BE","symbol":"NVD.BE","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.HM","symbol":"NVD.HM","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.TG","symbol":"NVD.TG","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.F","symbol":"NVD.F","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.SG","symbol":"NVD.SG","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.DU","symbol":"NVD.DU","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.DE","symbol":"NVD.DE","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.HA","symbol":"NVD.HA","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVD.MU","symbol":"NVD.MU","type":"Common Stock"},{"description":"NVIDIA CORP","displaySymbol":"NVDA","primary":["NVDA.SW","NVD.HM","NVDC34.SA","NVD.F","NVD.BE","NVDA.MX","NVDAN.TU","NVDG.SG","0R1I.L","1NVDA.MI","NVD.HA","NVDG.MU","NVDA.VI","NVDA3.BA","NVD.SG","NVD.DE","NVD.TG","NVD.MU","NVDG.BE","NVD.DU","NVDG.DU","NVDG.F","NVDA.NE"],"symbol":"NVDA","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"NVMI","symbol":"NVMI","type":"Common Stock"},{"description":"NAVA LTD","displaySymbol":"513023.BO","symbol":"513023.BO","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"NMR.F","symbol":"NMR.F","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"0YAA.L","symbol":"0YAA.L","type":"Common Stock"},{"description":"NAVA LTD","displaySymbol":"NAVA.NS","symbol":"NAVA.NS","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"NMR.DU","symbol":"NMR.DU","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"NMR.TG","symbol":"NMR.TG","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"NMR.BE","symbol":"NMR.BE","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"NMR.SG","symbol":"NMR.SG","type":"Common Stock"},{"description":"NOVA LTD","displaySymbol":"NVMI.TA","symbol":"NVMI.TA","type":"Common Stock"},{"description":"NAVAMEDIC","displaySymbol":"N1A.DU","symbol":"N1A.DU","type":"Common Stock"},{"description":"NAVAMEDIC","displaySymbol":"NAVA.OL","symbol":"NAVA.OL","type":"Common Stock"},{"description":"NAVAMEDIC","displaySymbol":"N1A.SG","symbol":"N1A.SG","type":"Common Stock"}])
    }
    if (!q) {
        return res.json([])
    } else {
        const resp = await fetch(`https://finnhub.io/api/v1/search?q=${q}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (data.count) {
            return res.json(data.result.filter(({type}) => type === 'Common Stock'))
        } else {
            console.log(data)
            return res.json([])
        }
    }
})

//4.1
router.get('/symbol', async (req, res) => {
    const q = req.query.search
    if (!q) {
        return res.json({})
    } else {
        const resp = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${q}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (!data.err) {
            return res.json(data)
        } else {
            console.log(data)
            return res.json({})
        }
    }
})

//4.2
router.get('/details', async (req, res) => {
    const {ticker, from, to, type} = req.query
    console.log(ticker, from, to)
    if (!ticker || !from || !to) {
        return res.json([])
    } else {
        console.log(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/${type || 'day'}/${dayjs(
            Number(from)).format('YYYY-MM-DD')}/${dayjs(Number(to))
            .format('YYYY-MM-DD')}?adjusted=true&sort=asc&apiKey=${API_KEY_POLYGON}`)
        const resp = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/${type || 'day'}/${dayjs(
            Number(from)).format('YYYY-MM-DD')}/${dayjs(Number(to))
            .format('YYYY-MM-DD')}?adjusted=true&sort=asc&apiKey=${API_KEY_POLYGON}`)
        const data = await resp.json()
        if (!data.error) {
            return res.json(data.results)
        } else {
            console.log(data)
            return res.json([])
        }
    }
})

//4.3
router.get('/quote', async (req, res) => {
    const q = req.query.search
    if (!q) {
        return res.json({})
    } else {
        const resp = await fetch(`https://finnhub.io/api/v1/quote?symbol=${q}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (!data.err) {
            const resp1 = await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${q}&token=${API_KEY_FINNHUB}`)
            const data1 = await resp1.json()


            return res.json({
                ...data,
                t: dayjs(data.t * 1000).format('YYYY-MM-DD HH:mm:ss'),
                name: data1.name
            })
        } else {
            console.log(data)
            return res.json({})
        }
    }
})

//4.5
router.get('/news', async (req, res) => {
    const {ticker, from, to} = req.query
    if (!ticker || !from || !to) {
        return res.json([])
    } else {
        console.log(`https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${dayjs(
            Number(from)).format('YYYY-MM-DD')}&to=${dayjs(Number(to))
            .format('YYYY-MM-DD')}&token=${API_KEY_FINNHUB}`)
        const resp = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${dayjs(
            Number(from)).format('YYYY-MM-DD')}&to=${dayjs(Number(to))
            .format('YYYY-MM-DD')}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (!data.err) {
            return res.json(data.map(item => ({
                ...item,
                datetime: dayjs(item.datetime * 1000).format('YYYY-MM-DD HH:mm:ss'),
            })))
        } else {
            console.log(data)
            return res.json([])
        }
    }
})

//4.6
router.get('/recommend', async (req, res) => {
    const q = req.query.search
    if (!q) {
        return res.json([])
    } else {
        const resp = await fetch(`https://finnhub.io/api/v1/stock/recommendation?symbol=${q}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (!data.err) {
            return res.json(data)
        } else {
            console.log(data)
            return res.json([])
        }
    }
})

//4.7
router.get('/insight', async (req, res) => {
    const q = req.query.search
    if (!q) {
        return res.json([])
    } else {
        const resp = await fetch(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${q}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (!data.err) {
            return res.json(data.data)
        } else {
            console.log(data)
            return res.json([])
        }
    }
})

//4.8
router.get('/peers', async (req, res) => {
    const q = req.query.search
    if (!q) {
        return res.json([])
    } else {
        const resp = await fetch(`https://finnhub.io/api/v1/stock/peers?symbol=${q}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (!data.err) {
            return res.json(data)
        } else {
            console.log(data)
            return res.json([])
        }
    }
})

//4.9
router.get('/earnings', async (req, res) => {
    const q = req.query.search
    if (!q) {
        return res.json([])
    } else {
        const resp = await fetch(`https://finnhub.io/api/v1/stock/earnings?symbol=${q}&token=${API_KEY_FINNHUB}`)
        const data = await resp.json()
        if (!data.err) {
            return res.json(data)
        } else {
            console.log(data)
            return res.json([])
        }
    }
})

router.get('/user', async (req, res) => {
    const data = await client.db('stock')
        .collection('User')
        .findOne()
    res.json(data)
})

router.get('/watch', async (req, res) => {
    const data = await client.db('stock').collection('Watch').find().toArray()
    res.json(data)
})
router.post('/watch', async (req, res) => {
    await client.db('stock')
        .collection('Watch')
        .updateOne(
            {name: req.body.name},
            {$set: {turnon: req.body.turnon}},
            {upsert: true},
        )
    res.json({})
})

router.get('/postWatch', async (req, res) => {
    await client.db('stock')
        .collection('Watch')
        .updateOne(
            {name: req.query.name},
            {$set: {turnon: Number(req.query.turnon)}},
            {upsert: true},
        )
    res.json({})
})

router.get('/stock', async (req, res) => {
    const data = await client.db('stock').collection('Stock').find().toArray()
    res.json(data)
})
router.get('/postBuy', async (req, res) => {
    const originStock = await client.db('stock').collection('Stock').findOne({name: req.query.name})
    let stock = null
    if (originStock) {
        stock = await client.db('stock').collection('Stock').updateOne({
            name: req.query.name,
        }, {
            $set: {
                price: (originStock.price + Number(req.query.price)) / 2,
                quantity: originStock.quantity + Number(req.query.quantity),
            }
        },)

    } else {
        stock = await client.db('stock').collection('Stock').updateOne({
            name: req.query.name,
        }, {
            $set: {
                price: Number(req.query.price),
                quantity: Number(req.query.quantity),
            }
        }, {upsert: true})
    }

    const user = await client.db('stock').collection('User').findOneAndUpdate(
        {name: 'user'},
        {
            $set: {
                price: String(Number(req.query.userPrice) - Number(req.query.price) * Number(
                    req.query.quantity)), // Increment price
            },
        },
    )

    res.json({stock, user}) // Send back both stock and updated user data
})

router.post('/buy', async (req, res) => {
    const stock = await client.db('stock').collection('Stock').insertOne({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
    }, {raw: true})

    // Update user wallet: deduct purchase cost
    const user = await client.db('stock').collection('User').findOneAndUpdate(
        {name: 'user'},
        {
            $set: {
                price: String(Number(req.body.userPrice) - Number(req.body.price) * Number(
                    req.body.quantity)), // Increment price
            },
        },
    )

    res.json({stock, user}) // Send back both stock and updated user data
})

router.post('/sell', async (req, res) => {
    const currentPrice = req.body.currentPrice // Get current price from request body
    const stock = await client.db('stock').collection('Stock').updateOne(
        {_id: req.body._id},
        {quantity: req.body.quantity},
        {raw: true},
    )

    // Update user wallet: add proceeds from sale
    const user = await client.db('stock').collection('User').findOneAndUpdate(
        {name: 'user'},
        {
            $set: {
                price: String(Number(req.body.userPrice) + Number(currentPrice) * Number(
                    req.body.quantity)), // Increment price
            },
        },
    )

    res.json({stock, user}) // Send back both updated stock and user data
})


router.get('/postSell', async (req, res) => {
    const originStock = await client.db('stock').collection('Stock').findOne({name: req.query.name})
    let stock = null
    if (originStock) {
        stock = await client.db('stock').collection('Stock').updateOne({
            name: req.query.name,
        }, {
            $set: {
                quantity: originStock.quantity - Number(req.query.quantity),
            }
        },)

    } else {
        stock = await client.db('stock').collection('Stock').updateOne({
            name: req.query.name,
        }, {
            $set: {
                price: Number(req.query.price),
                quantity: Number(req.query.quantity),
            }
        }, {upsert: true})
    }

    const user = await client.db('stock').collection('User').findOneAndUpdate(
        {name: 'user'},
        {
            $set: {
                price: String(Number(req.query.userPrice) + Number(req.query.price) * Number(
                    req.query.quantity)), // Increment price
            },
        },
    )

    res.json({stock, user}) // Send back both stock and updated user data
})


router.get('/postUser', async (req, res) => {
    await client.db('stock').collection('User').findOneAndUpdate({
        name: 'user',
    }, {
        $set: {
            price: Number(req.query.price),
        },
    }, {raw: true})
    res.json({})
})

router.post('/user', async (req, res) => {
    await client.db('stock').collection('User').findOneAndUpdate({
        name: 'user',
    }, {
        $set: {
            price: req.body.price,
        },
    }, {raw: true})
    res.json({})
})

router.get('/share', async (req, res) => {
    const search = req.query.search
    const allStocks = await client.db('stock').collection('Stock').find().toArray()
    const resp = await fetch(`https://finnhub.io/api/v1/quote?symbol=${search}&token=${API_KEY_FINNHUB}`)
    const data = await resp.json()
    if (!data.err) {
        const currentPrice = data.c
        if (allStocks.filter(item => item.name === search).length) {
            console.log(allStocks.filter(item => item.name === search))
            return res.json({
                share: Number(allStocks.filter(item => item.name === search)[0].quantity),
                avg: allStocks.filter(item => item.name === search)[0].price,
                total: allStocks.filter(item => item.name === search)[0].price * allStocks.filter(
                    item => item.name === search)[0].quantity,
                change: currentPrice - allStocks.filter(item => item.name === search)[0].price,
                marketValue: currentPrice * allStocks.filter(item => item.name === search)[0].quantity,
            })

        } else {
            return res.json({
                share: 0,
                avg: 0,
                total: 0,
                change: 0,
                marketValue: 0
            })
        }

    } else {
        console.log(data)
        return res.json({})
    }


})
module.exports = router
