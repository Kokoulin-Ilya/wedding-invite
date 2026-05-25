export default function WeddingInvitation() {
  const data = {
    names: 'Дмитрий & Хуйня',
    date: '05.10.24',
    heroDate: '12 OCT 24',
    title: 'ДОРОГИЕ ГОСТИ!',
    intro:
      'Один день в этом году будет для нас особенным, и мы хотим провести его в кругу близких и друзей. С большим удовольствием приглашаем Вас на знаменательный праздник — нашу свадьбу!',
    dressCode:
      'Для мужчин уместным будет классический костюм. А милых дам просим выбрать вечерние наряды и избегать белого цвета.',
    location: 'Ресторан «Golden Villa»',
    address: 'г. Краснодар, ул Петра Метальникова, 134',
    schedule: [
      {
        time: '11:30–12:30',
        title: 'Выкуп невесты',
      },
      {
        time: '14:00',
        title: 'Бракосочетание',
      },
      {
        time: '15:30',
        title: 'Фотосессия. Свободное время',
      },
      {
        time: '17:30–23:30',
        title: 'Праздничный банкет',
      },
    ],
  }

  return (
    <div className="min-h-screen bg-neutral-700 flex justify-center py-10 px-4 font-serif">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div className="bg-[#f5f1ed] overflow-hidden shadow-2xl rounded-sm">
          <div
            className="relative h-[540px] bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop)',
            }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute top-10 left-10 text-white z-10 tracking-[0.3em] text-xs uppercase">
              Save the date
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="text-white text-center leading-none">
                <div className="text-7xl font-light">12</div>
                <div className="text-6xl font-light tracking-wide">OCT</div>
                <div className="text-7xl font-light">24</div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white uppercase text-xs tracking-[0.3em] z-10">
              Our Wedding
            </div>
          </div>

          <div className="px-8 py-16 text-center bg-[#f5f1ed]">
            <h2 className="text-4xl mb-8 tracking-wide">{data.title}</h2>
            <p className="text-neutral-700 leading-8 text-lg max-w-xl mx-auto">
              {data.intro}
            </p>

            <div className="mt-10 text-3xl italic text-neutral-500">
              {data.date}
            </div>

            <div className="mt-3 text-4xl italic text-neutral-700">
              {data.names}
            </div>
          </div>

          <div className="bg-neutral-700 text-white py-8 px-4 grid grid-cols-4 text-center">
            {[
              ['15', 'Дней'],
              ['14', 'Часов'],
              ['50', 'Минут'],
              ['02', 'Секунд'],
            ].map((item, index) => (
              <div key={index} className="border-r last:border-none border-white/20">
                <div className="text-2xl">{item[0]}</div>
                <div className="text-sm opacity-70 mt-1">{item[1]}</div>
              </div>
            ))}
          </div>

          <div className="px-8 py-16 text-center">
            <h3 className="text-4xl mb-8 tracking-wide">DRESS CODE</h3>
            <p className="text-neutral-700 leading-8 text-lg max-w-xl mx-auto">
              {data.dressCode}
            </p>
          </div>

          <div className="px-8 pb-16 text-center">
            <h3 className="text-4xl mb-8 leading-tight">
              Пожалуйста, подтвердите свое присутствие
            </h3>

            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Ваше имя и фамилия"
                className="w-full border border-neutral-300 p-4 bg-white"
              />

              <select className="w-full border border-neutral-300 p-4 bg-white">
                <option>Смогу присутствовать</option>
                <option>К сожалению, не смогу</option>
              </select>

              <button className="w-full bg-neutral-800 text-white py-4 uppercase tracking-[0.2em] hover:bg-black transition">
                Отправить
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#f5f1ed] px-8 py-14 shadow-2xl rounded-sm">
          <h2 className="text-5xl text-center mb-4">Расписание дня</h2>
          <div className="text-center text-neutral-500 text-xl mb-14">
            5 октября 2024 г.
          </div>

          <div className="relative border-l border-neutral-300 ml-6 space-y-14 pb-12">
            {data.schedule.map((item, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-neutral-500" />

                <div className="text-neutral-500 text-xl">{item.time}</div>
                <div className="text-3xl mt-3 leading-snug">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-5xl text-center mb-8">Место проведения</h3>

            <div className="text-center space-y-3 mb-8">
              <div className="text-2xl">{data.location}</div>
              <div className="text-lg text-neutral-600">{data.address}</div>
            </div>

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Krasnodar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[300px] border-none rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
