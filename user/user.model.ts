import {Validate, ScrubOut} from 'expresskit/dto';

export class User {
    @Validate({
        required: true,
        type: 'number'
    })
    public id: number;

    @Validate({
        required: true,
        type: 'string',
        maxLength: 255,
        pattern: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'Please enter a valid email']
    })
    public email: string;

    @ScrubOut()
    @Validate({
        required: true,
        type: 'string',
        minLength: 8,
        maxLength: 255,
        pattern: [/[^\w\d\s]/, 'At least one special character is required']
    })
    public password: string;
}