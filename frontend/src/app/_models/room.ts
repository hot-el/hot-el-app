import { RoomEquipment } from './room.equipment';

export class Room {
    id: number;
    roomNumber: number;
    floor: number;
    state: string;
    equipment: RoomEquipment[];

    public addEquipment(equipment: RoomEquipment) {
        this.equipment.push(equipment);
    }

    public deleteEquipment(id: number) {
        this.equipment.splice(this.equipment.findIndex(x => x.id == id), 1)
    }
}