import React, {
    useState
} from 'react';
import Stopwatch from './Stopwatch';
import Settings from './Settings';

function App() {
    let settings = {};

    if(localStorage.getItem('settings') === null) { //store default settings in localStorage
        settings = {
            work: 25,
            shortBreak: 5,
            longBreak: 15,
            sessions: 2,
            longBreakInterval: 3
        };
        localStorage.setItem('settings', JSON.stringify(settings));
    }

    function changeSettings(workv, shortBreakv, longBreakv, sessionsv, longBreakIntervalv) { //change settings if any
        settings.work = workv;
        settings.shortBreak = shortBreakv;
        settings.longBreak = longBreakv;
        settings.sessions = sessionsv;
        settings.longBreakInterval = longBreakIntervalv;
        localStorage.setItem('settings', JSON.stringify(settings));
        console.log('Settings changed');
        
        for (let key in settings) {
            console.log(settings[key]);
        }
    }

    settings = JSON.parse(localStorage.getItem('settings'));
        settings = {
        work: 0.07, // for debugging
        shortBreak: 0.03,
        longBreak: 0.2,
        sessions: 3,
        longBreakInterval: 3
    };

    return ( 
        <div>
            <Stopwatch settings = {settings}/>
            <Settings changeSettings = {changeSettings} settings = {settings}/>
        </div>
        )

}

export default App;