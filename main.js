// main.js

function renderSection(sectionId, title, people) {
  const section = document.getElementById(sectionId);
  section.innerHTML = `
    <h3 class="text-3xl font-bold mb-8 text-center text-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">${title}</h3>
    <div class="flex flex-wrap gap-8 justify-center">
      ${people.map(person => `
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 w-56 group relative overflow-hidden">
          <img src="${person.img}" alt="${person.name}" class="w-28 h-28 rounded-full object-cover border-4 border-blue-200 mb-4 group-hover:scale-105 transition-transform duration-300" />
          <span class="font-semibold text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-200">${person.name}</span>
        </div>
      `).join('')}
    </div>
  `;
}

renderSection("founders", "Founders", founders);
renderSection("faculty", "Faculty Coordinators", faculty);
renderSection("core", "Core Committee", coreCommittee);
renderSection("working", "Working Committee", workingCommittee);
