'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherDetails from './WeatherDetails';

interface HomePageProps {
  lat: number;
  long: number;
}

export interface WeatherData {
  main: {
    temp: number
    temp_min: number
    humidity: number
    pressure: number
  }

  name: string

  weather: {
    description: string
  }[]
}

export function HomePage() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const getWeather = async ({ lat, long }: HomePageProps) => {
    const res = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: lat,
          lon: long,
          appid: 'e9337583b510160a32cf3c4a418cf5de',
          lang: 'pt',
          units: 'metric'
        }
      }
    );
    setWeather(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      getWeather({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
      setLocation(true);
    });
  }, []);

  if (!location) {
    return <h1>Habilite a localização no browser</h1>;
  } else if (weather === null) {
    return <h1>Carregando dados...</h1>;
  } else {
    return (
      <section className="max-w-[900px]  mx-auto flex flex-col justify-center p-6 gap-20 ">
        <WeatherInfo weather={weather} />
        <WeatherDetails weather={weather} />
      </section>
    );
  }
}
