const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
// const path = require('path');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('build'));
// }

app.get('/api/design', (req, res) => {
    const design = {
        model: 'air force 1',
        parts: {
            outerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    },
                    {
                        type: 'color',
                        color: '#ffff11'
                    },
                    {
                        type: 'color',
                        color: '#1278fa'
                    }
                ]
            },
            innerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#ee44aa'
                    }
                ]
            },
            outerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    },
                    {
                        type: 'color',
                        color: '#57d59c'
                    }
                ]
            },
            innerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#ee44aa'
                    }
                ]
            },
            outerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            },
            innerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#ee44aa'
                    }
                ]
            },
            outerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#e0734c'
                    }
                ]
            },
            innerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#e0734c'
                    }
                ]
            },
            sole: {
                layers: [
                    {
                        type: 'color',
                        color: '#e0734c'
                    }
                ]
            },
            toeBox: {
                layers: [
                    {
                        type: 'color',
                        color: '#1155ff'
                    }
                ]
            },
            toeCap: {
                layers: [
                    {
                        type: 'color',
                        color: '#1155ff'
                    }
                ]
            },
            lace: {
                layers: [
                    {
                        type: 'color',
                        color: '#1155ff'
                    }
                ]
            },
            laceCage: {
                layers: [
                    {
                        type: 'color',
                        color: '#1155ff'
                    }
                ]
            },
            laceLock: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            },
            tongue: {
                layers: [
                    {
                        type: 'color',
                        color: '#1155ff'
                    }
                ]
            },
            heelWing: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            },
            heelTab: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            },
            sockLiner: {
                layers: [
                    {
                        type: 'color',
                        color: '#3399bb'
                    }
                ]
            }
        }
    }
    res.json(design)
})

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

app.listen(port, () => {
    console.log('App is listening on port:', port);
})