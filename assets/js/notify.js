function showNotification(message, type) {
    const notificationDiv = document.getElementById("notification");
    notificationDiv.style.display = "flex"
    notificationDiv.animate(
        [
            { top: "-215px" },
            { top: "-30px" }
        ],
        {
            duration: 1000, // 1000ms (1 second)
            fill: "forwards" // Retain the final animation state
        }
    );

    notificationDiv.innerHTML = `<p>${message}</P>`;

    if (type === "success") {
        notificationDiv.style.backgroundColor = "green";
        notificationDiv.style.color = "white";
    } else if (type === "error") {
        notificationDiv.style.backgroundColor = "red";
        notificationDiv.style.color = "white";
    }

    // Hide the notification after a short delay (e.g., 3 seconds)
    setTimeout(() => {
        notificationDiv.animate(
            [
                { top: "-30px" },
                { top: "-265px" }
            ],
            {
                duration: 1000, // 1000ms (1 second)
                fill: "forwards" // Retain the final animation state
            }
        );
    }, 3000);
}





