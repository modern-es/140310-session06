import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

let map = L.map('map').setView([35.71590, 51.39173], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'نقشه'
}).addTo(map);

L.marker([35.71590, 51.39173]).addTo(map)
    .bindPopup('فراتر از دانش')
    .openPopup();