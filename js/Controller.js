$(function(){
    window.addEventListener("keydown", function(event) {
        if(event.key === 'w' || event.key === 'W' || event.key === "ArrowUp"){
            if(upMovable()){
                setRound();
                upMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
        if(event.key === 'a' || event.key === 'A' || event.key === "ArrowLeft"){
            if(leftMovable()){
                setRound();
                leftMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
        if(event.key === 's' || event.key === 'S' || event.key === "ArrowDown"){
            if(downMovable()){
                setRound();
                downMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
        if(event.key === 'd' || event.key === 'D' || event.key === "ArrowRight"){
            if(rightMovable()){
                setRound();
                rightMove();
                generateNum();
                displayGame();
                showScore();
            }else{
                checkFail();
            }
        }
    }, false);

    $("#btn").click(function(){
        newGame();
    });

let startX, startY, endX, endY;

document.addEventListener("touchstart", function(e){
    if(e.touches.length === 1){
        e.preventDefault(); // 防止下滑刷新
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }
}, { passive: false });

document.addEventListener("touchmove", function(e){
    e.preventDefault(); // 防止滚动页面
}, { passive: false });

document.addEventListener("touchend", function(e){
    if(e.changedTouches.length === 1){
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;

        let deltaX = endX - startX;
        let deltaY = endY - startY;

        const threshold = 30;

        if(Math.abs(deltaX) >= Math.abs(deltaY)){
            if(deltaX > threshold){
                simulateKey('d');
            } else if(deltaX < -threshold){
                simulateKey('a');
            }
        } else {
            if(deltaY > threshold){
                simulateKey('s');
            } else if(deltaY < -threshold){
                simulateKey('w');
            }
        }
    }
}, false);

function simulateKey(key){
    let event = new KeyboardEvent("keydown", { key: key });
    window.dispatchEvent(event);
}
});

function setRound(){
    if(isFirst){
        isFirst = false;
    }
}

function newGame(){
    initBoard();
    generateNum();
    generateNum();
    displayGame();
    score = 0;
    isFirst = true;
    showScore();
}
