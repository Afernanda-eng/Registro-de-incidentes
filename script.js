const form = document.getElementById("incidentForm");
const list = document.getElementById("incidentList");

form.addEventListener("submit", function (e) {
e.preventDefault();

const user = document.getElementById("user").value;
const problem = document.getElementById("problem").value;
const urgency = document.getElementById("urgency").value;

const li = document.createElement("li");
li.textContent = `${user} — ${problem} (Urgência: ${urgency})`;

list.appendChild(li);

form.reset();
});