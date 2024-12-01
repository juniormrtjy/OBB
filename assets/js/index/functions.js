import { posts } from './data.js'

const feed = document.querySelector('.feed')

posts.forEach(post => {
  feed.innerHTML += `
   <!-- BOX -->
            <div class="box">
              <figure>
                <img
                  src="${post.img}"
                  alt="${post.imgAlt}"
                />
              </figure>
              <div class="info grid">
                <h3>${post.title}</h3>
                <p class="description">
                  ${post.description}
                </p>
                <hr />
                <p class="author">
                  <strong>${post.author}</strong>
                  <strong class="date">${post.date}</strong>
                </p>
              </div>
            </div>
   <!-- ... --> 
  
  `
})
