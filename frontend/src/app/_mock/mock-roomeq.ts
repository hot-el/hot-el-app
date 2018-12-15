import { RoomEquipment } from '../_models/room.equipment';
import { Room } from '../_models/room';

export const ROOM101EQ: RoomEquipment[] = [
    { id: 11, name: "Łóżko", condition: "Idealny", lastServiceDate: new Date(2001, 10) },
    { id: 12, name: "Stół", condition: "Dobry", lastServiceDate: new Date(2003, 12) },
    { id: 13, name: "Stolik nocny", condition: "Zły", lastServiceDate: new Date(2005, 8) },
    { id: 14, name: "Lampa", condition: "Dobry", lastServiceDate: new Date(2010, 2) }
]

export const ROOM203EQ: RoomEquipment[] = [
    { id: 15, name: "Łóżko dwuosobowe", condition: "Średni", lastServiceDate: new Date(2011, 5) },
    { id: 16, name: "Lustro", condition: "Dobry", lastServiceDate: new Date(2015, 1) },
    { id: 17, name: "Krzesło", condition: "Wspaniały", lastServiceDate: new Date(2009, 8) }
]

export const ROOM303EQ: RoomEquipment[] = [
    { id: 18, name: "Leżanka", condition: "Parszywy", lastServiceDate: new Date(2001, 3) },
    { id: 19, name: "Świeca", condition: "Zniszczona", lastServiceDate: new Date(2003, 6) },
    { id: 20, name: "Nocnik", condition: "Brudny", lastServiceDate: new Date(2008, 5) }
]