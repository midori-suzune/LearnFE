
const cities = [
  { id : "HN", name: "Hà Nội", lat: 21.0285, lon: 105.8542 },
  { id : "HCM" , name: "TP.HCM", lat: 10.8231, lon: 106.6297 },
  { id : "DN" , name: "Đà Nẵng", lat: 16.0471, lon: 108.2068 },
  { id : "HP", name: "Hải Phòng", lat: 20.8449, lon: 106.6881 },
  { id : "CT", name: "Cần Thơ", lat: 10.0452, lon: 105.7469 }
];

const getWeather = async (lat, lon) => {
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
    const res = await fetch(endpoint);
    const body = await res.json();
    return (body.current_weather.temperature);
}
const cityName = document.querySelector('input[id=city-name]');
const searchIcon = document.getElementById('search-icon');
const weatherResult = document.getElementById('weather-result');
searchIcon.addEventListener('click', async () => {
    for(const city of cities){
        if(city.name.toLowerCase() === cityName.value.toLowerCase().trim()){
            const tmp = await getWeather(city.lat, city.lon);
            weatherResult.textContent = tmp;            
        }
    }
});