const result = document.querySelector(".result");
const today = new Date().toISOString().split("T")[0];
document.querySelector(".dob").setAttribute("max", today);

function calculateAge() {
    const dob = document.querySelector(".dob").value;
    const finalDob = new Date(dob);
    const today = new Date();

    if(!dob) {
        alert("Please enter valid Date of Birth!");
        return;
    }

    let year = today.getFullYear() - finalDob.getFullYear();
    let month = today.getMonth() - finalDob.getMonth();
    let day = today.getDate() - finalDob.getDate();
    
    if(day < 0){
       month--;
       let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
       day += prevMonth.getDate(); 
    }
    
    if(month < 0) {
        year--;
        month += 12;
    }

    if(month === 0 && day === 0) {
        result.innerHTML = `<span>🎉</span> You're <b>${year}</b> years, <b>${month}</b> months and <b>${day}</b> days old.<br><span>🎊🎈</span>Congratulations, Today is your Birthday!<span>🎁</span>`;
        result.style.visibility = 'visible';
        result.style.opacity = 1;
        return;
    }

    result.innerHTML = `<span>🎉</span> You're <b>${year}</b> years, <b>${month}</b> months and <b>${day}</b> days old.`;
    result.style.visibility = 'visible';
    result.style.opacity = 1;
}
