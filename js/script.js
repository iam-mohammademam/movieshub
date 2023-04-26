const body = document.querySelector('body');
// Search Box
let searchIcon = body.querySelector('.search-icon i');
searchIcon.addEventListener('click', () => {
  let searchBar = body.querySelector('.searchbar');
  searchBar.classList.toggle('active');
  if (searchBar.classList.contains('active')) {
    searchIcon.classList.replace('uil-search', 'uil-times')
  } else {
    searchIcon.classList.replace('uil-times', 'uil-search')
  }
});
// Open Sidemenu
let menuIcon = body.querySelector('.menu-icon');
let sideBar = body.querySelector('.side-menu');
menuIcon.addEventListener('click', () => {
  body.style.overflow = "hidden";
  sideBar.classList.add('active');
  
});
// Close Sidemenu
let menuCloseIcon = body.querySelector('.close-menu');
menuCloseIcon.addEventListener('click', () => {
  body.style.overflow = "visible";
  sideBar.classList.remove('active');
});
// Show Movie Details
let figures = body.querySelectorAll('figure');
figures.forEach((figure) => {
  figure.addEventListener("click", (e) => {
    // Selected item
    let item = e.target,
      img = item.querySelector('img').src,
      rating = item.querySelector('#rating').textContent,
      breadcrumb = item.querySelector('#breadcrumb').textContent,
      type = item.querySelector('#type').textContent,
      resolution = item.querySelector('#resolution').textContent,
      description = item.querySelector('#description').textContent,
      runtime = item.querySelector('#runtime').textContent,
      year = item.querySelector('#year').textContent,
      genre = item.querySelector('#genre').textContent,
      title = item.querySelector('#title').textContent;
    //Select Preview container items
    let preview = body.querySelector('.preview-wrapper'),
      preImg = preview.querySelector('img'),
      preRating = preview.querySelector('#rating'),
      preBreadcrumb = preview.querySelector('#breadcrumb'),
      preType = preview.querySelector('#type'),
      preTitle = preview.querySelector('#title'),
      preResolution = preview.querySelector('#resolution'),
      preGenre = preview.querySelector('#genre'),
      preYear = preview.querySelector('#year'),
      preRuntime = preview.querySelector('#runtime'),
      preDescription = preview.querySelector('#description');

    preImg.src = img;
    preRating.textContent = rating;
    preBreadcrumb.textContent = breadcrumb;
    preRuntime.textContent = runtime;
    preType.textContent = type;
    preTitle.textContent = title;
    preResolution.textContent = resolution;
    preGenre.textContent = genre;
    preYear.textContent = year;
    preDescription.textContent = description;
  
    body.querySelectorAll('section').forEach((section) => {
      section.classList.add('hidden');
    })
    preview.classList.add('active');
    
  })
})
// Close Movie Details
let closeIcon = body.querySelector('.close-icon');
closeIcon.addEventListener("click",(e)=>{
    body.querySelectorAll('section').forEach((section) => {
      section.classList.remove('hidden');
    })
    preview.classList.remove('active');
})
// Show Genres
let subMenu = body.querySelector('.sub-menu');
let showGenres = body.querySelector('.show-genres');
showGenres.addEventListener('click',()=>{
  subMenu.classList.toggle('active');
});
// Pagination 
let ul = body.querySelector('.pagination ul');
let totalPages = 20,
  currPage = 5;
ul.innerHTML = createPagination(totalPages, currPage)
function createPagination(totalPages, currPage) {
  let li = ``,
    prevPage = currPage - 1,
    nextPage = currPage + 1;
 let active;
  if (currPage > 1) {
    li += `<li class="justify-center btn prev-btn pr-3 px-2 h-10 border-theme border-2 rounded-sm bg-theme text-bg" onclick="createPagination(totalPages,${currPage-1})">
      <i class="duration-400 uil uil-angle-left text-xl font-bold text-bg"></i>
      Prev
    </li>`;
  }
  if (currPage > 2) { //if page value is less than 2 then add 1 after the previous button
    li += `<li class="justify-center duration-400 w-10 h-10 border-2 text-md rounded-sm" onclick="createPagination(totalPages, 1)">1</li>`;
    if (currPage > 3) { //if page value is greater than 3 then add this (...) after the first li or page
      li += `<li class="justify-center duration-400 w-10 h-10 border-2 text-lg font-bold rounded-sm dots">...</li>`;
    }
  }
  if (currPage == totalPages) {
    prevPage = prevPage - 2;
  } else if (currPage == totalPages - 1) {
    prevPage = prevPage - 1;
  }
  // how many pages or li show after the current li
  if (currPage == 1) {
    nextPage = nextPage + 2;
  } else if (currPage == 2) {
    nextPage = nextPage + 1;
  }
  for (var plength = prevPage; plength <= nextPage; plength++) {
    if (plength > totalPages) { //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) { //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if (currPage == plength) { //if page is equal to plength than assign active string in the active variable
      active = "active";
    } else { //else leave empty to the active variable
      active = "";
    }
    li += `<li class="justify-center duration-400 w-10 h-10 border-2 text-md text-bg rounded-sm ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }
  if (currPage < totalPages - 1) { //if page value is less than totalPage value by -1 then show the last li or page
    if (currPage < totalPages - 2) { //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      li += `<li class="justify-center duration-400 w-10 h-10 border-2 text-lg font-bold rounded-sm dots"><span>...</span></li>`;
    }
    li += `<li class="justify-center duration-400 w-10 h-10 border-2 text-md font- rounded-sm" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  if (currPage < totalPages) {
    li += `<li class="justify-center btn next-btn pr-3 px-2 h-10 border-theme border-2 rounded-sm bg-theme text-bg" onclick="createPagination(totalPages,${currPage+1})">
      next
      <i class="duration-400 uil uil-angle-right text-xl font-bold text-bg"></i>
    </li>`;
  }
  ul.innerHTML = li;
  return li;
}
// Show Pagination
let seePagination = body.querySelector('#movies .see-all');
seePagination.addEventListener('click',()=>{
  body.querySelector('.pagination').classList.remove('hidden');
});