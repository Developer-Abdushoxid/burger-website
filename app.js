const card = document.querySelector('.card')
  swiper = document.querySelector('.swiper-wrapper')


  const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});
  
const data = [
  {
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
        title: 'Nature salat',
        created_at: 'September 23, 2023',
        headTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        author: {
          name: 'Abdushoxid',
          job: 'Web-developer',
          avatar: 'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg'
        }
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHDupAZq9URWaaoatKtHPFfuG21-_HVFb8A&usqp=CAU',
        title: 'Nature salat',
        created_at: 'September 23, 2023',
        headTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        author: {
          name: 'Abdushoxid',
          job: 'Web-developer',
          avatar: 'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg'
        }
      },
      {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtF3ZqJ3MzjaujviIl0Ad4pGA6wZbdMNNI0ULB5LlPIruTsPDacRAwxdUOd10FZQiEyw0&usqp=CAU',
        title: 'Nature salat',
        created_at: 'September 23, 2023',
        headTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        author: {
          name: 'Abdushoxid',
          job: 'Web-developer',
          avatar: 'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg'
        }
      },
     
]




data.map(item => (
  card.innerHTML += `
    <div class="card-item">
      <img src="${item.img}" alt="product">
      <div class="info">
        <h5 class="title">${item.title} - ${item.created_at}</h5>
        <h2 class="head-title">${item.headTitle.slice(0, 25)}</h2>
        <p class="description">${item.description.slice(0, 100)}</p>
      </div>
      <div class="author">
        <img src="${item.author.avatar}" alt="author image">
        <div class="full-name">
          <h4 class="name">${item.author.name}</h4>
          <h4 class="job">${item.author.job}</h4>
        </div>
      </div>
  
    </div>
  
  
  ` 
))


