function startClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    const greetingElement = document.getElementById('greeting');

    function update() {
        const now = new Date();

        // 1. Time Logic
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        // Add leading zero (e.g., 9 becomes 09)
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        clockElement.innerText = `${hours}:${minutes}:${seconds}`;

        // 2. Date Logic
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.innerText = now.toLocaleDateString('en-US', dateOptions);

        // 3. Greeting Logic
        const curHr = now.getHours();
        if (curHr < 12) {
            greetingElement.innerText = "Good Morning ☀️";
        } else if (curHr < 18) {
            greetingElement.innerText = "Good Afternoon 🌤️";
        } else {
            greetingElement.innerText = "Good Evening 🌙";
        }
    }

    setInterval(update, 1000);
    update(); // Run immediately on load
}

startClock();