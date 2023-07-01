let allpath = document.querySelectorAll("path");

let selectedCountry = document.querySelector(".country");

let map = document.querySelector(".world");

let image_close = document.querySelector(".back-button");

let image_des = document.querySelector(".image_des");

let image_text = document.querySelector('.image_text')

console.log(image_close, image_des , image_text);

allpath.forEach((path) => {
  path.addEventListener("click", () => {
    const name = path.getAttribute("id");

    const countryCode = (iso) => {
      // console.log(iso)

      const apiUrl = "https://api.gbif.org/v1/occurrence/search/";

      // Define a function to retrieve the occurrence records for Somalia
      const getOccurrences = async () => {
        try {
          const response = await fetch(
            `${apiUrl}?country=${iso}&mediaType=StillImage`
          );
          const data = await response.json();
          const results = data.results;
        //   console.log(results)
          const images = [];

          // Extract up to six different image URLs from the occurrence records
          for (let i = 0; i < results.length && images.length < 6; i++) {
            const media = results[i].media;
            if (media && media[0] && media[0].identifier) {
              const imageUrl = media[0].identifier;
              if (!images.includes(imageUrl)) {
                images.push(imageUrl);
              }
            }
          }
          console.log(data.results);

       



              
    const names = [];

    for (let i = 0; i < results.length && names.length < 6; i++) {
      const genericName = results[i].genericName;
      if (genericName[0] && genericName && genericName) {
        const name = genericName;
        if (!names.includes(name)) {
          names.push(name);
          console.log(name);
        }
      }
     
      // console.log(imageDescription);
    }
    console.log(names);
          

          
          
          let imageHtml = "";
          images.forEach((imageUrl) => {
            imageHtml += `
                <div class="image">
                <img src=${imageUrl} width="320" alt="">
                
                </div>
                ` 
                
          });

          

          selectedCountry.innerHTML = `<div class="heading">
        <h1>The Selected Country is <span>${name}</span></h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
    </div>

    <h3>So here is some Species from <span>${name}</span></h3>
<div class="images">
   ${imageHtml}
    </div>
   `;

  let imagest = selectedCountry.querySelectorAll('.image')

  
  

  

  imagest.forEach((image) => {
    console.log(image)
    image.addEventListener('click' , () => {
      console.log(image)
      url = image.querySelector('img')

      console.log(url.src)

      

    selectedCountry.style.display = "none";


    console.log(image_des)

    
    const names = [];

  for (let i = 0; i < results.length && names.length < 6; i++) {
    const genericName = results[i].genericName;
    if (genericName[0] && genericName && genericName) {
      const name = genericName;
      if (!names.includes(name)) {
        names.push(name);
        console.log(name);
      }
    }
   
    // console.log(imageDescription);
  }
  console.log(names);
  let namesHtml = ""; 
  for(let i = 0; i < names.length; i++){
     namesHtml = `<h1>${names[i]}</h1>`
     console.log(names[i])
  }
      
      image_text.innerHTML = `<img src=${url.src} height="320px" alt="">
      <div class="text">
         ${namesHtml}
          <p>Country Name : ${name}</p>

      </div>`

      image_des.style.display = "block";
    })
  })


console.log(image_text)

   

   close.addEventListener("click", () => {
    selectedCountry.style.display = "none";
    map.style.display = "block";
  });
        } catch (error) {
          console.error(error);
          throw error;
        }
      };
      getOccurrences();
    };

    const getCca2 = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        countryCode(data[0].altSpellings[0]);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    getCca2();

    map.style.display = "none";

    selectedCountry.style.display = "block";

    let close = selectedCountry.querySelector(".close");

    image_close.addEventListener('click' , () => {
      window.location.href = './../index.html';
  })

    
  });
});





