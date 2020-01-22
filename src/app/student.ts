export class Student {

    rollNo: number;
    name: string;
    address: string;
    email: string;
    gender: string;
    mobileNo: number;
    city: string;
    hobbies: string[];
    public constructor() {
        this.rollNo = null;
        this.name = '';
        this.email = '';
        this.address = '';
        this.gender = 'male';
        this.mobileNo = null;
        this.city = '';
        this.hobbies = [];
    }
}
