function getAkanName(){
    var yearOfBirth = document.getElementById("dateOfBirth").value;
    var gender = document.getElementById("flexRadioDefault1");
    var valid = false;
    var i = 0;
    var j = 0;

    function getGender(){
        while(i < gender.length){
            if (gender[i].checked){
                valid = true;
            }
            i++;
        }
    }
}