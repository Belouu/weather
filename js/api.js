export const getWeatherData= async (city) => {
    try {
        const responce= await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5517ad9c128b2ddd8eb7bee2f81fd18&lang=ru&units=metric`
            );
            return await responce.json();
    } catch (error) {
        console.error(error);
    }
}