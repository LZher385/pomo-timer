import React, {
    useState
} from "react";

    let end = 0;
    let pauseTime = 0;
    let intFn = () => {};
    let currentTime = 0;
    let pause = false;
    let timerNext = false;
    let timerRun = false;
    let timers = {
        work: 'work',
        shortBreak: 'shortBreak',
        longBreak: 'longBreak'
    };
    let timerState = 'work';
    let count = 0;

function Stopwatch(props) {
    const [timer, setTimer] = useState(formatTime(props.settings.work));// formatTime(props.settings['work'])

    //add reject eventually!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function startTimer() {
        return new Promise((resolve, reject) => {

        console.log('Current timer mode: ' + timerState);
        if (timerRun) {
            alert("Timer is already running!");
            return;
        }
        currentTime = Date.now()  
        if (!pause) {
            end = Date.now() + props.settings[timerState] * 60000;
        }else {
            end = end + Date.now() - pauseTime;
            pause = false;
        }
        intFn = setInterval(function () {
            currentTime = Date.now()
            if (timerNext) {
                pauseHandler();
                pauseTime = pauseTime - 1000; //without this, timer starts goes from 1:00 to 00:58 immediately, find a better fix
                setTimer(formatTime(props.settings[timerState]));
                timerNext = false;
            } else if (end > currentTime) { // timer running
                timerRun = true;
                setTimer(timeToString(end - currentTime));
                pause = false;
            } else {
                timerRun = false;
                setTimer('00:00');
                clearInterval(intFn);// stops interval
                resolve();
                pause = false;
            }
        }, 1000);
    });
    }

    function pauseHandler() { //implement pause state for double clicking
        if (pause) {
            alert('Timer has already been paused!');
            return;
        }
        console.log('Pause handler executed');
        
        clearInterval(intFn); //wipe out display
        timerRun = false;
        pause = true;
        pauseTime = Date.now();
    }

    async function manageTimer() {
        while(count < props.settings.sessions) {
            if (timerState === 'work') {
                await startTimer();
                count++;
                timerNext = true; 
            }
            console.log('Session no.: '+ count);
            
            if (count === (props.settings.sessions)) {
                setTimer('00:00');
                alert('Well Done!!');
                timerNext = false;
                setTimer(formatTime(props.settings[timerState]));
                count = 0;
                break;
            };
            if (count % props.settings.longBreakInterval === 0) {
                timerState = timers.longBreak;
            } else {
                timerState = timers.shortBreak;
            }
            await startTimer();
            timerNext = true;
            console.log('set to worka at  end');
            
            timerState = timers.work;
        }
    };

    function timeToString(mseconds) { //from miliseconds
        let minutes = Math.floor(mseconds / 60000);
        let seconds = Math.ceil(mseconds % 60000 / 1000); 
        return formatTime(minutes, seconds);
    }

    function formatTime(minutes=0, seconds=0) {
        let minutePadding = '';
        let secondPadding = '';
        if (minutes < 10) minutePadding = '0';
        if (seconds < 10) secondPadding = '0';
        return `${minutePadding}${minutes}:${secondPadding}${seconds}`;
    }
//onclick is taking it as an event handler??
    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={manageTimer}>Start</button>
            <button onClick={pauseHandler}>Pause</button>
        </div>
    );
}

export default Stopwatch;