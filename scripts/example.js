import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 20 },
    ],
};

export default function () {
    let res = http.get('http://test.k6.io');
    check(res, {
        "is status 200": (r) => r.status === 200,
    });
    console.log(`Duration: ${res.timings.duration}`);
    sleep(1);
}
