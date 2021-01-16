const WebTorrent = require('webtorrent-hybrid')
var client = new WebTorrent()
var uri = 'magnet:?xt=urn:btih:6C50B8BBB257FF40B0986455DF56B78C87F19442&dn=Lil%20Uzi%20Vert%20-%20XO%20TOUR%20Llif3%20%5B2017-Single%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce'


client.add(uri, { path: './files/' }, (torrent) => {
    torrent.on('metadata', ()=> {
        console.log('name: ' + torrent.name);
        
    })
    torrent.on('download', (bytes) => {
        console.clear()
        console.table([{total_downloaded: torrent.downloaded, download_speed: Math.floor((torrent.downloadSpeed)/1000), progress: Math.floor(torrent.progress * 100) + '%'}])
    })
    torrent.on('upload', (bytes) => {
        
    })
})

/* client.seed('./test.txt', (torrent) => {
    console.log('Seeding...' + torrent.magnetURI)
}) */