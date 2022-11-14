function getList(){
console.log("call getList");

const url = "http://127.0.0.1:8000/api/users";
axios.get(url).then((response)=>{
    const users = response.data.data;
    console.log("get users", users);
    users.forEach((user)=>{
        const li = document.createElement("li");
        li.innerHTML = `${user.name}: ${user.age}`;
        document.getElementById("myList").appendChild(li);
    });
});
}

function postUser(){
    console.log("call postUser");

}