import Link from "next/link";

const destinations = [
  {
    city: "Алматы",
    country: "Казахстан",
    description: "Горы, природа и красивые виды",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    city: "Париж",
    country: "Франция",
    description: "Романтика, архитектура и культура",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    city: "Стамбул",
    country: "Турция",
    description: "История, море и восточная атмосфера",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              ✈ Твои путешествия начинаются здесь
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Открой мир.
              <br />
              <span className="text-blue-700">Создай свой</span>
              <br />
              маршрут.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
              Планируй путешествия, собирай интересные места и создавай
              незабываемые маршруты в одном удобном пространстве.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/trips"
                className="rounded-full bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-800"
              >
                Создать путешествие →
              </Link>

              <Link
                href="/trip"
                className="rounded-full border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Посмотреть маршрут
              </Link>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">∞</p>
                <p className="text-sm text-gray-500">Новые возможности</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-500">Место для всех планов</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500">Твои идеи</p>
              </div>
            </div>
          </div>

          <div
            className="relative min-h-[420px] overflow-hidden rounded-[32px] bg-cover bg-center shadow-2xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-medium text-white/80">
                Вдохновение для поездки
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Мир ждёт тебя
              </h2>
            </div>

            <div className="absolute right-6 top-6 rounded-2xl bg-white/90 px-5 py-3 text-sm font-semibold text-gray-800 shadow-lg backdrop-blur">
              ✨ Время путешествовать
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-blue-700">ВДОХНОВЕНИЕ</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Популярные направления
              </h2>
              <p className="mt-3 text-gray-500">
                Выбери место, которое хочешь открыть для себя.
              </p>
            </div>

            <Link
              href="/trips"
              className="font-semibold text-blue-700 hover:text-blue-900"
            >
              Мои путешествия →
            </Link>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.city}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="h-64 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                  }}
                />

                <div className="p-6">
                  <p className="text-sm font-medium text-blue-700">
                    {destination.country}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {destination.city}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {destination.description}
                  </p>

                  <Link
                    href="/trips"
                    className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
                  >
                    Спланировать поездку →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] bg-blue-700 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Твоё следующее путешествие начинается сегодня
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Создай собственный маршрут, добавь интересные места и
            организуй поездку так, как нравится именно тебе.
          </p>

          <Link
            href="/trips"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Начать планирование
          </Link>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 TripCraft. Планируй путешествия с удовольствием.
      </footer>
    </main>
  );
}