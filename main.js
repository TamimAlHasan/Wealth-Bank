// Login button event

let userName = "user@gmail.com";
let password = "1234";

let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
    if (emailField.value == userName && passwordField.value == password) {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transcationArea = document.getElementById("transaction-area");
        transcationArea.style.display = "block";
    } else {
        alert("Please enter correct email or password");
    }
});

// Deposite button event
const depositeBtn = document.getElementById("deposite-btn");
depositeBtn.addEventListener("click", function () {
    const depositeAmnt = parseFloat(
        document.getElementById("deposite-amnt").value
    );
    const crntDeposite = parseFloat(
        document.getElementById("crnt-deposite").innerText
    );
    const totalBalance = parseFloat(
        document.getElementById("total-balance").innerText
    );
    //console.log(depositeAmnt, crntDeposite, totalBalance);
    const totalDeposite = depositeAmnt + totalBalance;

    // // Update amount
    document.getElementById("crnt-deposite").innerText =
        depositeAmnt + crntDeposite;
    document.getElementById("total-balance").innerText = totalDeposite;
    document.getElementById("deposite-amnt").value = "";
});

// Withdraw button event
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {

    const withdrawAmnt = parseFloat(
        document.getElementById("withdraw-amnt").value
    );
    const crntWithdraw = parseFloat(
        document.getElementById("crnt-withdraw").innerText
    );
    const totalBalance = parseFloat(
        document.getElementById("total-balance").innerText
    );
    if (withdrawAmnt > totalBalance) {
        alert("Not enough money to withdraw!");
    }
    else {
        const totalWithdraw = totalBalance - withdrawAmnt;

        // Update amount
        document.getElementById("crnt-withdraw").innerText = withdrawAmnt + crntWithdraw;
        document.getElementById("total-balance").innerText = totalWithdraw;
        document.getElementById("withdraw-amnt").value = "";
    }
});
