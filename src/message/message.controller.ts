import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {MessageService} from "./message.service";
import {CreateMessageDto} from "./dto/create-message.dto";

@Controller('messages')
export class MessageController {
    constructor(private readonly messageService: MessageService) {}

    @Get('user/:id')
    public getMessagesByUser(@Param('id') id: number) {
        return this.messageService.findMessagesByUser(id)
    }
    @Get(':id')
    public getMessages(@Param('id') id: number) {
        return this.messageService.findMessage(id)
    }

    @Post()
    public async createMessage(@Body() createMessageDto: CreateMessageDto) {
        return await this.messageService.create(createMessageDto)
    }
}
