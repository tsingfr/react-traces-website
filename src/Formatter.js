export function formatDistance(v) {
    v = v / 1000;
    return v.toFixed(2) + " KM";
}

export function formatSpeed(v) {
    return v.toFixed(2) + " KM/H";
}

export function formatDate(date) {
    var options = {  
	weekday: "long", year: "numeric", month: "short",  
	day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    return date.toLocaleTimeString("en-us", options);  
}
export function formatDuration(sec_num) {
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}