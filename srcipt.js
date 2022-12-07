const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '564bc798c6msh4a4dd42760ce054p19e58ajsn8838873df16d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        
        wind_speed.innerHTML = response.wind_speed 
    
    
    })
	.catch(err => console.error(err));
} 

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})


getWeather("Lucknow")
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('In this section will wil find about Wind Speed', 'success')
  })
}

 