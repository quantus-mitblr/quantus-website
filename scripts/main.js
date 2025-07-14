function renderSection(sectionId, title, people) {
  const section = document.getElementById(sectionId);
  section.innerHTML = `
    <h3 style="text-align:center;font-size:1.35rem;color:#4b5563;margin-bottom:1em;">${title}</h3>
    <div class="people">
      ${people.map(person => `
        <div class="person">
          <img src="${person.img}" alt="${person.name}" />
          <div class="person-name">${person.name}</div>
        </div>
      `).join('')}
    </div>
  `;
}

renderSection("founders", "Founders", founders);
renderSection("faculty", "Faculty Coordinators", faculty);
renderSection("core", "Core Committee", coreCommittee);
renderSection("working", "Working Committee", workingCommittee);
