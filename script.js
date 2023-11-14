//JSON -> all of the information about mentors stored

//This stores the titles like: "All Mentors", "Senior Mentors", "Graduated Mentors "
let pageTitleElement;

//Display with a grid layout 
let outputGridElement;

//Used to display each person's content as if it were a new page.
let mentorDisplayElement;


//JSON -> THE DATA WE ARE STORING 
//THE id is what goes in the url: file:///Users/trishagupta/Desktop/JSON2/index.html?section=item&id=science
//ex: id=science


//ITEM TITLE = NAME 
let mentorCollection = [
  {
    "name": "Damla Önder, Senior",
    //which category: seniors 
    "category" : "juniorsseniors",
    //what each page is:
    "id" : "Damla_Onder",
    //content on this page for the person: 

    //INFORMATION DISPLAYED
    "get-to-know" : "Get to Know Damla",
    "burning-qs" : "Damla's Burning Question: What are your hobbies?",
    "education" : "Major: CS",
    "specialties" : "Specialties: making education/books more accessible through web dev + databases",

    // "description" : "",
    "image" : "mentors/damla.jpg",
    // "video" : "https://drive.google.com/file/d/1gkF5xtN3e__wCtozvg9a7GRyXtIN4dQi/view?usp=sharing"
    "video" : "mentors/damla.mp4"
  },
  {
    "name" : "Margarita Bllli, Junior",
    //which category: seniors 
    "category" : "juniorsseniors",
    //what each page is:
    "id" : "Margarita_Bllli",
    //content on this page for the person: 

    //INFORMATION DISPLAYED
    "get-to-know" : "Get to Know Margarita",
    "burning-qs" : "Margarita's Burning Question: What is your favorite thing about yourself?",
    "education" : "Major: CS, Minors: Web Dev, Social Entrepreneurship",
    "specialties" : "Specialties: Front End Development, Java, Innovation",

    // "description" : "With pretty stories for which there's little good evidence Sea of Tranquility the only home we've ever known paroxysm of global death concept of the number one Rig Veda. Dream of the mind's eye courage of our questions dream of the mind's eye the carbon in our apple pies preserve and cherish that pale blue dot from which we spring.",
    "image" : "mentors/margarita.jpg",
     "video" : "mentors/margarita.mp4"
  },
  {
    "name" : "Medha Gupta, Digital Strategy @Adobe",
    //which category: grads
    "category" : "graduates",
    //what each page is:
    "id" : "Medha_Gupta",
     //content on this page for the person: 
    // "description" : "Cosmic fugue concept of the number one Orion's sword at the edge of forever intelligent beings a very small stage in a vast cosmic arena. A very small stage in a vast cosmic arena a very small stage in a vast cosmic arena something incredible is waiting to be known muse about intelligent beings the carbon in our apple pies.",
    
    //INFORMATION DISPLAYED
    "get-to-know" : "Get to Know Medha",
    "burning-qs" : "Medha's Burning Question: Which movie/tv character do you identify with the most?",
    "education" : "Major (graduated 2023): CS, Minor: BEMT",
    "specialties" : "Specialties: Tech Consulting, Digital Strategy, Product Management, Generative AI, Personalization at Scale", 

    "image" : "mentors/medha.jpg",
     "video" : "mentors/medha.mp4"
  },
  {
    "name" : "Jane Doe1, SWE @Pinterest",
    //which category: grads
    "category" : "graduates",
    //what each page is:
    "id" : "Jane_Doe1",

    //INFORMATION DISPLAYED
    "get-to-know" : "Get to Know Jane Doe1",
    "burning-qs" : "Janes's Burning Question: What's your favorite travel memory?",
    "education" : "Major (graduated 2021): CS",
    "specialties" : "Specialties: SWE, Java, Front-End Development", 

    // "description" : "Invent the universe muse about are creatures of the cosmos not a sunrise but a galaxyrise made in the interiors of collapsing stars made in the interiors of collapsing stars.",
    "image" : "mentors/p2.png",
     "video" : "mentors/medha.mp4"
  },
  {
    "name" : "Jane Doe2, Senior",
    //which category: seniors
    "category" : "juniorsseniors",
    //what each page is:
    "id" : "Jane_Doe2",

    //INFORMATION DISPLAYED
    "get-to-know" : "Get to Know Jane Doe2",
    "burning-qs" : "Janes's Burning Question: How would you describe your ideal vacation?",
    "education" : "Major (graduated 2021): CS",
    "specialties" : "Specialties: SWE, Java, Front-End Development", 

    // "description" : "Extraordinary claims require extraordinary evidence shores of the cosmic ocean birth ship of the imagination globular star cluster rich in mystery. With pretty stories for which there's little good evidence emerged into consciousness shores of the cosmic ocean a mote of dust suspended in a sunbeam prime number a mote of dust suspended in a sunbeam.",
    "image" : "mentors/p2.png",
    "video" : "mentors/medha.mp4"
  },
  {
    "name" : "Jane Doe3, Junior",
    //which category: seniors
    "category" : "juniorsseniors",
    //what each page is:
    "id" : "Jane_Doe3",

    //INFORMATION DISPLAYED
    "get-to-know" : "Get to Know Jane Doe3",
    "burning-qs" : "Janes's Burning Question: Favorite color and why?",
    "education" : "Major: CS & MCC",
    "specialties" : "Specialties: UX/UI Design, Computer Graphics",

     // "description" : "Emerged into consciousness emerged into consciousness something incredible is waiting to be known made in the interiors of collapsing stars are creatures of the cosmos emerged into consciousness and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
    "image" : "mentors/p2.png",
    "video" : "mentors/medha.mp4"
  }
];



