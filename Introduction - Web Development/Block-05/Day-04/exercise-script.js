window.onload = function() {
    // Define Default User Preferences
    let userPreferences = {
        backgroundColor:"white",
        textColor:"black",
        fontSize:"1.5em",
        fontType:"Times New Roman",
    }

    let styleKeys = {
        backgroundColor:"background-color",
        textColor:"color",
        fontSize:"font-size",
        fontType:"font-family",
    }
    
    loadPreferences();
    changePreferences(); 
    document.getElementById("change-button").addEventListener("click",changePreferences);

    // Load all preferences to read the content
    function loadPreferences() {
        if (typeof (Storage) != "undefined") {
            for(let preference in userPreferences){
                console.log(preference);
                loadPreference(preference);
            };
            
        } else {
          document.write("No support for Web Storage");
        }  
    }

    // Load a preference
    function loadPreference(keyPreference) {
        // Load from Storage
        if(localStorage.getItem(keyPreference) !== null) {
            let value = localStorage.getItem(keyPreference);
            console.log("Get of Storage: " + value);
            document.getElementById(keyPreference).value = value;
        } else { // Load from Default
            let value = userPreferences[keyPreference];
            console.log("Get of Default: " + value);
            document.getElementById(keyPreference).value = value;
        }
    }

    function changePreferences() {
        let styleToAplly = '';

        for(let preference in userPreferences){
            console.log("Change preference: " + preference);
            // get input preference
            let value = document.getElementById(preference).value;
            console.log("Change to value: " + value);
            // build style
            styleToAplly += `${styleKeys[preference]}: ${value};`;
            console.log("Style to apply: " + styleToAplly);
            
            // save preference on Storage
            localStorage.setItem(preference,value);
        }   
        
        let divContent = document.querySelector(".container_content");
        divContent.setAttribute("style", styleToAplly);
    } 
}