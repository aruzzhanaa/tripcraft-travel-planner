
"use client";

import { useState } from "react";

export default function TripPage() {
  const [places, setPlaces] = useState([
    "Эйфелева башня",
    "Лувр",
    "Собор Парижской Богоматери",
  ]);

  const [newPlace, setNewPlace] = useState("");

  function addPlace() {
    if (!newPlace.trim()) return;

    setPlaces([...places, newPlace]);
    setNewPlace("");
  }

  function deletePlace(index: number) {
    setPlaces(places.filter((_, i) => i !== index));
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-12">
      <p className="mb-2 font-semibold text-blue-700">
        TRIPCRAFT / МОЙ МАРШРУТ
      </p>

      <h1 className="text-4xl font-extrabold text-gray-900">
        Детали путешествия
      </h1>

      <p className="mt-3 text-gray-500">
        Планируй посещение интересных мест и создавай свой маршрут.
      </p>

      <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          Париж, Франция
        </h2>

        <p className="text-gray-500">
          Твой маршрут для незабываемого путешествия.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            value={newPlace}
            onChange={(e) => setNewPlace(e.target.value)}
            placeholder="Название нового места"
            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-600"
          />

          <button
            onClick={addPlace}
            className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
          >
            + Добавить место
          </button>
        </div>

        <h3 className="mb-5 mt-10 text-xl font-bold text-gray-900">
          Места для посещения
        </h3>

        <div className="space-y-3">
          {places.map((place, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                  {index + 1}
                </span>

                <span className="font-medium text-gray-900">
                  {place}
                </span>
              </div>

              <button
                onClick={() => deletePlace(index)}
                className="text-sm font-medium text-red-500 hover:text-red-700"
              >
                Удалить
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Всего мест в маршруте: {places.length}
        </p>
      </section>
    </main>
  );
}
