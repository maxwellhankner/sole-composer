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
        // model: 'https://solecomposertesting.s3.us-east-2.amazonaws.com/af1_ao.gltf',
        model: 'assets/models/af1_ao.gltf',
        overlays: {
            outerOverlay: {
                parts: ['outerQuarter', 'outerHeel', 'outerSwoosh', 'outerSole', 'toeBox', 'toeCap', 'laceCage', 'heelWing', 'heelTab'],
                layers: [
                    
                ]
            },
            innerOverlay: {
                parts: ['innerQuarter', 'innerHeel', 'innerSwoosh', 'innerSole', 'toeBox', 'toeCap', 'laceCage', 'heelWing', 'heelTab'],
                layers: [
                    
                ]
            }
        },
        parts: {
            outerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            innerSwoosh: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            outerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            innerQuarter: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            outerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            innerHeel: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            outerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            innerSole: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            sole: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            toeBox: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            toeCap: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            lace: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            laceCage: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            laceLock: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            tongue: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            heelWing: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            heelTab: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
                    }
                ]
            },
            sockLiner: {
                layers: [
                    {
                        type: 'color',
                        color: '#ffffff'
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



// ------------------------------------------------------------------------------------------------------------
// {
//     // model: 'https://solecomposertesting.s3.us-east-2.amazonaws.com/af1_ao.gltf',
//     model: 'assets/models/af1_ao.gltf',
//     overlays: {
//         outerOverlay: {
//             parts: ['outerQuarter', 'outerHeel', 'outerSwoosh', 'outerSole', 'toeBox', 'toeCap', 'laceCage', 'heelWing', 'heelTab'],
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#9955dd'
//                 },
//                 {
//                     type: 'graphic',
//                     link: 'assets/images/spongebob.png',
//                     x: 0,
//                     y: 0,
//                     scale: 1,
//                     rotation: 0
//                 }
//             ]
//         },
//         innerOverlay: {
//             parts: ['innerQuarter', 'innerHeel', 'innerSwoosh', 'innerSole', 'toeBox', 'toeCap', 'laceCage', 'heelWing', 'heelTab'],
//             layers: [
//                 // {
//                 //     type: 'graphic',
//                 //     link: 'assets/images/innerOverlayHelper.png',
//                 //     x: 0,
//                 //     y: 0,
//                 //     scale: 860,
//                 //     rotation: 0
//                 // }
//                 {
//                     type: 'color',
//                     color: '#ff99aa'
//                 },
//                 {
//                     type: 'graphic',
//                     link: 'assets/images/rainbow.png',
//                     x: 0,
//                     y: 0,
//                     scale: 1,
//                     rotation: 0
//                 }
                
//             ]
//         }
//     },
//     parts: {
//         outerSwoosh: {
//             layers: [
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 },
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 // {
//                 //     type: 'graphic',
//                 //     link: 'assets/images/checker.png',
//                 //     x: 0,
//                 //     y: 0,
//                 //     scale: 500,
//                 //     rotation: 0
//                 // },
//                 // {
//                 //     type: 'graphic',
//                 //     // link: 'https://solecomposertesting.s3.us-east-2.amazonaws.com/spongebob.png',
//                 //     link: 'assets/images/spongebob.png',
//                 //     x: 0,
//                 //     y: 0,
//                 //     scale: 500,
//                 //     rotation: 0
//                 // }
                
//                 {
//                     type: 'graphic',
//                     link: 'assets/images/japanese.png',
//                     x: 0,
//                     y: 0,
//                     scale: 1,
//                     rotation: 0
//                 }
//             ]
//         },
//         innerSwoosh: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         outerQuarter: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         innerQuarter: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         outerHeel: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         innerHeel: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         outerSole: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 }
//             ]
//         },
//         innerSole: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         sole: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         toeBox: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 // {
//                 //     type: 'graphic',
//                 //     link: 'assets/images/abucamo.jpg',
//                 //     x: 0,
//                 //     y: 0,
//                 //     scale: 4000,
//                 //     rotation: 0
//                 // }
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         toeCap: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         lace: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         laceCage: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         laceLock: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         },
//         tongue: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//                 // {
//                 //     type: 'mask',
//                 //     link: 'assets/images/tongueLogoMask.png',
//                 //     color: '#ffaa99'
//                 // }
//             ]
//         },
//         heelWing: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//                 // {
//                 //     type: 'mask',
//                 //     link: 'assets/images/heelWingLogoMask.png',
//                 //     color: '#ffaa99'
//                 // }
//             ]
//         },
//         heelTab: {
//             layers: [
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'outerOverlay'
//                 },
//                 {
//                     type: 'overlay',
//                     source: 'innerOverlay'
//                 }
//             ]
//         },
//         sockLiner: {
//             layers: [
//                 // {
//                 //     type: 'graphic',
//                 //     link: 'assets/images/static.jpg',
//                 //     x: 0,
//                 //     y: 0,
//                 //     scale: 500,
//                 //     rotation: 0
//                 // },
//                 {
//                     type: 'color',
//                     color: '#ffffff'
//                 }
//             ]
//         }
//     }
// }