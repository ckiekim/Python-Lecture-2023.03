// 자바스크립트는 호출전에 함수를 꼭 미리 만들 필요가 없다.
hello();

function hello() {
    console.log('Hello world');
}

function facto(num) {
    if (num == 0)
        return 1;
    return num * facto(num - 1);
}

console.log(facto(5));