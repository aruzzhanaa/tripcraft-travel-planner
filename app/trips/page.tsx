
"use client";

import { useState } from "react";

type Trip = {
  id: number;
  name: string;
  city: string;
  date: string;
};

export default function TripsPage() {
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: 1,
      name: "Летний отпуск",
      city: "Париж",
      date: "15.07.2026",
    },
    {
      id: 2,
      name: "Путешествие мечты",
      city: "Стамбул",
      date: "20.08.2026",
    },
  ]);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  function addTrip() {
    if (!name.trim() || !city.trim() || !date) {
      alert("Заполните все поля!");
      return;
    }

    const newTrip: Trip = {
      id: Date.now(),
      name,
      city,
      date,
    };

    setTrips([...trips, newTrip]);

    setName("");
    setCity("");
    setDate("");
  }

  function deleteTrip(id: number) {
    setTrips(trips.filter((trip) => trip.id !== id));
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-2 font-semibold text-blue-700">
          TRIPCRAFT / МОИ ПОЕЗДКИ
        </p>

        <h1 className="text-4xl font-extrabold">
          Мои путешествия
        </h1>

        <p className="mt-3 text-gray-500">
          Создавай поездки, сохраняй идеи и планируй новые приключения.
        </p>
      </div>

      <section className="mb-12 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">
          Создать путешествие
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <input
           className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600"
            placeholder="Название поездки"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
           className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600"
            placeholder="Город"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
           className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          onClick={addTrip}
          className="mt-5 rounded-full bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          + Добавить путешествие
        </button>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Запланированные поездки
          </h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {trips.length} поездки
          </span>
        </div>

        {trips.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center">
            <p className="text-lg font-semibold">
              Пока нет путешествий
            </p>
            <p className="mt-2 text-gray-500">
              Создай свою первую поездку!
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="mb-2 text-sm font-medium text-blue-700">
                      МОЁ ПУТЕШЕСТВИЕ
                    </p>

                    <h3 className="text-xl font-bold">
                      {trip.name}
                    </h3>

                    <p className="mt-3 text-gray-600">
                      📍 {trip.city}
                    </p>

                    <p className="mt-2 text-gray-500">
                      📅 {trip.date}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteTrip(trip.id)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
