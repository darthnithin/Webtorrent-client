const WebTorrent = require('webtorrent-hybrid')
const EventEmitter = require('events');
const process = require('process');
const readline = require('readline');
const { count } = require('console');
const { cursorTo } = require('readline');
const { stdout } = require('process');
//require('events').EventEmitter.defaultMaxListeners = Infinity;
var col = process.stdout.columns
var client = new WebTorrent()
var uris = ['https://pl.gammaspectra.live/video_parler_segment_00.torrent', 'https://pl.gammaspectra.live/video_parler_segment_01.torrent']
var speeds = [
    ['total_downloaded'],
    ['download_speed'],
    ['progress'],
    ['upload_speed']
]
console.clear()
uris.forEach((uri, index) => {
    client.add(uri, { path: './files/' }, (torrent) => {

        
        torrent.on('download', (bytes) => {
            console.clear()
            speeds[0][index+1] = Math.floor(torrent.downloaded/1000000)
            speeds[1][index+1] = Math.floor((torrent.downloadSpeed)/1000)
            speeds[2][index+1] = Math.floor(torrent.progress * 100) + '%'
            console.table(speeds)
            
        })
       torrent.on('upload', function (bytes) {
            console.clear()
            console.table(speeds)
            speeds[3][index+1] = Math.floor(torrent.uploadSpeed/1000)
        })
    
    })
});