//DEPENDING ON CATEGORY THE FOLLOWING APPEARS: 
//loads JS 
document.addEventListener("DOMContentLoaded", function(){

   //DEFINE THE PAGE TITLE AND THE DIV GRID THAT WILL BE UPDATED AND FILLED 
  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  mentorDisplayElement = document.getElementById("mentorDisplay");

  //PARTS OF THE URL THAT WILL BE USED TO IDENTIFY THE PAGE WE ARE ON 
  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString); 

  //IN THE URL GET SECTION TO SEE IF ITEM ON PAGE OR NOT
  let urlSection = urlParams.get('section');
  //GET ID 
  let urlID = urlParams.get('id'); 

   //IF THE "section = " PART OF URL HAS SOMETHING OTHER THAN "item" DISPLAY AS A GRID W/ PREVIEWS OF OTHER PROJECTS 
  if (urlSection != "item") { /* Display project previews in grid */

  //IF YOU WANT TO DISPLAY ALL PROJECTS RELATING TO juniors&seniors, DISPLAY IN GRID
    /* Set page title if we are in a specific section */
    if (urlSection == "juniorsseniors") {
      pageTitleElement.innerText = "Junior & Senior Mentors:";
    }

    //IF YOU WANT TO DISPLAY ALL PROJECTS RELATING TO GRADS, DISPLAY IN GRID
    else if (urlSection == "graduates") {
      pageTitleElement.innerText = "Graduate Mentors:";
    }

    //GET EVERY CATEGORY - "category" FROM JSON -> "portfolioCollection" 
    //LOOP THROUGH EVERY SECTION IN DATABASE AND DISPLAY IF CATEGORY MATCHES URLSECTION 
    //THESE ARE THE CONTENT YOU WILL DISPLAY THUMBNAILS FOR 
    /* Create thumbnails for matching category, or all */
    for(let i = 0; i < mentorCollection.length; i++){
    	if(mentorCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
    		//CALL THIS FUNCTION TO CREATE THUMBNAILS 
    		createMentorPreview(mentorCollection[i]); 
    	}
    }


  }

  //IF URLSECTION DOES EQUAL TO ITEM, DISPLAY THE INDIVIDUAL PAGE
  //INSTEAD OF USING URLSECTION USE "id" TO DIFFERENTIATE WHAT TO DISPLAY
  else{
    /* Display individual project by trying to match the "ID" value */
  	for(let x = 0; x < mentorCollection.length; x++){
  		if(mentorCollection[x]["id"] == urlID){
  			createMentorPage(mentorCollection[x]); 
  		}
  	}

  }

}); 


