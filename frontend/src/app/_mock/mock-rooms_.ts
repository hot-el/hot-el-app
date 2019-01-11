import { RoomModel } from '../_models/room-model';

export const ROOMS: RoomModel[] = [
    { id: 11, number: 101, type: 'Premium', size: 6, conservationDate: new Date(2001, 10)},
    { id: 12, number: 203, type: 'Premium', size: 4, conservationDate: new Date(2002, 10) },
    { id: 13, number: 303, type: 'Basic', size: 2, conservationDate: new Date(2003, 10) }
];
