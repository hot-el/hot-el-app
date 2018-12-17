import { RoomEquipment } from './room.equipment';

export class Room {
    id: number;
    roomNumber: number;
    floor: number;
    state: string;
    equipment: RoomEquipment[];
}