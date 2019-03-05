(function () {
    window.onload = function () {
        let canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');

        const W = window.innerWidth;
        const H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;

        let MF = 70;
        let flakes = [];

        for (let i = 0; i < MF; i++) {
            flakes.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: Math.random() * 5 + 2,
                d: Math.random() + 1
            });
        }

        function drawFlakes() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.clearRect(0, 0, W, H);
            ctx.beginPath();
            for (let i = 0; i < MF; i++) {
                let f = flakes[i];
                ctx.fillStyle = `rgba(120, 120, 120, 0.1)`;
                ctx.moveTo(f.x, f.y);
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
            }
            ctx.fill();
            moveFlakes();

            requestAnimationFrame(drawFlakes);
        }

        let angle = 0;

        function moveFlakes() {

            angle += 0.01;

            for (let i = 0; i < MF; i++) {
                let f = flakes[i];
                f.y -= Math.pow(f.d, 2) + 0.01;
                f.x += Math.sin(angle) * 2;

                if (f.y < 0) {
                    flakes[i] = {
                        x: Math.random() * W,
                        y: H,
                        r: f.r,
                        d: f.d,
                        opacity: 0.1
                    };
                }
            }
        }

        requestAnimationFrame(drawFlakes);

    }
})();