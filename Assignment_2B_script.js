
//removed iife function, I know the functionality of it, but it continued to give me errors and prevented my code from running properly
//initializing values
// let formInput;
let bayNumber;
let pHLevel;
let temperature;
let humidity;
let ec;
let records;
let submit;
let vitalsCard; // from commit 2
//let variables are better for Dynamic inputs than const variables
//better implementation than the commented out code


//first commit for 2B
const STORAGE_KEY_2B = 'agriculture_watch'

function saveLoader(){
  const storeConfirmed = localStorage.setItem((STORAGE_KEY_2B) , JSON.stringify(records));
}

function loadSave (){ //Used to reload records from the local storage
        try{
            
            const storeConfirmed = localStorage.getItem(STORAGE_KEY_2B);
          
            return storeConfirmed ? JSON.parse(storeConfirmed) : [];
        }catch (e) {
            console.error("local data not found");
            return [];
        }

    }


function render(){

            queueCount.textContent = records.length;

            if(records.length === 0) {
                emptyList.classList.remove('hidden');
                listOfRecords.innerHTML = listItem.innerHTML;
                return;
            }

          }
            emptyList.add('hidden');


//commit 2

const container = document.createDocumentFragment();

function addHTML () {
   //Function to add cards to the dashboard (this was merged with the new card function, kept for historical record)
}
function secureScriptFeature(str){
        //Security features for not leaving scripts vulnerable to injections
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,'&gt;');
} //this will be moved lower in the code in future commits


//End of first commit
bayNumber = document.getElementById("bay_num").value;
localStorage.setItem(bayNumber);
pHLevel = document.getElementById("pH_num").value;
localStorage.setItem(pHLevelNumber);
temperature = document.getElementById("temp_num").value;
localStorage.setItem(temperature);
humidity = document.getElementById("hum_num").value;
localStorage.setItem(humidity);
ec = document.getElementById("ec_num").value;
localStorage.setItem(ec);
// formInput = document.getElementById("tele_form"); //tell js to look at the form in the html doc
// bayNumber = formInput.elements["bay_num"].value; //Bay Number form input
// pHLevel = formInput.elements["pH_num"].value; //pH level Number form input
// temperature = formInput.elements["temp_num"].value; //temperature Number form input
// humidity = formInput.elements["hum_num"].value; //humidity Number form input
// ec = formInput.elements["ec_num"].value; //electrical conductivity Number form input
// submit = formInput.elements["submit_btn"]; // submit button for tele_form

function newCard() {
  //Adds the values from the form as an output to a card in the dashboard

  document.getElementById("bay-num-out").innerText = toString(bayNumber);
  document.getElementById("pH-num-out").innerText = toString(pHLevel);
  document.getElementById("temp-num-out").innerText = toString(temperature);
  document.getElementById("ec-num-out").innerText = toString(ec);
  document.getElementById("humidity-num-out").innerText = toString(humidity);

  //The following if else statement uses logical operators to set the criticalities for form submissions.

  if (
    (pHLevel < 5.0 || pHLevel > 7.5) &&
    (temperature < 55 || temperature > 95) &&
    (ec < 0.2 || ec > 4.5) &&
    (humidity < 30 || humidity > 90)
  ) {
    document.getElementById("Criticality").innerText = "critical";
  } else if (
    5.5 <= pHLevel <= 6.5 &&
    64.4 <= temperature <= 71.6 &&
    1.0 <= ec <= 2.0 &&
    50 <= humidity <= 70
  ) {
    document.getElementById("Criticality").innerText = "optimal";
  } else {
    document.getElementById("Criticality").innerText = "warning";
  }
}

event.preventDefault;
const listItem = document.createElement("div");
listItem.innerHTML = `

    <div id="card"  class="card">
            <p>Bay Number:</p>
            <p id="bay-num-out"></p>
            <p>Acidity:</p>
            <p id="pH-num-out"></p>
            <p>Temperature</p>
            <p id="temp-num-out"></p>
            <p>Electrical conductivity</p>
            <p id="ec-num-out"></p>
            <p>Relative Humidity</p>
            <p id="humidity-num-out"></p>
            <p>Criticality</p>
            <p id="Criticality"></p>
      </div>

`; //This line block will house the inner html in later commits

document.getElementById(dashboard).appendChild(listItem);


formInput.addEventListener("input", newCard); //looks for input for formInput, then executes newCard
// try {
//   //tries the code below while looking for errors to log
//   newCard();
// } catch (e) {
//   console.log(e);
// }

function clearCard() {
  //The following function clear all values from the form and sets them to null, it also updates the text to reflect the null values.

  document.getElementById("bay-num-out").innerText = "None";
  document.getElementById("pH-num-out").innerText = "None";
  document.getElementById("temp-num-out").innerText = "None";
  document.getElementById("ec-num-out").innerText = "None";
  document.getElementById("humidity-num-out").innerText = "None";
  document.getElementById("Criticality").innerText = "None";
  bayNumber = null;
  ec = null;
  pHLevel = null;
  temperature = null;
  humidity = null;
  localStorage.clear();

  let currentCard = document.getElementById("card"); //hides the cleared cards. remove this line of code to see other the categories for the card designate themselves as none.
  currentCard.style.display = "none";
  }

// Critical
// ○ (pH < 5.0 OR pH > 7.5) AND (Temp < 55F OR Temp > 95F) AND (EC < 0.2 OR EC > 4.5 ) AND (RH < 30 OR RH > 90 )
// ● Optimal
// ○ (5.5 <= pH <= 6.5) AND (64.4F <= Temp <= 71.6F) AND (1.0 <= EC <= 2.0) AND (50 <= RH <= 70)
// ● Warning
// ○ (NOT Critical) AND (NOT Optimal)



secureScriptFeature();
render();
