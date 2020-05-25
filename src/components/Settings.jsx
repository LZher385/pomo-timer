import React, {
    useState
} from "react";

function Settings(props) {
    const [sessions, setSessions] = useState(props.settings.sessions);
    const [work, setWork] = useState(props.settings.work);
    const [shortBreak, setShortBreak] = useState(props.settings.shortBreak);
    const [longBreakInterval, setLongBreakInterval] = useState(props.settings.longBreakInterval);
    const [longBreak, setLongBreak] = useState(props.settings.longBreak);

    function formSubmit(e) {
        props.changeSettings(work, shortBreak, longBreak, sessions, longBreakInterval);
    }

    function sessionsChange(event) {
        const {value} = event.target;
        setSessions(value);
    }

    function workChange(event) {
        const {value} = event.target;
        setWork(value);
    }

    function shortBreakChange(event) {
        const {value} = event.target;
        setShortBreak(value);
    }

    function longBreakIntervalChange (event) {
        const {value} = event.target;
        setLongBreakInterval(value);
    }

    function longBreakChange(event) {
        const {value} = event.target;
        setLongBreak(value);
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <div className='form-group'>
                    <label htmlFor='numberOfSessions'>Number of work sessions</label>
                    <input onChange = {sessionsChange} type='number' className='form-control' id='numberOfSessions' placeholder='Enter a wholenumber' name='sessions' value={sessions}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='workSessionLength'>Length of each work session</label>
                    <input onChange = {workChange} type='number' className='form-control' id='workSessionLength' placeholder='Enter a wholenumber' name='work' value={work}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='shortBreakLength'>Length of each short break</label>
                    <input onChange={shortBreakChange} type='number' className='form-control' id='shortBreakLength' placeholder='Enter a wholenumber' name='shortBreak' value={shortBreak}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='longBreakInterval'>Number of work sessions to a long break</label>
                    <input onChange={longBreakIntervalChange} type='number' className='form-control' id='longBreakInterval' placeholder='Enter a wholenumber' name='longBreakInterval' value={longBreakInterval}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='longBreakLength'>Length of each long break</label>
                    <input onChange={longBreakChange} type='number' className='form-control' id='longBreakLength' placeholder='Enter a wholenumber' name='longBreak' value={longBreak}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Settings;