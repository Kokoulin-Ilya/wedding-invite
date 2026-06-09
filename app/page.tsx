'use client';

import { useState, useEffect } from 'react';

export default function WeddingInvitation() {
  const data = {
    names: 'Илья & Екатерина',
    date: '11.09.2026',
    heroDate: '11 SEP 26',
    title: 'ДОРОГИЕ ГОСТИ!',
    intro: (
      <>
        Один день в нашей жизни станет по-настоящему особенным, и мы будем счастливы разделить его с самыми близкими людьми.
        <br />
        С огромной радостью приглашаем вас на наш свадебный день!
      </>
    ),
    dressCode:
      'Для мужчин будет уместен классический костюм. Милых дам просим выбрать вечерние наряды в спокойных пастельных оттенках и по возможности избегать белого цвета.',
    location: 'Банкетный зал',
    address: 'г. Таганрог, Комсомольский б-р, 21',
    schedule: [
      { time: '17:00', title: 'Сбор гостей' },
      { time: '17:30', title: 'Выездная регистрация' },
      { time: '17:00–23:00', title: 'Праздничный банкет' },
      { time: '23:00-23:30', title: 'Завершение вечера' },
    ],
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // ИСПРАВЛЕНО: Явно указываем дату в UTC+3 (Москва/Таганрог)
    const targetDate = new Date('2026-09-11T17:00:00+03:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      // Если дата прошла или ошибка
      if (difference <= 0 || isNaN(difference)) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Запускаем сразу
    updateTimer();
    
    // Запускаем интервал
    const interval = setInterval(updateTimer, 1000);

    // Очищаем при размонтировании
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-700 flex justify-center py-10 px-4 font-serif">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div className="bg-[#f5f1ed] overflow-hidden shadow-2xl rounded-sm">
          <div
            className="relative h-[540px] bg-cover bg-center"
            style={{
              backgroundImage: 'url(/IMG_20260609_113850.jpg)',
            }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-white text-center leading-none mt-45">
                <div className="text-6xl font-light">11</div>
                <div className="text-5xl font-light tracking-wide">СЕНТЯБРЯ</div>
                <div className="text-6xl font-light">2026</div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10 text-5xl bottom-110">
              Наша свадьба
            </div>
          </div>

          <div className="px-8 py-16 text-center bg-[#f5f1ed]">
            <h2 className="text-4xl mb-8 tracking-wide text-[#4f4d4d]">{data.title}</h2>
            <p className="text-neutral-700 leading-8 text-lg max-w-xl mx-auto">
              {data.intro}
            </p>

            <div className="mt-10 text-3xl italic text-neutral-500">{data.date}</div>

            <div className="mt-3 text-4xl italic text-neutral-700">{data.names}</div>
          </div>

          {/* ТАЙМЕР */}
          <div className="bg-neutral-700 text-white py-8 px-4 grid grid-cols-4 text-center">
            {[
              [timeLeft.days, 'Дней'],
              [timeLeft.hours, 'Часов'],
              [timeLeft.minutes, 'Минут'],
              [timeLeft.seconds, 'Секунд'],
            ].map((item, index) => (
              <div key={index} className="border-r last:border-none border-white/20">
                <div className="text-2xl">{item[0]}</div>
                <div className="text-sm opacity-70 mt-1">{item[1]}</div>
              </div>
            ))}
          </div>

          <div className="px-8 py-16 text-center">
            <h3 className="text-4xl mb-8 tracking-wide text-[#4f4d4d]">DRESS CODE</h3>
            <p className="text-neutral-700 leading-8 text-lg max-w-xl mx-auto">
              {data.dressCode}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#f5f1ed] px-8 py-14 shadow-2xl rounded-sm">
          <h2 className="text-5xl text-center mb-4 text-[#4f4d4d]">Расписание дня</h2>
          <div className="text-center text-neutral-500 text-xl mb-14">
            11 сентября 2026 г.
          </div>

          <div className="relative border-l border-neutral-300 ml-6 space-y-14 pb-12">
            {data.schedule.map((item, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-neutral-500" />

                <div className="text-neutral-500 text-xl text-[#4f4d4d]">{item.time}</div>
                <div className="text-3xl mt-3 leading-snug text-[#4f4d4d]">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-5xl text-center mb-8 text-[#4f4d4d]">Место проведения</h3>

            <div className="text-center space-y-3 mb-8">
              <div className="text-2xl text-[#4f4d4d]">{data.location}</div>
              <div className="text-lg text-neutral-600">{data.address}</div>
            </div>

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Комсомольский%20бульвар%2021,%20Таганрог&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] border-none rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}