import { WeatherData } from "./index";

interface WeatherInfoProps {
  weather: WeatherData;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
  return (
    <section className="flex flex-col pt-[80px]">
      <p className="text-white">{weather.name}</p>
      <h1 className="font-bold text-7xl text-white">{weather.main.temp}°</h1>
      <p className="text-3xl text-white">{weather.weather[0].description}</p>
    </section>
  );
}

export default WeatherInfo;