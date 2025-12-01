import React from "react";
import { experiences } from "@/lid/experience";

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white shadow p-6 rounded-xl border border-gray-200"
          >
            <h2 className="text-2xl font-semibold">
              {exp.role} – <span className="text-blue-600">{exp.company}</span>
            </h2>
            <p className="text-gray-600">{exp.period} • {exp.location}</p>

            <ul className="mt-4 space-y-2 list-disc ml-6 text-gray-700">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
