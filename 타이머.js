const json = require('./setting.json')
var h = json.h
var m = json.m
var s = json.s
var stop2 = []
s++
if (h > 24) {
    console.log('제대로된 시간으로 설정해주세요')
    return
} else if (h == 24 && m > 1) {
    console.log('제대로된 시간으로 설정해주세요')
    return
} else if (h == 24 && s >= 1) {
    console.log('제대로된 시간으로 설정해주세요')
    return
} else if (h == 24 && m >= 1 && s >= 1) {
    console.log('제대로된 시간으로 설정해주세요')
    return
} else if (m > 61) {
    console.log('제대로된 시간으로 설정해주세요')
    return
} else if (s > 60) {
    console.log('제대로된 시간으로 설정해주세요')
    return
} else if (m > 59) {
    console.log('제대로된 시간으로 설정해주세요')
    return
}else if(!m && s){
    console.log('제대로된 시간으로 설정해주세요')
    return
}else if(!h && s){
    console.log('제대로된 시간으로 설정해주세요')
    return
}else if(!s){
    console.log('제대로된 시간으로 설정해주세요')
    return
}else if(h == String){
    console.log('제대로된 시간으로 설정해주세요')
    return
}else if(m == String){
    console.log('제대로된 시간으로 설정해주세요')
    return
}else if(s == String){
    console.log('제대로된 시간으로 설정해주세요')
    return
}else{
    console.log(`타이머 작동 시작`)
}
var stop = setInterval(() => {
    s--
    if (h == 0 && m == 0 && s == 0) {
        console.log(`타이머가 종료되었습니다.`)
        clearInterval(stop)
    } else if (h == 0 && m == 0) {
        console.log(`${s}초`)
    } else if (h == 0) {
        console.log(`${m}분${s}초`)
    } else {
        console.log(`${h}시${m}분${s}초`)
    }
    if (s == 0) {
        if (m < 0) {
            s = 60
        } else {
            m--
            s = 60
        }
    }
    if (m < 0) {
        if (h != 0) {
            h--
            m = 59
        }
    }
}, 1000);
