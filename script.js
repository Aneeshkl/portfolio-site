document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s ease";
        });

        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";
        });
    });

    // Smooth page transitions
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetPage = link.getAttribute("href");
            document.body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = targetPage;
            }, 300);
        });
    });

    document.body.style.transition = "opacity 0.3s ease-in-out";
    document.body.style.opacity = 1;
});