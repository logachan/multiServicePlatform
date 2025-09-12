import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors:{
    orgin:"*"
  }
})
export class ChatGateway {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage("message")
  handleMessage(
    @MessageBody() message:{text:string},
    @ConnectedSocket() client:Socket
  ) {
    console.log("Receveied, : ", message);
    this.server.emit("message",message)
    
  }
}
