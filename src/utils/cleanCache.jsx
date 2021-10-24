
const MAX_HOUR = 1;
const MINUTS = 60;
const SECONDS = 60;
const MILLI_SECONDS = 1000;

export const checkCron = () => {

    let now = new Date().getTime();
    
    // Check current time 
    let startTime = localStorage.getItem('startTime');
    
    if (startTime == null) {
        localStorage.setItem('startTime', now)
    } else {
        // Si el tiempo actual y el tiempo inicial es mayor que el cron entonces limpiamos
        if(now-startTime > MAX_HOUR*MINUTS*SECONDS*MILLI_SECONDS) {
            localStorage.clear()
            localStorage.setItem('startTime', now);
        }
    }
}
