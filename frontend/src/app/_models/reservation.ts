import { Room } from './room';

export class Reservation {
    id: string;
    firstName: string;
    lastName: string;
    idCard: string;
    from: Date;
    to: Date;
    room: Room;
}
