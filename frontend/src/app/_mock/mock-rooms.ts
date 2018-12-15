import { Room } from '../_models/room'
import { RoomEquipment } from '../_models/room.equipment'
import { ROOM101EQ, ROOM203EQ, ROOM303EQ} from './mock-roomeq';

export const ROOMS: Room[] = [
    { id: 11, roomNumber: 101, floor: 1, state: "wolne", equipment: ROOM101EQ },
    { id: 12, roomNumber: 203, floor: 2, state: "zarezerwowane", equipment: ROOM203EQ },
    { id: 13, roomNumber: 303, floor: 3, state: "zajęte", equipment: ROOM303EQ }
]
