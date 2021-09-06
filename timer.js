const json = require('./setting.json');

let time = {
    h: json.h,
    m: json.m,
    s: json.s + 1 // 1초로 작동시 바로 종료되는것을 방지
};

for (i in time) {
    if (typeof time[i] !== "number") return console.log("타입이 올바르지 않습니다.");
    if (isNaN(time[i]) || time[i] < 0) return console.log("올바른 숫자를 기입하여 사용해주세요.");
}

console.log(`타이머 작동 시작`)

var stop = setInterval(() => {
    time.s--
    if (time.h == 0 && time.m == 0 && time.s == 0) {
        console.clear();
        console.log("타이머가 종료되었습니다.");
        clearInterval(stop);
    } else if (time.h == 0 && time.m == 0) {
        console.clear();
        console.log(time.s + "초");
    } else if (time.h == 0) {
        console.clear();
        console.log(time.m + "분" + time.s + "초");
    } else {
        console.clear(time.h + "시" + time.m + "분" + time.s + "초");
    }
    if (time.s == 0) {
        if (time.m < 0) {
            time.s = 60
        } else {
            time.m--
            time.s = 60
        }
    }
    if (time.m < 0) {
        if (time.h != 0) {
            time.h--
            time.m = 59
        }
    }
}, 1000);