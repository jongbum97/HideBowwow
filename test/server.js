const { text } = require('express');
const { Server } = require('socket.io');

const io = new Server({
    cors: {
        origin: '*',
    },
});

io.listen(4000);

const players = [];

io.on('connection', (socket) => {
    console.log('연결됨!');

    io.emit('players', players);

    socket.on(
        'initialize',
        ({ tempNickname, tempJobPosition, selectedCharacterGlbNameIndex }) => {
            const newPlayer = {
                id: socket.id,
                position: [0, 0, 0],
                nickname: tempNickname,
                jobPosition: tempJobPosition,
                selectedCharacterGlbNameIndex,
                myRoom: {
                    objects: [],
                },
            };
            players.push(newPlayer);

            console.log(newPlayer);

            socket.emit(
                'initialize',
                players.find((p) => p.id === socket.id)
            );

            io.emit('enter', {
                id: socket.id,
                nickname: newPlayer.nickname,
                jobPosition: newPlayer.jobPosition,
            });

            io.emit('players', players);
        }
    );

    socket.on('move', (position) => {
        console.log('players', players);
        const player = players.find((p) => p.id === socket.id);
        if (player) {
            player.position = position;
            io.emit('players', players);
        }
    });
    socket.on('newText', (text) => {
        const sender = players.find((p) => p.id === socket.id);
        if (sender) {
            const { id, nickname, jobPosition } = sender;
            if (nickname && jobPosition) {
                io.emit('newText', {
                    senderId: id,
                    senderNickName: nickname,
                    senderJobPosition: jobPosition,
                    text,
                    timestamp: new Date(),
                });
            }
        }
    });

    socket.on('myRoomChange', (myRoom, otherPlayerId) => {
        console.log('방이 바뀌었나?');
        const id = otherPlayerId || socket.id;
        const player = players.find((p) => p.id === id);
        player.myRoom = myRoom;
        io.emit('players', players);
    });

    socket.on('disconnecting', () => {
        console.log('연결이 끊어지는 중!');
        const player = players.find((p) => p.id === socket.id);
        if (player) {
            io.emit('exit', {
                id: socket.id,
                nickname: player.nickname,
                jobPosition: player.jobPosition,
            });
        }
    });

    socket.on('disconnect', () => {
        console.log('연결이 끊어짐!');
        players.splice(
            players.findIndex((p) => p.id === socket.id),
            1
        );
        io.emit('players', players);
    });
});
