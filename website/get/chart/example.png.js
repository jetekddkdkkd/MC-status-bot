const path = require('path')
//rgb(47, 49, 54)
const { ChartJSNodeCanvas } = require('chartjs-node-canvas')
module.exports = {
    path: '/chart/example.png',

    async run(shards, req, res) {
        try {
            // Chart.js
            const chartJSNodeCanvas = new ChartJSNodeCanvas({
                width: 1000,
                height: 400,
                backgroundColour: 'rgb(47, 49, 54)'
            })
            const lineColour = { fill: req.query['line-fill'].replaceAll('%20', ' '), border: req.query['line-border'].replaceAll('%20', ' '), colour: '39, 76, 113' }
            const textColour = {
                time: req.query['text-time'].replaceAll('%20', ' '),
                state: req.query['text-state'].replaceAll('%20', ' '),
                title: req.query['text-title'].replaceAll('%20', ' ')
            }

            const configuration = {
                type: 'line',
                data: {
                    labels: [
                        '20:13',
                        '20:18',
                        '20:23',
                        '20:28',
                        '20:33',
                        '20:38',
                        '20:43',
                        '20:48',
                        '20:53',
                        '20:58',
                        '21:03',
                        '21:08',
                        '21:13',
                        '21:18',
                        '21:23',
                        '21:28',
                        '21:33',
                        '21:38',
                        '21:43',
                        '21:48',
                        '21:53',
                        '21:58',
                        '22:03',
                        '22:08',
                        '22:13',
                        '22:18',
                        '22:23',
                        '22:28',
                        '22:33',
                        '22:38',
                        '22:43',
                        '22:48',
                        '22:53',
                        '22:58',
                        '23:03',
                        '23:08',
                        '23:13',
                        '23:18',
                        '23:23',
                        '23:28',
                        '23:33',
                        '23:38',
                        '23:43',
                        '23:48',
                        '23:53',
                        '23:58',
                        '00:03',
                        '00:08',
                        '00:13',
                        '00:18',
                        '00:23',
                        '00:28',
                        '00:33',
                        '00:38',
                        '00:43',
                        '00:48',
                        '00:53',
                        '00:58',
                        '01:03',
                        '01:08',
                        '01:13',
                        '01:18',
                        '01:23',
                        '01:28',
                        '01:33',
                        '01:38',
                        '01:43',
                        '01:48',
                        '01:53',
                        '01:58',
                        '02:03',
                        '02:08',
                        '02:13',
                        '02:18',
                        '02:23',
                        '02:28',
                        '02:33',
                        '02:38',
                        '02:43',
                        '02:48',
                        '02:53',
                        '02:58',
                        '03:03',
                        '03:08',
                        '03:13',
                        '03:18',
                        '03:23',
                        '03:28',
                        '03:33',
                        '03:38',
                        '03:43',
                        '03:48',
                        '03:53',
                        '03:58',
                        '04:03',
                        '04:08',
                        '04:13',
                        '04:18',
                        '04:23',
                        '04:28',
                        '04:33',
                        '04:38',
                        '04:43',
                        '04:48',
                        '04:53',
                        '04:58',
                        '05:03',
                        '05:08',
                        '05:13',
                        '05:18',
                        '05:23',
                        '05:28',
                        '05:33',
                        '05:38',
                        '05:43',
                        '05:48',
                        '05:53',
                        '05:58',
                        '06:03',
                        '06:08',
                        '06:13',
                        '06:18',
                        '06:23',
                        '06:28',
                        '06:33',
                        '06:38',
                        '06:43',
                        '06:48',
                        '06:53',
                        '06:58',
                        '07:03',
                        '07:08',
                        '07:13',
                        '07:18',
                        '07:23',
                        '07:28',
                        '07:33',
                        '07:38',
                        '07:43',
                        '07:48',
                        '07:53',
                        '07:58',
                        '08:03',
                        '08:08',
                        '08:13',
                        '08:18',
                        '08:23',
                        '08:28',
                        '08:33',
                        '08:38',
                        '08:43',
                        '08:48',
                        '08:53',
                        '08:58',
                        '09:03',
                        '09:08',
                        '09:13',
                        '09:18',
                        '09:23',
                        '09:28',
                        '09:33',
                        '09:38',
                        '09:43',
                        '09:48',
                        '09:53',
                        '09:58',
                        '10:03',
                        '10:08',
                        '10:13',
                        '10:18',
                        '10:23',
                        '10:28',
                        '10:33',
                        '10:38',
                        '10:43',
                        '10:48',
                        '10:53',
                        '10:58',
                        '11:03',
                        '11:08',
                        '11:13',
                        '11:18',
                        '11:23',
                        '11:28',
                        '11:33',
                        '11:38',
                        '11:43',
                        '11:48',
                        '11:53',
                        '11:58',
                        '12:03',
                        '12:08',
                        '12:13',
                        '12:18',
                        '12:23',
                        '12:28',
                        '12:33',
                        '12:38',
                        '12:43',
                        '12:48',
                        '12:53',
                        '12:58',
                        '13:03',
                        '13:08',
                        '13:13',
                        '13:18',
                        '13:23',
                        '13:28',
                        '13:33',
                        '13:38',
                        '13:43',
                        '13:48',
                        '13:53',
                        '13:58',
                        '14:03',
                        '14:08',
                        '14:13',
                        '14:18',
                        '14:23',
                        '14:28',
                        '14:33',
                        '14:38',
                        '14:43',
                        '14:48',
                        '14:53',
                        '14:58',
                        '15:03',
                        '15:08',
                        '15:13',
                        '15:18',
                        '15:23',
                        '15:28',
                        '15:33',
                        '15:38',
                        '15:43',
                        '15:48',
                        '15:53',
                        '15:58',
                        '16:03',
                        '16:08',
                        '16:13',
                        '16:18',
                        '16:23',
                        '16:28',
                        '16:33',
                        '16:38',
                        '16:43',
                        '16:48',
                        '16:53',
                        '16:58',
                        '17:03',
                        '17:08',
                        '17:13',
                        '17:18',
                        '17:23',
                        '17:28',
                        '17:33',
                        '17:38',
                        '17:43',
                        '17:48',
                        '17:53',
                        '17:58',
                        '18:03',
                        '18:08',
                        '18:13',
                        '18:18',
                        '18:23',
                        '18:28',
                        '18:33',
                        '18:38',
                        '18:43',
                        '18:48',
                        '18:53',
                        '18:58',
                        '19:03',
                        '19:08',
                        '19:13',
                        '19:18',
                        '19:23',
                        '19:28',
                        '19:33',
                        '19:38',
                        '19:43',
                        '19:48',
                        '19:53',
                        '19:58',
                        '20:03',
                        '20:08',
                        '20:13',
                        '20:18'
                    ],
                    datasets: [
                        {
                            label: 'Online Players',
                            data: [
                                3, 4, 1, 2, 4, 2, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 5, 4, 3, 3, 3, 4, 4, 3, 3, 2, 3, 1, 2, 2, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 2,
                                2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 3, 3, 2, 0, 0, 0, 0, 1,
                                2, 2, 2, 2, 2, 2, 2, 3, 5, 4, 4, 5, 4, 4, 4, 4, 5, 3, 3, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 2, 4, 3, 3, 4, 4, 4, 4, 3, 2, 1, 2, 2, 0, 0, 0, 0,
                                0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 2, 4, 4, 4, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 3, 3, 3, 4, 4, 3, 4, 3, 4, 7, 6, 7, 7, 7, 7, 4, 4, 3, 0, 0, 1, 1, 0, 0,
                                1, 1, 3, 5, 3, 3, 3, 2, 4, 0, 0, 0, 0, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 6, 5, 4, 3, 3, 4, 4, 4, 4, 9, 8, 8, 7, 5, 2, 0, 1, 1, 2, 2, 3, 3, 3, 2, 2, 2, 2, 5, 5, 5, 7,
                                7, 7, 8, 5, 6, 4, 3, 4, 3, 4, 3, 4, 4, 4, 4
                            ],
                            fill: true,
                            color: 'rgb(' + lineColour.colour + ')',
                            backgroundColor: 'rgba(' + lineColour.fill + ', 0.2)',
                            borderColor: 'rgba(' + lineColour.border + ', 1)',
                            borderWidth: 2,
                            steppedLine: true
                        }
                    ]
                },
                options: {
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: `Players online`,
                            color: 'rgb(' + textColour.title + ')'
                        },

                        legend: {
                            labels: {
                                color: 'rgb(' + textColour.title + ')',
                                font: {
                                    size: 15
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Number of online players',
                                color: 'rgb(' + textColour.title + ')'
                            },
                            beginAtZero: true,
                            ticks: {
                                color: 'rgb(' + textColour.state + ')',
                                fontSize: 15,
                                stepSize: 1,
                                max: 1,
                                callback: function (value) {
                                    return value
                                }
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Time - (ETC)',
                                color: 'rgb(' + textColour.title + ')'
                            },
                            ticks: {
                                color: 'rgb(' + textColour.time + ')',
                                fontSize: 13,
                                stepSize: 1
                            }
                        }
                    }
                }
            }

            const image = await chartJSNodeCanvas.renderToBuffer(configuration)
            res.contentType('png').send(image)
        } catch (err) {
            console.log(err)
            res.sendFile(path.join(`${__dirname}/../../dist/img/down.png`))
        }
    }
}
