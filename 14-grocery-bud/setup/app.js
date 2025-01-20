// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
form.addEventListener('submit',addItem)

clearBtn.addEventListener('click',clearItems);
// ****** FUNCTIONS **********
function addItem(e){
  e.preventDefault();
  const value = grocery.value;
  
  const id = new Date().getTime().toString();
  if(value && !editFlag){
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                    <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                    </button>

                    <button type="button" class="delete-btn">
                      <i class="fas fa-trash"></i>
                    </button>
              </div>`;
              //append child
              list.appendChild(element);
              //display alert
              displayAlert('item added to the List','success');
              //show container
              container.classList.add('show-container');
              //add To Local storage
              addTolocalStorage(id,value);
              //set back default
              setBackToDefault;
  }else if(value && editFlag){
    console.log('editing');
  }else {
    displayAlert("please enter value","danger");
  }
};
 function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(()=>{
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    },1000)
 }
  //clear items
   function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    
    if(items.lenght > 0){
      items.forEach(function(item){
        list.removeChild(item);
      })
    }
  }
  //set back to default
 function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
 }
// ****** LOCAL STORAGE **********
function addTolocalStorage(id,value){
    console.log('added to local storage');
}
// * ***** SETUP ITEMS **********

