import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 20 }, // Simula 20 usuários por 1 minuto
    ],
};

export default function () {
    http.get('http://test.k6.io');
    sleep(1);
}