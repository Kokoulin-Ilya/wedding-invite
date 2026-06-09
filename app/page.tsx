'use client'

const wedding = {
groom: 'Илья',
bride: 'Екатерина',
date: '11 сентября 2026',
city: 'г. Таганрог',

schedule: [
{
time: '14:00',
title: 'Сбор гостей',
},
{
time: '15:00',
title: 'Церемония бракосочетания',
},
{
time: '16:00',
title: 'Фотосессия и фуршет',
},
{
time: '18:00',
title: 'Праздничный банкет',
},
],
}

export default function Page() {
return (
<main
style={{
background: '#d7dfcd',
minHeight: '100vh',
display: 'flex',
justifyContent: 'center',
padding: '20px 10px',
}}
>
<div
style={{
width: '100%',
maxWidth: '430px',
display: 'flex',
flexDirection: 'column',
gap: '16px',
}}
>
<section
style={{
background: '#f7f5ef',
padding: '50px 30px',
textAlign: 'center',
}}
>
<h1
style={{
fontSize: '52px',
fontWeight: 300,
lineHeight: 1.1,
marginBottom: '20px',
}}
>
{wedding.groom} <br />
& <br />
{wedding.bride} </h1>

```
      <p style={{ fontSize: '22px' }}>
        11 | сентября | 2026
      </p>
    </section>

    <section
      style={{
        background: '#f7f5ef',
      }}
    >
      <img
        src="/photo1.jpg"
        alt=""
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    </section>

    <section
      style={{
        background: '#f7f5ef',
        padding: '40px 30px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          fontSize: '28px',
        }}
      >
        Дорогие гости!
      </h2>

      <p
        style={{
          lineHeight: 1.8,
          color: '#555',
        }}
      >
        Совсем скоро в нашей жизни произойдет
        одно из самых важных событий.
        Мы будем счастливы разделить этот день
        вместе с вами.
      </p>
    </section>

    <section
      style={{
        background: '#f7f5ef',
        padding: '40px 30px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          fontSize: '28px',
        }}
      >
        Место проведения
      </h2>

      <p style={{ marginBottom: '10px' }}>
        Банкетный зал
      </p>

      <p style={{ color: '#666' }}>
        {wedding.city}
      </p>

      <a
        href="https://yandex.ru/maps"
        target="_blank"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '12px 20px',
          border: '1px solid #999',
          color: '#333',
          textDecoration: 'none',
        }}
      >
        Открыть карту
      </a>
    </section>

    <section
      style={{
        background: '#f7f5ef',
        padding: '40px 30px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '28px',
        }}
      >
        План дня
      </h2>

      {wedding.schedule.map((item) => (
        <div
          key={item.time}
          style={{
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              marginBottom: '10px',
            }}
          >
            {item.time}
          </div>

          <div>{item.title}</div>
        </div>
      ))}
    </section>

    <section
      style={{
        background: '#f7f5ef',
        padding: '40px 30px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          fontSize: '28px',
        }}
      >
        Подтвердите присутствие
      </h2>

      <p
        style={{
          marginBottom: '25px',
          color: '#666',
        }}
      >
        Будем рады видеть вас на нашей свадьбе
      </p>

      <button
        style={{
          padding: '15px 30px',
          border: '1px solid #999',
          background: 'white',
          cursor: 'pointer',
        }}
      >
        Подтвердить
      </button>
    </section>

    <section
      style={{
        background: '#f7f5ef',
        padding: '40px 30px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          fontSize: '28px',
        }}
      >
        Детали
      </h2>

      <p
        style={{
          lineHeight: 1.8,
          color: '#555',
        }}
      >
        Вместо цветов будем рады бутылке вина
        для нашей семейной коллекции.
      </p>
    </section>

    <section
      style={{
        background: '#f7f5ef',
      }}
    >
      <img
        src="/photo2.jpg"
        alt=""
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    </section>
  </div>
</main>

)
}
