document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("orderForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
});
