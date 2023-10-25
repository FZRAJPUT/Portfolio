const script = document.getElementById("js");
        const view = document.getElementById("view");
        const close = document.getElementById("Close");
        const button = document.getElementById("port");

        // for Changing Theme
        const changeStyleButton = document.getElementById("theme1");
        const themeLink = document.getElementById("theme");
        let isStyle1 = true;
        changeStyleButton.addEventListener("click", () => {
            if (isStyle1) {
                themeLink.href = "style2.css";
            } else {
                themeLink.href = "style.css";
            }
            isStyle1 = !isStyle1;
        });

        // for portfolio close
        function hideView() {
            view.style.display = "none";
        }
        close.addEventListener("click", hideView);

        // for portfolio view
        function view2() {
            view.style.display = "block";
        }
        button.addEventListener("click", view2);

        // for Intro
        let start = true;
        button.addEventListener("click", () => {
            if (start) {
                script.src = "java.js"; // Assuming you want to load a JavaScript file
            } else {
                script.src = "";
            }
            start = !start;
        });