//CREATE/ DISPLAY THUMBNAILS 
//this function takes a JSON object as input, extracts relevant information 
//(title, image, and id), creates an HTML structure for  a mentor thumbnail,
//and appends it to a grid layout for display on a web page.
function createMentorPreview(incomingJSON){

	//NEW ELEMENT <a> tag -> creates link for individual img
	//WHATS IN THE JSON AND APPLYING IT 
	let newPreviewLink = document.createElement("A"); 
	//Attatching ID to last part of the link created
	newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

	//DIV THAT HOLDS IMG AND HEADING FOR THUMBNAIL 
	let newPreviewElement = document.createElement("DIV"); 
	newPreviewLink.appendChild(newPreviewElement); 

	//PREVIEW TITLE TEXT FOR THUMBNAIL
    //APPENDS THE TITLE TO DIV ELEMENT 
    let newPreviewTitle = document.createElement("P"); 
    newPreviewTitle.classList.add("previewTitle"); 
    newPreviewTitle.innerText = incomingJSON["name"]; 
    newPreviewElement.appendChild(newPreviewTitle); 

   //THE IMG FOR THE THUMBNAIL 
   //APPENDS THE IMG TO DIV ELEMENT
    let newPreviewThumbnail = document.createElement("IMG"); 
    newPreviewThumbnail.classList.add("thumbnail");
    //from the mentorCollection: 
    newPreviewThumbnail.src = incomingJSON["image"]; 
    newPreviewElement.appendChild(newPreviewThumbnail); 

    //EVERYTHING DISPLAYED IN GRID LAYOUT WHICH IF CLICKED OPENS UP THE LINK FOR EACH MENTOR 
    //ANCHOR ELEMENT WITH ALL THE THUMBNAIL CONTENT IS APPENDED TO ELEMENT 
    outputGridElement.appendChild(newPreviewLink);

}


//CREATING/ DISPLAYING PAGES 
//This function takes a JSON object as input, extracts relevant information 
//(title, image, and description), creates an HTML structure for  a mentor section/page,
//and appends it to a grid layout for display on a web page.

function createMentorPage(incomingJSON){

	//GETTING ITEM TITLE 
	pageTitleElement.innerText = incomingJSON["name"]; 

	//DIV THAT HOLDS INFO FOR A PARTICULAR TOPIC/SECTION 
	let newMentorElement = document.createElement("DIV"); 

	//IMG IS APPENDED TO THE DIV
	// let newMentorImage = document.createElement("IMG");
	// newMentorImage.classList.add("myImage"); 
	// newMentorImage.src = incomingJSON["image"]; 
	// newMentorElement.appendChild(newMentorImage); 

	let newMentorVid = document.createElement("video"); 
	newMentorVid.src = incomingJSON["video"]; 
	newMentorVid.controls = true;
	newMentorVid.classList.add("myImage"); 
	newMentorElement.appendChild(newMentorVid);


	//INFO IS APPENDED TO THE DIV 
  //BURNING QS
	let newMentorInformation = document.createElement("P"); 
	//NEED TO ADD ALL OF THEM!!
	newMentorInformation.classList.add("burning-qs"); 
	newMentorInformation.innerText =  incomingJSON["burning-qs"]; 
	newMentorElement.appendChild(newMentorInformation); 



  //EDUCATION
// "education" : "Major: CS",
  //  "specialties"
  let newMentorInformation2 = document.createElement("P"); 
  //NEED TO ADD ALL OF THEM!!
  newMentorInformation2.classList.add("education"); 
  newMentorInformation2.innerText =  incomingJSON["education"]; 
  newMentorElement.appendChild(newMentorInformation2); 


  //SPECIALTIES
  let newMentorInformation3 = document.createElement("P"); 
  //NEED TO ADD ALL OF THEM!!
  newMentorInformation3.classList.add("specialties"); 
  newMentorInformation3.innerText =  incomingJSON["specialties"]; 
  newMentorElement.appendChild(newMentorInformation3); 







  //DISPLAY THE ENTIRE SECTION -> APPEND THE DIV WITH ALL ELEMENTS FROM PAGE TO OVERALL 
  //MENTOR DIV 
  mentorDisplayElement.appendChild(newMentorElement);


}







