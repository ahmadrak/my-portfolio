import { skills } from "@/lid/skills";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          My Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h2>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="py-2 px-3 bg-gray-100 rounded-lg text-gray-800 font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
