package com.s10p31a709.game.api.socket.service;

import com.s10p31a709.game.api.room.entity.Player;
import com.s10p31a709.game.api.room.entity.Room;
import com.s10p31a709.game.api.room.repository.RoomRepository;
import com.s10p31a709.game.api.socket.model.StompPayload;
import com.s10p31a709.game.common.feign.service.MemberServiceClient;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
@RequiredArgsConstructor
public class PlayerSocketService {

    private final RoomRepository roomRepository;
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final MemberServiceClient memberServiceClient;

    public void exitPlayer(String sessionId){
        Player player = roomRepository.findPlayerBySessionId(sessionId);
        if (player == null) return;
        Room room = roomRepository.findRoomByNickname(player.getNickname());
        if (room == null) return;

        StompPayload<Player> payload = new StompPayload<>("player.exit", room.getRoomId(), "system", player);
        simpMessagingTemplate.convertAndSend("/sub/room/"+room.getRoomId(), payload);
        memberServiceClient.deleteGuest(player.getNickname());
        roomRepository.deletePlayerByNickname(sessionId);
    }

    public void enterPlayer(StompPayload<Player> message){
        Player player = roomRepository.savePlayer(message.getRoomId(), message.getData());

        StompPayload<Player> payload = new StompPayload<>("player.enter", message.getRoomId(), "system", player);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

    public void movePlayer(StompPayload<Player> message){
        Player player = roomRepository.findPlayerByNickname(message.getData().getNickname());
        player.setPosition(message.getData().getPosition());

        StompPayload<Player> payload = new StompPayload<>("player.move", message.getRoomId(), "system", player);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

    public void deadPlayer(StompPayload<Player> message){
        Player player = roomRepository.findPlayerByNickname(message.getData().getNickname());
        player.setIsDead(true);

        StompPayload<Player> payload = new StompPayload<>("player.dead", message.getRoomId(), "system", player);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

    public void objectPlayer(StompPayload<Player> message){
        Player player = roomRepository.findPlayerByNickname(message.getData().getNickname());
        player.setSelectedIndex(message.getData().getSelectedIndex());

        StompPayload<Player> payload = new StompPayload<>("player.object", message.getRoomId(), "system", player);
        simpMessagingTemplate.convertAndSend("/sub/room/"+message.getRoomId(), payload);
    }

}
