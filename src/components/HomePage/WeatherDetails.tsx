import { WeatherData } from "./index";

interface WeatherDetailsProps {
  weather: WeatherData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  return (
    <section className="bg-white w-full flex items-center justify-evenly text-center p-4 rounded-lg flex-grow">
      <div>
        <h2 className="font-semibold">{weather.main.temp_min}°</h2>
        <p>Temp. Minima</p>
      </div>
      <div>
        <h2 className="font-semibold">{weather.main.humidity}%</h2>
        <p>Umidade</p>
      </div>
      <div>
        <h2 className="font-semibold">{weather.main.pressure} hpa</h2>
        <p>Pressão</p>
      </div>
    </section>
  );
};

export default WeatherDetails;
