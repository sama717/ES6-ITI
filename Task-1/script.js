let getUsers = document.getElementById("btn");
let tbody = document.getElementById("users");

getUsers.addEventListener('click', () => {
    tbody.innerHTML = "";
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json()) 
        .then(users => {
            users.forEach(user => {
                let id = document.createElement("td");
                id.textContent = user.id;

                let name = document.createElement("td");
                name.textContent = user.name;

                let username = document.createElement("td");
                username.textContent = user.username;

                let email = document.createElement("td");
                email.textContent = user.email;

                let phone = document.createElement("td");
                phone.textContent = user.phone;

                let website = document.createElement("td");
                website.textContent = user.website;

                let extra = document.createElement("td");
                let button = document.createElement("button");
                button.textContent = "Delete";
                button.setAttribute("id", user.id);
                extra.appendChild(button);

                let row = document.createElement("tr");
                row.append(id, name, username, email, phone, website, extra);
                tbody.append(row);

                button.addEventListener('click', () => {
                    row.remove(); 
                });
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
