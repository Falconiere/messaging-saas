import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
  namespace: 'v1/chat',
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @SubscribeMessage('chat')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }
}
