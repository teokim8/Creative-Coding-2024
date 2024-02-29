import { WebSocketServer} from 'ws';

const wss = new WebSocketServer({port : 3000});

wss.on ('connection', onConnection);

function onConnection (ws) {
    //console.log('connected');
    ws.on('message', onMessage);
}

function onMessage(data){

    //console.log('on message', data);

    for (let i = 0; i < wss.client.length; i++){
        const c = wss.clients[i];
        c.send(data);
    }
}