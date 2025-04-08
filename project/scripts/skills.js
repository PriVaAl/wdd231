import { skills } from '../data/skills.mjs';
console.log(skills);

const showHere = document.querySelector("#allskills")

function displaySkills(skillsList) {
    skillsList.forEach(skill => {
      const card = document.createElement('div');

      const image = document.createElement('img');
      image.src = `images/${skill.image}`;
      image.alt = skill.name;
      image.loading = "lazy";
      card.appendChild(image);

      const title = document.createElement('h2');
      title.innerText = skill.title;
      card.appendChild(title);

      const importance = document.createElement('importance');
      importance.innerText = skill.importance;
      card.appendChild(importance);

      const description = document.createElement('p');
      description.innerText = skill.description;
      card.appendChild(description);

      const button = document.createElement('button');
      button.innerText = "Learn More";
      button.addEventListener("click", () => {
        window.open(skill.link, "_blank");
      });
      card.appendChild(button);

      showHere.appendChild(card)
    })
  }

  displaySkills(skills)