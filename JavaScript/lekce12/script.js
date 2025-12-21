const form = document.querySelector(".form");
const input = document.querySelector("#author");
const contentInput = document.querySelector("#content");
const btnSubmit = document.querySelector("#submit");
const postsList = document.querySelector("#postsList");

let editID = null;

const loadPosts = async () => {
    try {
        const res = await axios.get("http://localhost:3001/posts");
        const data = res.data;
        console.log(data);

        postsList.innerHTML = "";

        data.forEach(post => {
            const li = document.createElement("li");
            li.innerHTML = `
            <h3>${post.name}</h3>
            <p>${post.post} <span>${post.like}</span></p>
            `;

            const like = document.createElement("button");
            like.textContent = "💗 Like"
            like.addEventListener("click", ()=>{
               post.like++
               li.querySelector("span").textContent = post.like;
            })


            const editBtn = document.createElement("button")
            editBtn.textContent = "Edit";
            editBtn.style.marginLeft = "20px";
            editBtn.style.marginRight = "20px";

            editBtn.addEventListener("click", () => openEdit(post));

            const delBtn = document.createElement("button")
            delBtn.textContent = "Delete";
            delBtn.addEventListener("click", () => deletePost(post.id));

            li.append(like, editBtn, delBtn)
            postsList.append(li);
        });

    } catch (error) {
        console.error("Error", error)
    }
}

loadPosts();

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const author =  input.value.trim();
    const content = contentInput.value;
   
    if(!author || !content){
        alert("The input is empy!")
        return
    }

    try {
        if(editID){
            await axios.put(`http://localhost:3001/posts/${editID}`, {
            id: editID,
            name: author,
            post: content,
            like: like
            })

        } else {

        await axios.post("http://localhost:3001/posts", 
            {
            id: new Date(),
            name: author,
            post: content,
            like: 0
        })
    }

    loadPosts()
    } catch (error) {
        console.error("Error", error)
    }
})

async function deletePost(id) {
    try {
        // DELETE-запрос по id поста
        await axios.delete(`http://localhost:3001/posts/${id}`);

        // Обновляем список
        loadPosts();
    } catch (error) {
        console.error("Ошибка при удалении поста", error);
    }
}

function openEdit(post){
    input.value = post.name;
    contentInput.value = post.post;

    btnSubmit.textContent = "Seve edit";
    editID = post.id;
    like = post.like;
}


// GET — чтение данных,

// POST — создание нового поста,

// DELETE — удаление поста,

// PATCH — частичное обновление данных (например, лайки),

// PUT — полное обновление данных.